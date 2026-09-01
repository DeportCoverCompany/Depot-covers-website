import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PortfolioHero() {
  const stats = [
    { label: "Projects", value: "50+" },
    { label: "Categories", value: "8" },
    { label: "Happy Clients", value: "50+" },
  ];

  return (
    <section className="gradient-hero text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-white/60 text-sm">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Marketing</span>
        </nav>

        {/* Hero Content */}
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold tracking-wider uppercase mb-6">
          Our Work
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
          Our Work Portfolio
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-white/80 mb-12 leading-relaxed">
          Explore some of our completed branding and printing projects
          showcasing our quality, creativity, and craftsmanship.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-white/60 font-medium uppercase tracking-wide text-xs">
                {stat.label}
              </span>
              {idx < stats.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-white/10 ml-8 md:ml-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
