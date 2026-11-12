import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  /** Accessible label describing the video. */
  label: string;
  /** Start playback once the video scrolls into view. */
  autoPlay?: boolean;
  /** Root margin for the intersection observer. */
  rootMargin?: string;
}

/**
 * Lightweight video wrapper that only downloads and plays the video when it
 * enters the viewport. This keeps autoplaying video from competing with the
 * LCP image on first load.
 */
export default function LazyVideo({
  src,
  poster,
  className,
  label,
  autoPlay = true,
  rootMargin = "200px",
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (!isVisible || !autoPlay) return;
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      // Autoplay can be blocked (e.g. data-saver / low power mode).
      playPromise.catch(() => {});
    }
  }, [isVisible, autoPlay]);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        poster={poster}
        autoPlay={autoPlay && isVisible}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
