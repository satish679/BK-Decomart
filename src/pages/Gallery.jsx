import React, { useState, useEffect } from "react";
import LuxImg from "@/components/LuxImg";
import Reveal from "@/components/Reveal";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  ...Array.from({ length: 10 }, (_, i) => `images/curtains-${i}`),
  "images/curtains-catalog",
  ...Array.from({ length: 14 }, (_, i) => `images/blinds-${i}`),
  "images/wallpapers-0",
  "images/wallpapers-1",
  "images/wallpapers-2",
  "images/wallpaper-3",
  "images/wallpaper-4",
  "images/wallpaper-5",
  "images/wallpaper-6",
  ...Array.from({ length: 8 }, (_, i) => `images/carpet-${i}`),
  "images/carpets-0",
  "images/carpets-8",
  "images/carpets-9",
  "images/carpets-10",
  "images/carpets-11",
  "images/carpets-12",
  ...Array.from({ length: 9 }, (_, i) => `images/bed-${i + 1}`),
  "images/mattress-0",
  "images/mattress-1",
  "images/plants",
  ...Array.from({ length: 7 }, (_, i) => `images/plants-${i + 2}`),
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") setActiveIdx((prev) => (prev + 1) % galleryImages.length);
      if (e.key === "ArrowLeft")
        setActiveIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.documentElement.style.overflow = activeIdx === null ? "" : "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [activeIdx]);

  return (
    <div className="pt-36 sm:pt-44 md:pt-52">
      {/* 1. Header */}
      <section className="pb-10 sm:pb-14 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> The Gallery
            </p>
            <h1 className="hero-title mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl max-w-4xl">
              Moments in{" "}
              <span className="font-serif-italic text-walnut">dressed homes.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-charcoal font-light max-w-2xl leading-relaxed">
              A curated gallery of real installations, drapery, and our Madurai showroom — tap any frame to explore in full detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Masonry Grid */}
      <section className="pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            data-testid="gallery-masonry"
          >
            {galleryImages.map((img, idx) => (
              <Reveal key={img + idx} delay={(idx % 4) * 60}>
                <button
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className="block w-full text-left hover-zoom rounded-sm overflow-hidden bg-beige shadow-soft group"
                  data-testid={`gallery-item-${idx}`}
                  style={{
                    aspectRatio: idx % 3 === 0 ? "4/5" : idx % 2 === 0 ? "1/1" : "3/4",
                  }}
                >
                  <LuxImg
                    name={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Lightbox */}
      {activeIdx !== null && (
        <div
          className="lightbox-backdrop flex items-center justify-center p-3 sm:p-6"
          data-testid="gallery-lightbox"
        >
          <button
            type="button"
            onClick={() => setActiveIdx(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory hover:text-champagne p-2.5 z-50 bg-matte/50 rounded-full"
            aria-label="Close"
            data-testid="lightbox-close"
          >
            <X size={24} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setActiveIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-ivory hover:text-champagne p-2 z-50 bg-matte/40 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={() => setActiveIdx((prev) => (prev + 1) % galleryImages.length)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-ivory hover:text-champagne p-2 z-50 bg-matte/40 rounded-full"
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div className="max-w-5xl w-full max-h-[80vh] flex items-center justify-center px-4">
            <LuxImg
              name={galleryImages[activeIdx]}
              alt=""
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded"
              loading="eager"
            />
          </div>

          <p className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center text-ivory/70 text-[0.65rem] sm:text-xs uppercase tracking-[0.2em]">
            {activeIdx + 1} / {galleryImages.length} · Tap arrows to navigate · Esc to close
          </p>
        </div>
      )}
    </div>
  );
}
