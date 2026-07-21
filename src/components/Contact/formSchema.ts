// formSchema.ts

import { z } from "zod";

export const formSchema = z.object({
  // Step 1 - Contact Details
  fullName: z
    .string()
    .min(2, "Please enter your full name."),

  companyName: z
    .string()
    .optional(),

  email: z
    .string()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .min(10, "Please enter a valid phone number."),

  // Step 2 - Project

  services: z
    .array(z.string())
    .min(1, "Please select at least one service."),

  timeline: z
    .string()
    .min(1, "Please select a project timeline."),

  budget: z
    .string()
    .min(1, "Please select your estimated budget."),

  // Step 3 - Project Details

  projectDetails: z
    .string()
    .min(
      20,
      "Please provide at least 20 characters describing your project."
    ),

  referralSource: z
    .string()
    .optional(),

  attachment: z
    .any()
    .optional(),
});

export type ContactFormValues = z.infer<typeof formSchema>;