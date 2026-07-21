import { useRef } from "react";
import { Upload, FileText, ShieldCheck } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import type { ContactFormValues } from "./formSchema";
import { REFERRAL_SOURCES } from "./constants";

interface StepThreeProps {
  form: UseFormReturn<ContactFormValues>;
}

export default function StepThree({ form }: StepThreeProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const attachment = form.watch("attachment") as File | undefined;

  return (
    <div className="space-y-10">
      {/* Header */}

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary">Final Details</h2>

        <p className="text-muted-foreground">
          Tell us more about your project and attach any reference files that
          may help us prepare an accurate quotation.
        </p>
      </div>

      {/* Project Details */}

      <FormField
        control={form.control}
        name="projectDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Project Details
            </FormLabel>

            <FormControl>
              <Textarea
                {...field}
                rows={8}
                placeholder={`Describe your project...

Examples:

• What would you like branded?
• Estimated quantities
• Installation location
• Preferred completion date
• Colours or branding guidelines
• Anything else you'd like us to know`}
                className="resize-none"
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* Referral */}

      <FormField
        control={form.control}
        name="referralSource"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              How did you hear about us?
            </FormLabel>

            <Select value={field.value} onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
              </FormControl>

              <SelectContent>
                {REFERRAL_SOURCES.map((source) => (
                  <SelectItem key={source} value={source}>
                    {source}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* File Upload */}

      <FormField
        control={form.control}
        name="attachment"
        render={() => (
          <FormItem>
            <FormLabel className="text-base font-semibold">
              Upload Logo, Artwork or Reference Files
            </FormLabel>

            <FormControl>
              <>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg,.svg,.ai,.eps"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];

                    if (file) {
                      form.setValue("attachment", file, {
                        shouldValidate: true,
                      });
                    }
                  }}
                />

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="cursor-pointer rounded-2xl border-2 border-dashed border-border p-10 transition hover:border-accent hover:bg-accent/5"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <Upload className="w-10 h-10 text-accent mb-4" />

                    <h4 className="font-semibold text-primary">
                      Click to upload
                    </h4>

                    <p className="text-sm text-muted-foreground mt-2">
                      PDF, AI, EPS, PNG, JPG or SVG
                    </p>

                    <Button type="button" variant="outline" className="mt-6">
                      Browse Files
                    </Button>

                    {attachment && (
                      <div className="mt-6 flex items-center gap-2 rounded-lg bg-muted px-4 py-2">
                        <FileText className="w-4 h-4 text-accent" />

                        <span className="text-sm font-medium">
                          {attachment.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      {/* Trust Card */}

      <div className="rounded-2xl border bg-muted/40 p-6">
        <div className="flex gap-4">
          <ShieldCheck className="w-8 h-8 text-accent shrink-0" />

          <div>
            <h4 className="font-semibold text-primary">You're almost done</h4>

            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              Once you submit your request, one of our branding specialists will
              review your requirements and get back to you within
              <span className="font-semibold text-primary"> 24 hours</span> with
              a free, no-obligation quotation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
