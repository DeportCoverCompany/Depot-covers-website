import { Check } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";

import type { ContactFormValues } from "./formSchema";
import { SERVICES, TIMELINES, BUDGETS } from "./constants";

interface StepTwoProps {
  form: UseFormReturn<ContactFormValues>;
}

export default function StepTwo({ form }: StepTwoProps) {
  return (
    <div className="space-y-10">
      {/* Header */}

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary">
          Tell us about your project
        </h2>

        <p className="text-muted-foreground">
          Select the services you're interested in and provide an estimated
          timeline and budget.
        </p>
      </div>

      {/* SERVICES */}

      <FormField
        control={form.control}
        name="services"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Services Required
            </FormLabel>

            <FormControl>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map((service) => {
                  const selected = field.value.includes(service.label);

                  const Icon = service.icon;

                  return (
                    <button
                      type="button"
                      key={service.id}
                      onClick={() => {
                        if (selected) {
                          field.onChange(
                            field.value.filter(
                              (item) => item !== service.label,
                            ),
                          );
                        } else {
                          field.onChange([...field.value, service.label]);
                        }
                      }}
                      className={cn(
                        "relative rounded-2xl border p-5 transition-all duration-200 text-left hover:-translate-y-1 hover:shadow-lg",
                        selected
                          ? "border-accent bg-accent/10 shadow-lg"
                          : "border-border hover:border-accent/40",
                      )}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl",
                            selected
                              ? "bg-accent text-white"
                              : "bg-muted text-primary",
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        {selected && (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white">
                            <Check className="h-4 w-4" />
                          </div>
                        )}
                      </div>

                      <h4 className="font-semibold text-primary">
                        {service.label}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* TIMELINE */}

      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Project Timeline
            </FormLabel>

            <FormControl>
              <div className="grid gap-4 sm:grid-cols-2">
                {TIMELINES.map((timeline) => {
                  const active = field.value === timeline.label;

                  return (
                    <button
                      key={timeline.value}
                      type="button"
                      onClick={() => field.onChange(timeline.label)}
                      className={cn(
                        "rounded-2xl border p-5 text-left transition-all hover:-translate-y-1 hover:shadow-lg",
                        active ? "border-accent bg-accent/10" : "border-border",
                      )}
                    >
                      <h4 className="font-semibold text-primary">
                        {timeline.label}
                      </h4>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {timeline.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* BUDGET */}

      <FormField
        control={form.control}
        name="budget"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Estimated Budget
            </FormLabel>

            <FormControl>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {BUDGETS.map((budget) => {
                  const active = field.value === budget.label;

                  return (
                    <button
                      key={budget.value}
                      type="button"
                      onClick={() => field.onChange(budget.label)}
                      className={cn(
                        "rounded-2xl border p-5 transition-all text-left hover:-translate-y-1 hover:shadow-lg",
                        active ? "border-accent bg-accent/10" : "border-border",
                      )}
                    >
                      <h4 className="font-semibold text-primary">
                        {budget.label}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* TIP */}

      <div className="rounded-2xl border bg-muted/40 p-6">
        <h4 className="font-semibold text-primary mb-2">Need help choosing?</h4>

        <p className="text-sm leading-7 text-muted-foreground">
          Don't worry if you're unsure about the exact service or budget. Select
          the closest option and describe your project in the next step. Our
          branding specialists will recommend the best solution during your free
          consultation.
        </p>
      </div>
    </div>
  );
}
