import { useState } from "react";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import { formSchema } from "./formSchema";
import type { ContactFormValues } from "./formSchema";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressSteps from "./ProgressSteps";
import SummaryCard from "./SummaryCard";

export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",

    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",

      services: [],

      timeline: "",

      budget: "",

      projectDetails: "",

      referralSource: "",

      attachment: undefined,
    },
  });

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  async function nextStep() {
    let valid = false;

    switch (step) {
      case 1:
        valid = await form.trigger([
          "fullName",
          "companyName",
          "email",
          "phone",
        ]);
        break;

      case 2:
        valid = await form.trigger(["services", "timeline", "budget"]);
        break;

      default:
        valid = true;
    }

    if (valid) {
      setStep((prev) => prev + 1);

      setTimeout(() => {
        scrollToForm();
      }, 100);
    }
  }

  function previousStep() {
    setStep((prev) => prev - 1);
    setTimeout(() => {
      scrollToForm();
    }, 100);
  }

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    console.log(values);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Sent",
      description:
        "Thank you for contacting Depot Covers. We'll review your request and get back to you within 24 hours.",
    });

    form.reset();

    setStep(1);

    setIsSubmitting(false);
  }

  return (
    <section className="py-20 bg-muted/20" ref={formRef}>
      <div className="container">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            Request a Free Quote
          </span>

          <h2 className="mt-5 text-4xl font-bold text-primary">
            Let's Bring Your Brand to Life
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-8">
            Tell us about your project and our branding specialists will prepare
            a tailored quotation based on your requirements.
          </p>
        </div>

        <div className="grid gap-10 ">
          {/* LEFT */}

          <div className="lg:col-span-2">
            <div className="rounded-3xl border bg-white shadow-xl">
              <div className="border-b p-8">
                <ProgressSteps currentStep={step} />
              </div>

              <div className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-10"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{
                          opacity: 0,
                          x: 40,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -40,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                      >
                        {step === 1 && <StepOne form={form} />}

                        {step === 2 && <StepTwo form={form} />}

                        {step === 3 && <StepThree form={form} />}
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-col gap-4 border-t pt-8 sm:flex-row sm:justify-between">
                      {step > 1 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={previousStep}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                      ) : (
                        <div />
                      )}

                      {step < 3 ? (
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="gradient-accent"
                        >
                          Continue
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="gradient-accent min-w-[220px]"
                        >
                          {isSubmitting ? (
                            "Submitting..."
                          ) : (
                            <>
                              Request Free Quote
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
