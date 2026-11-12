import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PROCESS_FAQS } from "@/data/faqs";

export default function ProcessFaq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">FAQ</span>
          <h2 className="text-3xl font-bold">Common Questions About Our Process</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {PROCESS_FAQS.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-xl px-4 overflow-hidden bg-white hover:border-accent/30 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline font-semibold text-lg text-left py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}