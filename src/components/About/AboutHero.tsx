import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="gradient-hero py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">About</span>
            </nav>

            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-2">
              About DCC
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Who We Are
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              A full-service branding and printing company dedicated to
              excellence — transforming ideas into impactful visual experiences.
            </p>

            <div className="pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-bold h-12 px-8 shadow-xl shadow-accent/20"
                >
                  Work With Us
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] lg:aspect-square">
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                src="/team.jpeg"
                alt="professional branding printing company office team Kenya Nairobi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
