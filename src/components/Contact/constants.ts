// constants.ts

import {
  Briefcase,
  Building2,
  Flag,
  Shirt,
  Printer,
  Megaphone,
  ScanLine,
  Presentation,
  Package,
} from "lucide-react";

export const SERVICES = [
  {
    id: "signage-branding",
    label: "Signage Branding",
    icon: Flag,
  },
  {
    id: "vehicle-branding",
    label: "Vehicle Branding",
    icon: Briefcase,
  },
  {
    id: "office-branding",
    label: "Office Branding",
    icon: Building2,
  },
  {
    id: "large-format-printing",
    label: "Large Format Printing",
    icon: Printer,
  },
  {
    id: "garment-printing",
    label: "Garment Printing",
    icon: Shirt,
  },
  {
    id: "promotional-items",
    label: "Promotional Items",
    icon: Package,
  },
  {
    id: "exhibition-branding",
    label: "Exhibition Branding",
    icon: Presentation,
  },
  {
    id: "cnc-laser-cutting",
    label: "CNC Laser Cutting",
    icon: ScanLine,
  },
  {
    id: "marketing-materials",
    label: "Marketing Materials",
    icon: Megaphone,
  },
];

export const TIMELINES = [
  {
    value: "asap",
    label: "ASAP",
    description: "Urgent project",
  },
  {
    value: "1-week",
    label: "Within 1 Week",
    description: "High priority",
  },
  {
    value: "1-month",
    label: "Within 1 Month",
    description: "Standard timeline",
  },
  {
    value: "planning",
    label: "Just Planning",
    description: "Looking for ideas",
  },
];

export const BUDGETS = [
  {
    value: "under-20k",
    label: "Under KES 20,000",
  },
  {
    value: "20k-50k",
    label: "KES 20,000 - 50,000",
  },
  {
    value: "50k-100k",
    label: "KES 50,000 - 100,000",
  },
  {
    value: "100k-500k",
    label: "KES 100,000 - 500,000",
  },
  {
    value: "500k-plus",
    label: "Above KES 500,000",
  },
  {
    value: "not-sure",
    label: "Not Sure Yet",
  },
];

export const REFERRAL_SOURCES = [
  "Google Search",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "TikTok",
  "Referral",
  "Returning Customer",
  "Walk In",
  "Other",
];

export const FORM_STEPS = [
  {
    id: 1,
    title: "Contact",
    description: "Tell us about yourself",
  },
  {
    id: 2,
    title: "Project",
    description: "Your branding needs",
  },
  {
    id: 3,
    title: "Details",
    description: "Finalize your request",
  },
];

export const TRUST_ITEMS = [
  "Free Consultation",
  "Response within 24 Hours",
  "No Obligation Quote",
  "Professional Branding Experts",
];