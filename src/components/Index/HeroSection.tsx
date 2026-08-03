import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  {
    badge: "Kenya's Premier Branding Partner",
    title: "We don't just print —",
    highlight: "We bring brands to life",
    description:
      "High-quality branding and printing solutions that elevate your business visibility. From concept to precision execution.",

    image: "/project/main_image.png",

    card: {
      image:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_63248d820b_ccc2f47ae3d0d110.png",
      title: "Brand Identity Kit",
      status: "Completed",
    },
  },

  {
    badge: "Large Format Specialists",
    title: "Bold Ideas.",
    highlight: "Printed Bigger.",
    description:
      "Billboards, banners, vehicle branding and signage engineered to make your business impossible to ignore.",

    image: "/project/banner-printing.jpg",

    card: {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      title: "Vehicle Branding",
      status: "Delivered",
    },
  },

  {
    badge: "Corporate Branding Experts",
    title: "Your Brand.",
    highlight: "Professionally Presented.",
    description:
      "Business cards, office branding, packaging and promotional products crafted with precision and premium finishes.",

    image: "/project/office-branding.jpg",

    card: {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      title: "Corporate Office",
      status: "Finished",
    },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1800ms] ease-out
            ${
              current === index
                ? "opacity-100 scale-110"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
      </div>

      {/* Animated Blobs */}

      <div className="absolute -left-32 top-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse" />

      <div className="absolute right-0 bottom-0 w-[30rem] h-[30rem] rounded-full bg-white/10 blur-3xl animate-pulse delay-700" />

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}

          <div
            key={current}
            className="animate-in fade-in slide-in-from-left-8 duration-700"
          >
            <Badge
              variant="outline"
              className="mb-6 border-accent/30 bg-accent/10 text-accent rounded-full px-4 py-1 uppercase tracking-wider font-bold"
            >
              {slides[current].badge}
            </Badge>

            <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl leading-tight">
              {slides[current].title}

              <span className="block text-accent mt-2">
                {slides[current].highlight}
              </span>
            </h1>

            <p className="mt-8 text-white/80 text-xl max-w-xl leading-relaxed">
              {slides[current].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white h-14 px-8 rounded-xl shadow-xl"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white h-14 px-8 rounded-xl"
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
              {[
                "5+ Years Experience",
                "50+ Projects Completed",
                "100% Client Satisfaction",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent" />

                  <span className="text-white/70 font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="relative">
            {/* Main Image */}

            <div className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                key={current}
                src={slides[current].image}
                alt={slides[current].title}
                className="aspect-[4/3] w-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}

            <div
              key={current + "-card"}
              className="absolute -bottom-8 left-6 sm:left-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex gap-4 items-center max-w-[270px] animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              <div className="h-14 w-14 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={slides[current].card.image}
                  alt={slides[current].card.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-accent">
                  Latest Project
                </p>

                <h3 className="text-primary font-extrabold text-sm leading-tight mt-1">
                  {slides[current].card.title}
                </h3>

                <span className="inline-flex mt-2 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                  {slides[current].card.status}
                </span>
              </div>
            </div>

            {/* Decorative Glow */}

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Previous Button */}

      <button
        onClick={previousSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition hover:bg-white/20 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next Button */}

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 p-3 text-white transition hover:bg-white/20 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}

      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full

            ${
              current === index
                ? "w-10 h-2 bg-accent"
                : "w-2 h-2 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/70 to-transparent pointer-events-none" />

      {/* Top Decorative Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

        <div className="absolute right-1/4 bottom-24 h-96 w-96 rounded-full bg-white/5 blur-[150px]" />
      </div>
    </section>
  );
}
