import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressSteps from "./ProgressSteps";
import SummaryCard from "./SummaryCard";
import { formSchema, type ContactFormValues } from "./formSchema";
import { trackEvent } from "@/lib/analytics";

const SERVICE_BY_SLUG: Record<string, string> = {
  "signage-branding": "Signage Branding",
  "promotional-branding": "Promotional Items",
  "corporate-stationery-printing": "Marketing Materials",
  "garment-printing": "Garment Printing",
  "exhibition-event-branding": "Exhibition Branding",
  "office-interior-branding": "Office Branding",
  "outdoor-branding": "Large Format Printing",
  "cnc-laser-branding": "CNC Laser Cutting",
};

const WHATSAPP_NUMBER = "254740653661";
const ENDPOINT =
  (import.meta.env.VITE_QUOTE_ENDPOINT as string | undefined) || "/api/quote";

export default function QuoteForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const preselectedService = useMemo(() => {
    const slug = searchParams.get("service");
    return slug ? SERVICE_BY_SLUG[slug] : undefined;
  }, [searchParams]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      services: preselectedService ? [preselectedService] : [],
      timeline: "",
      budget: "",
      projectDetails: "",
      referralSource: "",
    },
  });

  const nextStep = async () => {
    const fields =
      step === 1
        ? (["fullName", "email", "phone"] as const)
        : (["services", "timeline", "budget"] as const);

    const valid = await form.trigger(fields, { shouldFocus: true });
    if (valid) setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => setStep((current) => Math.max(current - 1, 1));

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const data = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "attachment") return;
      if (Array.isArray(value)) {
        value.forEach((item) => data.append(key, String(item)));
      } else if (value !== undefined && value !== null) {
        data.append(key, String(value));
      }
    });
    if (values.attachment instanceof File) {
      if (values.attachment.size > 4 * 1024 * 1024) {
        setSubmitError("Please upload a file smaller than 4 MB, or share it on WhatsApp.");
        setIsSubmitting(false);
        return;
      }
      data.append("attachment", values.attachment);
    }
    data.append("page", window.location.pathname);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      trackEvent("generate_lead", {
        services: values.services.join(", "),
        budget: values.budget,
        timeline: values.timeline,
      });

      form.reset();
      navigate("/thank-you");
    } catch {
      setSubmitError(
        "We couldn't submit your request right now. Please try again or send it to us on WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildWhatsappFallback = () => {
    const values = form.getValues();
    const message = [
      `Hello DCC, I'd like a quote.`,
      values.fullName && `Name: ${values.fullName}`,
      values.companyName && `Company: ${values.companyName}`,
      values.services?.length && `Services: ${values.services.join(", ")}`,
      values.budget && `Budget: ${values.budget}`,
      values.projectDetails && `Details: ${values.projectDetails}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="contact-form" className="scroll-mt-28">
      <div className="rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-10">
        <ProgressSteps currentStep={step} />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
            {step === 1 && <StepOne form={form} />}
            {step === 2 && <StepTwo form={form} />}
            {step === 3 && <StepThree form={form} />}

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            {step === 3 && (
              <div className="mt-8">
                <SummaryCard form={form} />
              </div>
            )}

            {submitError && (
              <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <p>{submitError}</p>
                <a
                  href={buildWhatsappFallback()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-semibold text-red-800 underline underline-offset-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send these details on WhatsApp instead
                </a>
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={previousStep}
                disabled={step === 1 || isSubmitting}
                className="h-12"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {step < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="h-12 bg-accent px-8 font-bold text-white hover:bg-accent/90"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 bg-accent px-8 font-bold text-white hover:bg-accent/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Quote Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>

            <p className="mt-4 text-center text-xs leading-6 text-muted-foreground sm:text-left">
              By submitting this form you agree to our{" "}
              <a href="/privacy" className="font-medium text-primary underline underline-offset-2">
                privacy policy
              </a>
              . We only use your details to prepare your quote.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
