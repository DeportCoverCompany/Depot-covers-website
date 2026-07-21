import { Building2, Mail, Phone, User } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import type { ContactFormValues } from "./formSchema";

interface StepOneProps {
  form: UseFormReturn<ContactFormValues>;
}

export default function StepOne({ form }: StepOneProps) {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-primary">
          Tell us about yourself
        </h2>

        <p className="text-muted-foreground">
          We'll use these details to prepare your quotation and contact you
          regarding your project.
        </p>
      </div>

      {/* Form */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Full Name */}

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full Name <span className="text-destructive">*</span>
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                  <Input
                    {...field}
                    placeholder="John Doe"
                    className="pl-12 h-12"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company */}

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>

              <FormControl>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                  <Input
                    {...field}
                    placeholder="ABC Limited"
                    className="pl-12 h-12"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email Address <span className="text-destructive">*</span>
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                  <Input
                    type="email"
                    {...field}
                    placeholder="john@example.com"
                    className="pl-12 h-12"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Phone Number <span className="text-destructive">*</span>
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                  <Input
                    {...field}
                    placeholder="+254 712 345 678"
                    className="pl-12 h-12"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Bottom Info Card */}

      <div className="rounded-2xl border bg-muted/40 p-6">
        <h4 className="font-semibold text-primary mb-2">What happens next?</h4>

        <div className="space-y-2 text-sm text-muted-foreground">
          <p>✓ Tell us about your branding project.</p>

          <p>✓ Receive a free quotation within 24 hours.</p>

          <p>
            ✓ No obligation — we'll recommend the best solution for your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
