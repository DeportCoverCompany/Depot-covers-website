import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const AUTO_PLAY_DELAY = 10000;

const base = "/project/home-page-slider";

const slides = [
  {
    id: 1,
    badge: "Kenya's Premier Branding Partner",
    title: "We don't just print.",
    highlight: "We bring brands to life.",
    description:
      "Premium branding, signage, large format printing, vehicle branding, and corporate identity solutions that help businesses stand out.",
    image: `${base}/slide1.webp`,
    imageMd: `${base}/slide1-1024.webp`,
    imageSm: `${base}/slide1-640.webp`,
    alt: "Branding and printing project by Depot Covers Company in Nairobi, Kenya",
  },
  {
    id: 2,
    badge: "Vehicle Branding",
    title: "Turn Every Vehicle",
    highlight: "Into A Moving Billboard.",
    description:
      "Professional fleet branding and vehicle wraps that advertise your business everywhere you go.",
    image: `${base}/slide2.webp`,
    imageMd: `${base}/slide2-1024.webp`,
    imageSm: `${base}/slide2-640.webp`,
    alt: "Vehicle branding and fleet wrap by Depot Covers Company Kenya",
  },
  {
    id: 3,
    badge: "Large Format Printing",
    title: "Print Bigger.",
    highlight: "Get Noticed.",
    description:
      "High-quality banners, billboards, exhibition displays and signage produced with vibrant colour and precision.",
    image: `${base}/slide3.webp`,
    imageMd: `${base}/slide3-1024.webp`,
    imageSm: `${base}/slide3-640.webp`,
    alt: "Large format printing and billboard production by DCC Nairobi",
  },
  {
    id: 4,
    badge: "Signage & Branding",
    title: "Signage That Works.",
    highlight: "Day And Night.",
    description:
      "Lightboxes, 3D lettering, LED signs and directional signage designed, fabricated and installed by our Nairobi team.",
    image: `${base}/slide4.webp`,
    imageMd: `${base}/slide4-1024.webp`,
    imageSm: `${base}/slide4-640.webp`,
    alt: "Illuminated 3D signage installed by Depot Covers Company",
  },
  {
    id: 5,
    badge: "Corporate Branding",
    title: "Look Professional.",
    highlight: "Everywhere You Show Up.",
    description:
      "Corporate stationery, branded uniforms, promotional items and office branding that keep your identity consistent.",
    image: `${base}/slide5.webp`,
    imageMd: `${base}/slide5-1024.webp`,
    imageSm: `${base}/slide5-640.webp`,
    alt: "Corporate branding, stationery and uniforms by DCC Kenya",
  },
  {
    id: 6,
    badge: "Exhibition & Events",
    title: "Stand Out.",
    highlight: "At Every Event.",
    description:
      "Exhibition stands, pop-up displays, roll-up banners and event branding delivered on time and ready to install.",
    image: `${base}/slide6.webp`,
    imageMd: `${base}/slide6-1024.webp`,
    imageSm: `${base}/slide6-640.webp`,
    alt: "Exhibition stand and event branding by Depot Covers Company",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextIndex = useMemo(
    () => (currentSlide === slides.length - 1 ? 0 : currentSlide + 1),
    [currentSlide],
  );

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const previousSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_PLAY_DELAY);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 60) nextSlide();
    if (distance < -60) previousSlide();
  };

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative mt-4 mb-4 h-[560px] overflow-hidden bg-[#0b1220] sm:h-[600px] md:h-[650px] lg:h-[700px]"
      aria-label="Featured Depot Covers projects"
    >
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        const shouldRenderImage = isActive || index === nextIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "z-20 opacity-100"
                : "pointer-events-none z-10 opacity-0"
            }`}
            aria-hidden={!isActive}
            {...(!isActive ? ({ inert: "" } as Record<string, string>) : {})}
          >
            {/* Background fill (no duplicate image download) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12233f] via-[#0b1220] to-black" />

            {/* Main image */}
            <div className="absolute inset-0 flex items-center justify-center">
              {shouldRenderImage && (
                <img
                  src={slide.image}
                  srcSet={`${slide.imageSm} 640w, ${slide.imageMd} 1024w, ${slide.image} 1600w`}
                  sizes="100vw"
                  alt={slide.alt}
                  width={1600}
                  height={900}
                  draggable={false}
                  loading={isActive ? "eager" : "lazy"}
                  fetchPriority={isActive ? "high" : "low"}
                  decoding="async"
                  className={`relative z-10 block h-full w-full object-contain object-center transition-transform duration-[12000ms] ease-linear ${
                    isActive ? "scale-[1.015]" : "scale-100"
                  }`}
                />
              )}
            </div>

            {/* Readability overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Copy */}
            <div className="absolute inset-0 z-30 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="max-w-2xl">
                  <span className="inline-block rounded-full border border-orange-400/40 bg-orange-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
                    {slide.badge}
                  </span>

                  {index === 0 ? (
                    <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                      {slide.title}
                      <span className="block text-orange-400">
                        {slide.highlight}
                      </span>
                    </h1>
                  ) : (
                    <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                      {slide.title}
                      <span className="block text-orange-400">
                        {slide.highlight}
                      </span>
                    </h2>
                  )}

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-700 px-7 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-800"
                    >
                      Get a free quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      to="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
                    >
                      Explore our services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar */}
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

      {/* Bottom navigation */}
      <div className="pointer-events-none absolute bottom-7 left-0 z-[60] w-full px-6 md:bottom-9 md:px-12">
        <div className="mx-auto flex max-w-7xl items-end justify-between">
          <div className="pointer-events-auto flex items-center gap-5 sm:gap-8">
            <div
              className="text-lg font-light tracking-[0.2em] text-white sm:text-2xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,.9)" }}
            >
              <span className="font-bold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="text-white/60">
                {" "}
                / {String(slides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index}
                  className={`h-2.5 overflow-hidden rounded-full transition-all duration-500 ${
                    currentSlide === index
                      ? "w-12 bg-orange-500 shadow-[0_0_18px_rgba(249,115,22,.6)] sm:w-14"
                      : "w-5 bg-white/50 hover:w-8 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-auto hidden flex-col items-center gap-3 md:flex">
            <span
              className="rotate-90 text-[10px] uppercase tracking-[0.35em] text-white/80"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,.8)" }}
            >
              Scroll
            </span>
            <div className="mt-8 flex h-14 w-7 justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-md">
              <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute right-4 top-1/2 z-[60] flex -translate-y-1/2 flex-col gap-3 sm:right-6 md:right-8 md:gap-4 lg:right-10">
        <Button
          size="icon"
          variant="outline"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="h-11 w-11 rounded-full border-white/20 bg-black/30 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/50 md:h-12 md:w-12"
        >
          <ChevronUp className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          size="icon"
          variant="outline"
          onClick={nextSlide}
          aria-label="Next slide"
          className="h-11 w-11 rounded-full border-white/20 bg-black/30 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-black/50 md:h-12 md:w-12"
        >
          <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
