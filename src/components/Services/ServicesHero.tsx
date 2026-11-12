import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="gradient-hero py-20 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)] [background-size:24px_24px] opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-white/60 text-sm mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Services</span>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-400/20 border border-orange-400/30 text-orange-200 font-bold text-xs uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
            Complete Branding &{" "}
            <span className="text-orange-300">Printing Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-900">
            We provide complete branding and printing solutions tailored to help
            businesses stand out and grow.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-orange-300">
                8
              </div>
              <div className="text-xs text-white/60 uppercase font-semibold">
                Services
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-orange-300">
                50+
              </div>
              <div className="text-xs text-white/60 uppercase font-semibold">
                Projects
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="text-2xl md:text-3xl font-bold text-orange-300">
                100%
              </div>
              <div className="text-xs text-white/60 uppercase font-semibold">
                Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
