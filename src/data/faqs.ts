export interface FaqItem {
  question: string;
  answer: string;
}

export const PROCESS_FAQS: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "Depending on scope, most projects take 5–15 business days from approval to delivery.",
  },
  {
    question: "Do you offer design services if I don't have artwork?",
    answer:
      "Yes! Our in-house design team handles everything from concept to final artwork.",
  },
  {
    question: "What information do I need to provide to get started?",
    answer:
      "Just your brand brief, preferred colors, logo files (if available), and project requirements.",
  },
  {
    question: "Do you offer bulk order discounts?",
    answer:
      "Absolutely. We offer competitive pricing for bulk orders across all our services.",
  },
  {
    question: "What file formats do you accept for printing?",
    answer:
      "We accept PDF, AI, PSD, PNG, and JPEG files. High-resolution files (300 DPI+) are recommended.",
  },
  {
    question: "Can I get a sample before the full production run?",
    answer:
      "Yes, we can provide physical samples or proofs before full production upon request.",
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How quickly will I get a quote?",
    answer:
      "Within 24 hours of submitting your inquiry. For urgent requests, please give us a call directly.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "Yes, initial consultations are completely free. We discuss your project and provide a no-obligation quote.",
  },
  {
    question: "Do you work outside Nairobi?",
    answer:
      "Yes, we serve clients across Kenya. We can arrange for shipping or delivery of finished items to your location.",
  },
];

/** Build a schema.org FAQPage object from a list of questions. */
export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
