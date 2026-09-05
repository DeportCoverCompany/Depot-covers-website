import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

const AUTO_PLAY_DELAY = 10000;

// Images from public/
const slide1 = "/project/home-page-slider/slide1.jpeg";
const slide2 = "/project/home-page-slider/slide2.jpeg";
const slide3 = "/project/home-page-slider/slide3.jpeg";
const slide4 = "/project/home-page-slider/slide4.jpeg";
const slide5 = "/project/home-page-slider/slide5.jpeg";
const slide6 = "/project/home-page-slider/slide6.jpeg";

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
  {
    id: 4,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image: slide4,
  },
  {
    id: 5,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image: slide5,
  },
  {
    id: 6,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image: slide6,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative h-[560px] overflow-hidden bg-black sm:h-[600px] md:h-[650px] lg:h-[700px] mt-4 mb-4"
    >
      {/* SLIDES */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "z-20 opacity-100"
                : "pointer-events-none z-10 opacity-0"
            }`}
          >
            {/* MAIN IMAGE */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                draggable={false}
                className={`h-full w-full select-none object-cover object-center transition-transform duration-[10000ms] ease-linear md:object-contain ${
                  isActive ? "scale-[1.02]" : "scale-100"
                }`}
              />
            </div>

            {/* TOP PROGRESS BAR */}
            <div className="absolute left-0 right-0 top-0 z-50 h-[3px] bg-white/20">
              {isActive && (
                <div
                  key={`progress-${currentSlide}`}
                  className="h-full bg-orange-500"
                  style={{
                    animation: `slideProgress ${AUTO_PLAY_DELAY}ms linear forwards`,
                  }}
                />
              )}
            </div>
          </div>
        );
      })}

      {/* BOTTOM NAVIGATION */}
      <div className="pointer-events-none absolute bottom-7 left-0 z-[60] w-full px-6 md:bottom-9 md:px-12">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          <div className="pointer-events-auto flex items-center gap-5 sm:gap-8">
            {/* Counter */}
            <div
              className="text-lg font-light tracking-[0.2em] text-white sm:text-2xl"
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
            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-12 bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,.6)] sm:w-14"
                      : "w-5 bg-white/40 hover:w-8 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="pointer-events-auto hidden flex-col items-center gap-3 md:flex">
            <span
              className="rotate-90 text-[10px] uppercase tracking-[0.35em] text-white/80"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,.8)",
              }}
            >
              Scroll
            </span>

            <div className="mt-8 flex h-14 w-7 justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-md">
              <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING NAVIGATION */}
      <div className="absolute right-4 top-1/2 z-[60] flex -translate-y-1/2 flex-col gap-3 sm:right-6 md:right-8 md:gap-4 lg:right-10">
        <Button
          size="icon"
          variant="outline"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full border-white/20 bg-black/20 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/40 sm:h-11 sm:w-11 md:h-12 md:w-12"
        >
          <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full border-white/20 bg-black/20 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/40 sm:h-11 sm:w-11 md:h-12 md:w-12"
        >
          <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      {/* PRELOADER */}
      <div className="hidden" aria-hidden="true">
        {slides.map((slide) => (
          <img key={`preload-${slide.id}`} src={slide.image} alt="" />
        ))}
      </div>

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
