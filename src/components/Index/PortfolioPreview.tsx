import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Supa Flame Gas Solutions Rebranding",
    category: "Branding",
    img: "/project/portfolio-preview/photo1.webp",
    alt: "Supa Flame Gas Solutions Rebranding",
  },
  {
    title: "Regent Auto Valuers",
    category: "Branding",
    img: "/project/portfolio-preview/photo2.webp",
    alt: "Regent Auto Valuers",
  },
  {
    title: "Olyx Gas Rebranding",
    category: "Branding",
    img: "/project/portfolio-preview/photo3.webp",
    alt: "Olyx Gas Rebranding",
  },
  {
    title: "Otrovato Rebranding",
    category: "Branding",
    img: "/project/portfolio-preview/photo4.webp",
    alt: "Otrovato Rebranding",
  },
];

export default function PortfolioPreview() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-0.5 w-8 bg-accent"></div>
              <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs">
                Our Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
              Recent Projects That Speak for Themselves
            </h2>
          </div>

          <Button
            asChild
            className="hidden md:flex bg-primary text-white rounded-xl"
          >
            <Link to="/portfolio" className="flex items-center gap-2">
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Carousel */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl relative aspect-[16/10] bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={projects[index].img}
                src={projects[index].img}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={projects[index].alt}
                width={1200}
                height={750}
                loading="lazy"
                decoding="async"
              />
            </AnimatePresence>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="inline-block px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
                {projects[index].category}
              </span>

              <h3 className="text-white text-2xl md:text-3xl font-bold max-w-lg">
                {projects[index].title}
              </h3>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous project"
              className="w-11 h-11 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next project"
              className="w-11 h-11 rounded-full bg-white/80 backdrop-blur hover:bg-white flex items-center justify-center shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show project ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-6 bg-primary"
                    : "w-3 bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Button asChild className="w-full bg-primary text-white rounded-xl">
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
