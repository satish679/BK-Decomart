import React from "react";
import LuxImg from "./LuxImg";
import Reveal from "./Reveal";

export default function Showreel({ className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-matte text-ivory ${className}`} data-testid="showreel-section">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 text-center">
        <Reveal>
          <p className="overline !text-champagne">
            <span className="hairline !bg-champagne" /> The Craft & Process
          </p>
          <h2 className="section-title !text-ivory mt-3 sm:mt-4 text-2xl sm:text-4xl">
            From Loom to Living Room
          </h2>
          <p className="mt-4 text-ivory/70 max-w-xl mx-auto text-sm sm:text-base font-light">
            Every stitch is tailored by master tailors in Madurai with three decades of legacy.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-8 sm:mt-12 max-w-4xl mx-auto aspect-cinema rounded-sm overflow-hidden border border-ivory/20 shadow-deep">
          <LuxImg name="images/curtains-4" alt="BK Decomart Craftsmanship" className="w-full h-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
