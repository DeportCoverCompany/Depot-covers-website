import { MessageSquare, PenTool, Settings, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Understanding your brand, goals, and requirements.",
    icon: MessageSquare,
    bullets: [
      "Initial discovery call or meeting",
      "Brand audit and briefing",
      "Timeline and budget alignment"
    ],
    imagePrompt: "/project/process-consultation.webp"
  },
  {
    number: "02",
    title: "Design & Concept",
    description: "Creative direction aligned with your identity.",
    icon: PenTool,
    bullets: [
      "Concept development and moodboarding",
      "Design drafts and revisions",
      "Client approval and sign-off"
    ],
    imagePrompt: "/project/process-design.webp"
  },
  {
    number: "03",
    title: "Production",
    description: "High-quality materials and precision execution with accuracy.",
    icon: Settings,
    bullets: [
      "Material sourcing and quality checks",
      "Precision printing and manufacturing",
      "Quality control inspection"
    ],
    imagePrompt: "/project/process-production.webp"
  },
  {
    number: "04",
    title: "Installation & Delivery",
    description: "Professional finishing with attention to detail and current trends.",
    icon: Truck,
    bullets: [
      "Professional on-site installation",
      "Careful packaging and logistics",
      "Post-delivery support and follow-up"
    ],
    imagePrompt: "/project/process-delivery.webp"
  }
];

export default function ProcessOverview() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple. Seamless. Successful.
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We've refined our workflow over 10+ years to ensure every project is delivered with precision, creativity, and care.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                  
                  {/* Step Number & Line Connector */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-accent flex items-center justify-center text-accent text-3xl font-bold shadow-lg transition-transform group-hover:scale-110">
                      {step.number}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-secondary/30 rounded-3xl p-6 md:p-10 border border-border/50 hover:border-accent/30 transition-all shadow-sm">
                    <div className="space-y-6">
                      <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-white">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <ul className="space-y-3">
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                              <span className="text-sm font-medium">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square relative group/img shadow-md">
                      <img
                        src={step.imagePrompt}
                        alt={`${step.title} stage of the DCC branding process`}
                        width={800}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}