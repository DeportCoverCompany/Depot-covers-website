// SummaryCard.tsx

import {
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDollarSign,
  Mail,
  Package,
  Phone,
  User,
} from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import type { ContactFormValues } from "./formSchema";
import { TRUST_ITEMS } from "./constants";

interface SummaryCardProps {
  form: UseFormReturn<ContactFormValues>;
}

export default function SummaryCard({ form }: SummaryCardProps) {
  const values = form.watch();

  return (
    <div className="sticky top-24 space-y-6">
      {/* Summary Card */}

      <div className="rounded-3xl border bg-white shadow-lg overflow-hidden">
        <div className="bg-primary text-white p-6">
          <h3 className="text-xl font-bold">Your Request</h3>

          <p className="text-sm text-white/70 mt-1">
            This summary updates automatically as you complete the form.
          </p>
        </div>

        <div className="p-6 space-y-5">
          {/* Contact */}

          <div className="space-y-4">
            <SummaryItem
              icon={<User className="w-4 h-4" />}
              label="Contact"
              value={values.fullName}
            />

            <SummaryItem
              icon={<Building2 className="w-4 h-4" />}
              label="Company"
              value={values.companyName}
            />

            <SummaryItem
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={values.email}
            />

            <SummaryItem
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={values.phone}
            />
          </div>

          <hr />

          {/* Services */}

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-accent" />

              <span className="font-semibold text-sm">Services</span>
            </div>

            {values.services.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {values.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-accent/10 text-accent text-xs px-3 py-1 font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            ) : (
              <EmptyState text="No services selected" />
            )}
          </div>

          <hr />

          {/* Timeline */}

          <SummaryItem
            icon={<CalendarClock className="w-4 h-4" />}
            label="Timeline"
            value={values.timeline}
          />

          {/* Budget */}

          <SummaryItem
            icon={<CircleDollarSign className="w-4 h-4" />}
            label="Budget"
            value={values.budget}
          />
        </div>
      </div>

      {/* Trust Card */}

      <div className="rounded-3xl bg-muted/40 border p-6">
        <h4 className="font-bold text-primary mb-5">Why Work With Us?</h4>

        <div className="space-y-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />

              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface SummaryItemProps {
  icon: React.ReactNode;
  label: string;
  value?: string;
}

function SummaryItem({ icon, label, value }: SummaryItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-accent">{icon}</div>

      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </p>

        <p className="font-medium text-sm text-primary break-words">
          {value?.trim() ? value : "—"}
        </p>
      </div>
    </div>
  );
}

interface EmptyStateProps {
  text: string;
}

function EmptyState({ text }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed p-4 text-center">
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
