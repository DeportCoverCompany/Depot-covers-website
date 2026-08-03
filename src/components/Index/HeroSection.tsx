import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

const AUTO_PLAY_DELAY = 6000;

const slides = [
  {
    id: 1,
    badge: "Kenya's Premier Branding Partner",
    title: "We don't just print.",
    highlight: "We bring brands to life.",
    description:
      "Premium branding, signage, large format printing, vehicle branding, and corporate identity solutions that help businesses stand out.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=80",
  },

  {
    id: 2,
    badge: "Vehicle Branding",
    title: "Turn Every Vehicle",
    highlight: "Into A Moving Billboard.",
    description:
      "Professional fleet branding and vehicle wraps that advertise your business everywhere you go.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80",
  },

  {
    id: 3,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80",
  },

  {
    id: 4,
    badge: "Corporate Identity",
    title: "Build A Brand",
    highlight: "People Remember.",
    description:
      "Corporate branding, office signage, business stationery and promotional products designed to elevate your business.",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=2000&q=80",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 60) {
      nextSlide();
    }

    if (distance < -60) {
      previousSlide();
    }
  };

  return (
    <section
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentSlide === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`h-full w-full ${
                  currentSlide === index
                    ? "scale-110 transition-transform duration-[7000ms] ease-linear"
                    : "scale-100"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Soft Left Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

            {/* Top & Bottom Fade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />

            {/* Ambient Orange Glow */}
            <div className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[140px]" />

            {/* Ambient White Glow */}
            <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-[150px]" />

            {/* Bottom Accent Glow */}
            <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-orange-400/10 blur-[130px]" />
          </div>
        ))}
      </div>

      {/* Decorative Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        <div className="absolute left-16 top-20 h-64 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="absolute right-20 bottom-20 h-72 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />

        <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[80px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div
            key={currentSlide}
            className="max-w-3xl rounded-[32px] border border-white/10 bg-black/20 p-8 backdrop-blur-xl shadow-2xl md:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700"
          >
            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-8 inline-flex items-center gap-2 rounded-full border-orange-500/40 bg-orange-500/15 px-5 py-2 backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />

              <span
                className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300"
                style={{
                  textShadow: "0 2px 12px rgba(0,0,0,.9)",
                }}
              >
                {slides[currentSlide].badge}
              </span>
            </Badge>

            {/* Heading */}
            <h1
              className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[80px]"
              style={{
                textShadow: "0 8px 30px rgba(0,0,0,.95)",
              }}
            >
              {slides[currentSlide].title}

              <br />

              <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
                {slides[currentSlide].highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="mb-10 max-w-2xl text-lg font-light leading-8 text-white/90 md:text-xl"
              style={{
                textShadow: "0 2px 14px rgba(0,0,0,.9)",
              }}
            >
              {slides[currentSlide].description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-14 rounded-full bg-orange-500 px-8 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_0_40px_rgba(249,115,22,0.55)]"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 rounded-full border border-white/30 bg-white/10 px-8 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/50 hover:bg-white/20"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
          Bottom Navigation
      ============================ */}
      <div className="pointer-events-none absolute bottom-10 left-0 z-40 w-full px-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          {/* Slide Counter & Indicators */}
          <div className="pointer-events-auto flex items-center gap-8">
            <div
              className="text-2xl font-light tracking-[0.2em] text-white"
              style={{
                textShadow: "0 2px 12px rgba(0,0,0,.9)",
              }}
            >
              <span className="font-bold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>

              <span className="text-white/50">
                {" "}
                / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`overflow-hidden rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "h-1.5 w-14 bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,.6)]"
                      : "h-1.5 w-6 bg-white/30 hover:w-10 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pointer-events-auto hidden md:flex flex-col items-center gap-3">
            <span
              className="rotate-90 text-xs uppercase tracking-[0.35em] text-white/80"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,.8)",
              }}
            >
              Scroll
            </span>

            <div className="mt-8 flex h-14 w-7 justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md">
              <div className="mt-2 h-3 w-1 rounded-full bg-orange-500 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
          Floating Navigation
      ============================ */}

      <div className="absolute right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4 md:right-10">
        <Button
          size="icon"
          variant="outline"
          onClick={previousSlide}
          className="h-12 w-12 rounded-full border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          className="h-12 w-12 rounded-full border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white/20"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>

      {/* ===========================
          Image Preloader
      ============================ */}

      <div className="hidden" aria-hidden="true">
        {slides.map((slide) => (
          <img
            key={`preload-${slide.id}`}
            src={slide.image}
            alt=""
            className="hidden"
          />
        ))}
      </div>
    </section>
  );
}
