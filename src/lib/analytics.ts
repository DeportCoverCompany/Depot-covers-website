/**
 * Lightweight analytics helpers.
 *
 * GA4 is only loaded when VITE_GA_MEASUREMENT_ID is present, so there is no
 * third-party script cost in local development or preview builds.
 * Outbound phone / email / WhatsApp clicks and form submissions are tracked
 * through a single delegated listener.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function initAnalytics() {
  if (!GA_ID || typeof window === "undefined") return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });

  document.addEventListener("click", (event) => {
    const anchor = (event.target as HTMLElement | null)?.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href") || "";
    let eventName = "";

    if (href.startsWith("tel:")) eventName = "call_click";
    else if (href.startsWith("mailto:")) eventName = "email_click";
    else if (href.includes("wa.me") || href.includes("whatsapp")) eventName = "whatsapp_click";
    else if (href.includes("/contact") || href.includes("/quote")) eventName = "quote_cta_click";

    if (eventName) {
      trackEvent(eventName, {
        link_text: (anchor.textContent || "").trim().slice(0, 80),
        link_url: href,
        page_path: window.location.pathname,
      });
    }
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}
