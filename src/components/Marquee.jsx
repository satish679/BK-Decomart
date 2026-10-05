import React from "react";

const marqueeItems = [
  "Curtains",
  "Blinds",
  "Wallpapers",
  "Carpets",
  "Mattresses",
  "Artificial Plants",
  "Since 1995",
  "Made in Madurai",
  "Come · Let's Dressup Your Home",
  "Free Site Consultation",
];

const starOrnament = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 20 20"
    className="text-champagne inline-block mx-8"
  >
    <path
      d="M10 2 L11.3 8.7 L18 10 L11.3 11.3 L10 18 L8.7 11.3 L2 10 L8.7 8.7 Z"
      fill="currentColor"
    />
  </svg>
);

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section
      className="py-8 md:py-10 bg-matte overflow-hidden relative"
      data-testid="marquee-ribbon"
    >
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-matte to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-matte to-transparent z-10 pointer-events-none" />
      <div className="marquee-track">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="font-serif italic text-ivory text-2xl md:text-4xl whitespace-nowrap tracking-tight">
              {item}
            </span>
            {starOrnament}
          </div>
        ))}
      </div>
    </section>
  );
}
