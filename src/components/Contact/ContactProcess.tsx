import { Inbox, Search, FileText, CheckCircle, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Inbox,
    title: "We receive your inquiry",
    desc: "Your request lands in our system instantly for processing."
  },
  {
    icon: Search,
    title: "Our team reviews",
    desc: "We analyze your project needs and specific requirements."
  },
  {
    icon: FileText,
    title: "Prepare custom quote",
    desc: "We calculate the best pricing and timeline for you."
  },
  {
    icon: CheckCircle,
    title: "You receive the quote",
    desc: "A detailed proposal arrives in your inbox within 24 hours."
  }
];

export default function ContactProcess() {
  return (
    <section className="bg-primary py-20 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0" stroke="white" strokeWidth="0.1" />
          <path d="M0 0 L100 100" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Happens After You Contact Us?</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our streamlined process ensures you get the information you need quickly and professionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Arrows (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] z-0">
                  <ChevronRight className="w-6 h-6 text-accent animate-pulse" />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 transition-all duration-300 group-hover:bg-accent group-hover:border-accent group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/20">
                  <step.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                </div>
                <div className="bg-accent/20 text-accent-strong font-black w-8 h-8 rounded-full flex items-center justify-center mb-4 border border-accent/30 text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}