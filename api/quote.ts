/**
 * Quote request endpoint (Vercel Edge Function).
 *
 * Delivery options (set one in Vercel → Project → Settings → Environment Variables):
 *   1. RESEND_API_KEY + QUOTE_TO_EMAIL  → sends an email via Resend
 *   2. QUOTE_WEBHOOK_URL                → POSTs JSON to Zapier / Make / Google Apps Script
 *
 * If neither is configured the endpoint returns 503 so the website can show a
 * WhatsApp fallback instead of silently losing the lead.
 */

export const config = { runtime: "edge" };

const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel request body limit

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  let values: Record<string, string | string[]> = {};
  let attachment: { filename: string; content: string } | null = null;

  try {
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();

      for (const [key, value] of form.entries()) {
        if (key === "attachment") continue;
        if (typeof value === "string") {
          if (key in values) {
            const existing = values[key];
            values[key] = Array.isArray(existing)
              ? [...existing, value]
              : [existing, value];
          } else {
            values[key] = value;
          }
        }
      }

      const file = form.get("attachment");
      if (file instanceof File && file.size > 0) {
        if (file.size > MAX_FILE_BYTES) {
          return json({ ok: false, error: "Attachment is too large" }, 413);
        }
        const buffer = await file.arrayBuffer();
        let binary = "";
        const bytes = new Uint8Array(buffer);
        const chunk = 0x8000;
        for (let i = 0; i < bytes.length; i += chunk) {
          binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
        }
        attachment = { filename: file.name, content: btoa(binary) };
      }
    } else {
      values = (await request.json()) as Record<string, string | string[]>;
    }
  } catch {
    return json({ ok: false, error: "Invalid request body" }, 400);
  }

  // Honeypot
  if (values.website) {
    return json({ ok: true });
  }

  const fullName = String(values.fullName || "").trim();
  const email = String(values.email || "").trim();
  const phone = String(values.phone || "").trim();
  const services = values.services
    ? Array.isArray(values.services)
      ? values.services.join(", ")
      : String(values.services)
    : "";

  if (!fullName || !email || !phone || !services) {
    return json({ ok: false, error: "Missing required fields" }, 422);
  }

  const lead = {
    fullName,
    companyName: String(values.companyName || ""),
    email,
    phone,
    services,
    timeline: String(values.timeline || ""),
    budget: String(values.budget || ""),
    projectDetails: String(values.projectDetails || ""),
    referralSource: String(values.referralSource || ""),
    page: String(values.page || ""),
    attachmentName: attachment?.filename || "",
    submittedAt: new Date().toISOString(),
  };

  const webhookUrl = process.env.QUOTE_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.QUOTE_TO_EMAIL || "depotcovers001@gmail.com";
  const fromEmail =
    process.env.QUOTE_FROM_EMAIL || "DCC Website <onboarding@resend.dev>";

  try {
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    } else if (resendKey) {
      const rows = Object.entries(lead)
        .filter(([, value]) => value)
        .map(
          ([key, value]) =>
            `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;font-weight:600;text-transform:capitalize">${escapeHtml(key)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee">${escapeHtml(String(value))}</td></tr>`,
        )
        .join("");

      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${resendKey}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `New quote request — ${fullName} (${services})`,
          html: `<h2 style="font-family:sans-serif">New quote request</h2><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`,
          attachments: attachment ? [attachment] : undefined,
        }),
      });

      if (!response.ok) throw new Error(`Resend responded ${response.status}`);
    } else {
      console.error("Quote endpoint is not configured", lead);
      return json({ ok: false, error: "not_configured" }, 503);
    }
  } catch (error) {
    console.error("Failed to deliver quote request", error, lead);
    return json({ ok: false, error: "delivery_failed" }, 502);
  }

  return json({ ok: true });
}
