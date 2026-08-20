import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "High-Quality Finishing",
      desc: "Superior materials and expert craftsmanship ensure every project looks premium.",
    },
    {
      title: "Creative & Customized Solutions",
      desc: "Tailored designs that match your brand's unique identity and business goals.",
    },
    {
      title: "Professional Workmanship",
      desc: "Our skilled team pays meticulous attention to every detail, from design to delivery.",
    },
    {
      title: "Timely Project Delivery",
      desc: "We understand your deadlines and pride ourselves on on-time delivery, every time.",
    },
    {
      title: "Affordable & Competitive Pricing",
      desc: "Get great value and premium quality without breaking your marketing budget.",
    },
    {
      title: "Reliable After-Service Support",
      desc: "Our relationship doesn't end at delivery; we stand behind every project we complete.",
    },
  ];

  return (
    <section className="section-padding bg-primary text-white overflow-hidden relative">
      {/* Decorative accent blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative lg:order-last group">
            {/* Soft accent glow behind the video */}
            <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-[2.5rem] opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Main media frame */}
            <div className="relative rounded-3xl overflow-hidden border-8 border-white/10 bg-white shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src="project/videos/dccvideo.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="DCCKenya branding and printing services"
                />

                {/* Subtle cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />

                {/* Small branding label */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]">
                    DCCKenya
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-105">
              <span className="text-white font-black text-xl italic leading-none">
                Best
                <br />
                Choice
              </span>
            </div>

            {/* Small decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl border-4 border-accent/30 bg-primary/90 backdrop-blur-sm -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Why DCC
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10 leading-tight">
              Built on Quality.
              <br />
              Driven by Creativity.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
