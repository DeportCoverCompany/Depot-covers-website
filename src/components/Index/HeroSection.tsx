import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

const AUTO_PLAY_DELAY = 10000;

// Images from public/
const slide1 = "/project/Slide-1.jpg";
const slide2 = "/project/slide-2.jpg";
const slide3 = "/project/slide-3.jpg";

const slides = [
  {
    id: 1,
    badge: "Kenya's Premier Branding Partner",
    title: "We don't just print.",
    highlight: "We bring brands to life.",
    description:
      "Premium branding, signage, large format printing, vehicle branding, and corporate identity solutions that help businesses stand out.",
    image: slide1,
  },
  {
    id: 2,
    badge: "Vehicle Branding",
    title: "Turn Every Vehicle",
    highlight: "Into A Moving Billboard.",
    description:
      "Professional fleet branding and vehicle wraps that advertise your business everywhere you go.",
    image: slide2,
  },
  {
    id: 3,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image: slide3,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ----------------------------------------
  // Navigation
  // ----------------------------------------

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // ----------------------------------------
  // Auto Play
  // ----------------------------------------

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------
  // Touch / Swipe
  // ----------------------------------------

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
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
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* =========================================
          SLIDES
      ========================================== */}

      <div className="absolute inset-0 bg-white px-3 py-3 md:px-6 md:py-5 lg:px-10 lg:py-6">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-3 overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ease-in-out md:inset-x-6 md:inset-y-5 lg:inset-x-10 lg:inset-y-6 ${
              currentSlide === index ? "z-20 opacity-100" : "z-10 opacity-0"
            }`}
          >
            {/* =========================================
                PROGRESS BAR
            ========================================== */}

            <div className="absolute left-0 right-0 top-0 z-50 h-1 bg-white/20">
              {currentSlide === index && (
                <div
                  key={currentSlide}
                  className="h-full bg-orange-500"
                  style={{
                    animation: `slideProgress ${AUTO_PLAY_DELAY}ms linear forwards`,
                  }}
                />
              )}
            </div>

            {/* =========================================
                IMAGE
            ========================================== */}

            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`h-full w-full ${
                  currentSlide === index
                    ? "scale-110 transition-transform duration-[10000ms] ease-linear"
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

            {/* =========================================
                IMAGE OVERLAY
            ========================================== */}

            {/* <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/25 to-transparent" /> */}

            {/* Subtle side gradient */}
            {/* <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/30 via-transparent to-transparent" /> */}

            {/* =========================================
                SLIDE CONTENT
            ========================================== */}
          </div>
        ))}
      </div>

      {/* =========================================
          BOTTOM NAVIGATION
      ========================================== */}

      <div className="pointer-events-none absolute bottom-10 left-0 z-40 w-full px-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          {/* Slide Counter & Indicators */}

          <div className="pointer-events-auto flex items-center gap-8">
            {/* Counter */}

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

            {/* Indicators */}

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

          <div className="pointer-events-auto hidden flex-col items-center gap-3 md:flex">
            <span
              className="rotate-90 text-xs uppercase tracking-[0.35em] text-white/80"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,.8)",
              }}
            >
              Scroll
            </span>

            <div className="mt-8 flex h-14 w-7 justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md">
              <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          FLOATING NAVIGATION
      ========================================== */}

      <div className="absolute right-6 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-4 md:right-10">
        <Button
          size="icon"
          variant="outline"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="h-12 w-12 rounded-full border-white/20 bg-black/20 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/40"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          aria-label="Next slide"
          className="h-12 w-12 rounded-full border-white/20 bg-black/20 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/40"
        >
          <ChevronDown className="h-5 w-5" />
        </Button>
      </div>

      {/* =========================================
          IMAGE PRELOADER
      ========================================== */}

      <div className="hidden" aria-hidden="true">
        {slides.map((slide) => (
          <img key={`preload-${slide.id}`} src={slide.image} alt="" />
        ))}
      </div>

      {/* =========================================
          PROGRESS BAR ANIMATION
      ========================================== */}

      <style>{`
        @keyframes slideProgress {
          from {
            width: 0%;
          }

          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
