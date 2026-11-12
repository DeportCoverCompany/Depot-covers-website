import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO RetailHub Kenya",
    quote: "DCC transformed our brand identity completely. The quality of their printing and signage exceeded our expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
  },
  {
    name: "Sarah Otieno",
    role: "HR Manager TechVault",
    quote: "Fast delivery and professional results. Our uniforms with embroidery looked outstanding at the expo.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "David Kamau",
    role: "Marketing Director BizPro",
    quote: "Affordable pricing without compromising quality. DCC is our go-to for all branding needs.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-primary mb-4">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-secondary/50 p-8 rounded-2xl border border-border flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-primary/10 text-base font-bold text-primary shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">{t.name}</h4>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}