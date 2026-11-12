import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mary W.",
    quote: "Got my quote in 3 hours. Super responsive team! Their attention to detail is remarkable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mary",
    role: "Marketing Manager"
  },
  {
    name: "Kevin O.",
    quote: "Visited their office and was impressed by the quality of samples. Highly professional workspace.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin",
    role: "Business Owner"
  },
  {
    name: "Alice M.",
    quote: "Professional and friendly team. Highly recommend DCC for any branding project. Exceptional results.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
    role: "Creative Director"
  }
];

export default function ContactTestimonials() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="border-none shadow-md bg-white hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-primary">{t.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}