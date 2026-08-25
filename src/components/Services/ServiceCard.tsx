import { Link } from "react-router-dom";
import {
  Check,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Images,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceCardProps {
  name: string;
  category: string;
  description: string;
  img_url: string;
  gallery?: string[];
  features: string[];
}

export default function ServiceCard({
  name,
  category,
  description,
  img_url,
  gallery = [],
  features,
}: ServiceCardProps) {
  const [showAll, setShowAll] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  // Main image + gallery images
  const photos = [img_url, ...gallery.filter((photo) => photo !== img_url)];

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const previousPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const openGallery = () => {
    setCurrentPhoto(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <>
      {/* SERVICE CARD */}
      <div className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Image Header */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={img_url}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Category */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
              {category}
            </span>
          </div>

          {/* View Photos Button */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={openGallery}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2 bg-black/70 hover:bg-black/90 text-white text-sm font-semibold rounded-full backdrop-blur-sm transition-all duration-200"
            >
              <Images className="w-4 h-4" />
              View Photos
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
            {name}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Feature Bullets */}
          <ul className="space-y-2 mb-4">
            {(showAll ? features : features.slice(0, 5)).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Show More Features */}
          {features.length > 5 && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              {showAll ? (
                <>
                  Show less
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  +{features.length - 5} more services
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}

          {/* Footer */}
          <div className="mt-auto">
            <Link to="/contact">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-11 group/btn">
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* GALLERY MODAL */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeGallery}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Image */}
            <div className="relative flex items-center justify-center">
              <img
                src={photos[currentPhoto]}
                alt={`${name} - Photo ${currentPhoto + 1}`}
                className="max-h-[70vh] max-w-full object-contain rounded-xl"
              />

              {/* Previous Button */}
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={previousPhoto}
                  className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {photos.length > 1 && (
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Photo Counter */}
            <div className="text-center text-white text-sm mt-4">
              {currentPhoto + 1} / {photos.length}
            </div>

            {/* Thumbnails */}
            {photos.length > 1 && (
              <div className="flex gap-2 justify-center mt-4 overflow-x-auto pb-2 px-2">
                {photos.map((photo, index) => (
                  <button
                    key={`${photo}-${index}`}
                    type="button"
                    onClick={() => setCurrentPhoto(index)}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      index === currentPhoto
                        ? "border-white scale-105"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  >
                    <img
                      src={photo}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Service Name */}
            <p className="text-center text-white/80 text-sm mt-3">{name}</p>
          </div>
        </div>
      )}
    </>
  );
}
