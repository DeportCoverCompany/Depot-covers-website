import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "The process was incredibly smooth. DCC kept us updated every step of the way.",
    name: "Grace K.",
    company: "NairobiEats",
    avatar: "avatar-1",
    stars: 5
  },
  {
    quote: "From consultation to delivery, everything was professional and on time.",
    name: "Brian O.",
    company: "KenyaFresh",
    avatar: "avatar-4",
    stars: 5
  },
  {
    quote: "Their team walked us through every detail. No surprises, just great results.",
    name: "Amina S.",
    company: "SafariTours",
    avatar: "avatar-7",
    stars: 5
  }
];

export default function ProcessTestimonials() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground mb-8">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border border-border">
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}