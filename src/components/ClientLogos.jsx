import React from "react";
import LuxImg from "./LuxImg";

const clients = [
  { name: "client-hannah-joseph", label: "Hannah Joseph Hospital" },
  { name: "client-dwarka-palace", label: "Dwarka Palace Convention Center" },
  { name: "client-chellam-saraswathy", label: "V.S.Chellam Saraswathy Maaligai" },
  { name: "client-bharathi-infinity", label: "Bharathi Infinity Hospital" },
  { name: "client-anjali", label: "Anjali" },
  { name: "client-star", label: "Star" },
  { name: "client-union", label: "Union" },
  { name: "client-smj", label: "SMJ" },
  { name: "client-royal", label: "Royal" },
  { name: "client-meenakshi", label: "Meenakshi" },
];

export default function ClientLogos() {
  const logos = [...clients, ...clients];

  return (
    <section className="py-12 sm:py-16 bg-ivory border-y border-linen/70 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 mb-6 text-center">
        <p className="overline justify-center">
          <span className="hairline" /> Trusted by Leading Institutions & Residences <span className="hairline" />
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-ivory to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-ivory to-transparent z-10 pointer-events-none" />
        <div className="marquee-track flex items-center" style={{ animationDuration: "26s" }}>
          {logos.map((c, idx) => (
            <div
              key={idx}
              className="shrink-0 mx-4 sm:mx-6 md:mx-10 h-10 sm:h-14 md:h-16 flex items-center justify-center opacity-90 hover:opacity-100 transition"
            >
              <LuxImg
                name={c.name}
                alt={c.label}
                className="h-full w-auto object-contain max-w-[130px] sm:max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
