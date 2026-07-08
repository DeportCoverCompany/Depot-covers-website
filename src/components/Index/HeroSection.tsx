import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 lg:pt-0 lg:pb-0 gradient-hero overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] left-[-5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-[30%] left-[10%] opacity-10">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="white" />
            <circle cx="2" cy="22" r="2" fill="white" />
            <circle cx="2" cy="42" r="2" fill="white" />
            <circle cx="2" cy="62" r="2" fill="white" />
            <circle cx="2" cy="82" r="2" fill="white" />
            <circle cx="22" cy="2" r="2" fill="white" />
            <circle cx="22" cy="22" r="2" fill="white" />
            <circle cx="22" cy="42" r="2" fill="white" />
            <circle cx="22" cy="62" r="2" fill="white" />
            <circle cx="22" cy="82" r="2" fill="white" />
            <circle cx="42" cy="2" r="2" fill="white" />
            <circle cx="42" cy="22" r="2" fill="white" />
            <circle cx="42" cy="42" r="2" fill="white" />
            <circle cx="42" cy="62" r="2" fill="white" />
            <circle cx="42" cy="82" r="2" fill="white" />
            <circle cx="62" cy="2" r="2" fill="white" />
            <circle cx="62" cy="22" r="2" fill="white" />
            <circle cx="62" cy="42" r="2" fill="white" />
            <circle cx="62" cy="62" r="2" fill="white" />
            <circle cx="62" cy="82" r="2" fill="white" />
            <circle cx="82" cy="2" r="2" fill="white" />
            <circle cx="82" cy="22" r="2" fill="white" />
            <circle cx="82" cy="42" r="2" fill="white" />
            <circle cx="82" cy="62" r="2" fill="white" />
            <circle cx="82" cy="82" r="2" fill="white" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <Badge
              variant="outline"
              className="text-accent border-accent/30 bg-accent/5 px-4 py-1 rounded-full font-semibold tracking-wide uppercase text-xs"
            >
              Kenya's Premier Branding Partner
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
              We don't just print —<br />
              <span className="text-accent">We bring brands to life</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
              High-quality branding and printing solutions that elevate your
              business visibility. From concept to precision execution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-bold h-14 px-8 text-lg rounded-xl shadow-lg shadow-accent/20 transition-all"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/40 hover:bg-white/10 text-white font-bold h-14 px-8 text-lg rounded-xl backdrop-blur-sm transition-all"
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  View Our Work <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 lg:pt-8 border-t border-white/10 w-full">
              {[
                "5+ Years Experience",
                "50+ Projects Done",
                "100% Satisfaction",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white/70 text-sm font-medium">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                src="/project/main_image.png"
                alt="Large professional printing workshop in Kenya with vibrant indoor signage and large format printers "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:left-8 bg-white p-4 rounded-2xl shadow-2xl border border-border flex items-center gap-4 max-w-[240px] animate-bounce-subtle">
              <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_63248d820b_ccc2f47ae3d0d110.png"
                  alt="Corporate brand identity kit with business cards and stationery"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-accent mb-0.5">
                  Latest Project
                </p>
                <p className="text-sm font-extrabold text-primary leading-tight mb-1">
                  Brand Identity Kit
                </p>
                <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                  Completed
                </span>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
