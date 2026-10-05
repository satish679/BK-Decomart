import React from "react";
import { Link } from "react-router-dom";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import LuxImg from "@/components/LuxImg";
import { ArrowRight } from "lucide-react";

const timeline = [
  { year: "1995", label: "Founded on Sivagangai Main Road, Madurai." },
  { year: "2003", label: "First imported curtain fabric collection introduced." },
  { year: "2012", label: "In-house tailoring atelier established." },
  { year: "2018", label: "Full-service carpet and luxury window fashion expansion." },
  { year: "2024", label: "Three decades of excellence dressing over 5,000 homes." },
];

export default function About() {
  return (
    <div className="pt-36 sm:pt-44 md:pt-52">
      {/* 1. Header */}
      <section className="pb-12 sm:pb-16 md:pb-20 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-12 gap-8 sm:gap-12 items-end">
          <Reveal className="md:col-span-7">
            <p className="overline">
              <span className="hairline" /> About {site.name}
            </p>
            <h1 className="hero-title mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl">
              A Madurai atelier of
              <br />
              <span className="font-serif-italic text-walnut">home dressing.</span>
            </h1>
          </Reveal>

          <Reveal className="md:col-span-5 md:pt-14" delay={150}>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-charcoal font-light">
              Since 1995, we have been curating the fabrics, window dressings and fine finishes that turn houses into cherished homes. Two generations, two dedicated showrooms, and a master team committed to genuine craftsmanship.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Showroom Hero Image */}
      <section className="pb-16 sm:pb-24 md:pb-32 bg-textile-linen">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal className="hover-zoom aspect-[16/10] sm:aspect-cinema rounded-sm overflow-hidden shadow-soft border border-linen/80 p-1.5 bg-white/70">
            <LuxImg
              name="store-pic"
              alt="BK Decomart Real Showroom"
              className="w-full h-full object-cover rounded-xs"
            />
          </Reveal>
        </div>
      </section>

      {/* 3. Philosophy */}
      <section
        className="py-16 sm:py-24 bg-textile-beige relative overflow-hidden"
        data-testid="about-philosophy"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -bottom-10 -left-6 select-none"
          aria-hidden="true"
        >
          Heritage
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-12 gap-8 sm:gap-12 relative z-10">
          <Reveal className="md:col-span-4">
            <p className="overline">
              <span className="hairline" /> Our Philosophy
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              Considered <span className="font-serif-italic text-walnut">by hand.</span>
            </h2>
          </Reveal>

          <Reveal className="md:col-span-8 md:pl-4 grid gap-6 sm:gap-8" delay={150}>
            <div className="atelier-card p-6 sm:p-7 rounded-sm">
              <p className="mag-number text-xs sm:text-sm text-champagne font-mono">— 01</p>
              <h3 className="font-serif text-xl sm:text-2xl mt-1 sm:mt-2 text-matte">
                Two showrooms. Thirty years.
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal font-light leading-relaxed max-w-2xl">
                We have never scaled by opening scattered franchises. We have scaled by getting better at the one thing we've always done — dressing homes with personal care across Madurai.
              </p>
            </div>

            <div className="atelier-card p-6 sm:p-7 rounded-sm">
              <p className="mag-number text-xs sm:text-sm text-champagne font-mono">— 02</p>
              <h3 className="font-serif text-xl sm:text-2xl mt-1 sm:mt-2 text-matte">
                Every window, personally.
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal font-light leading-relaxed max-w-2xl">
                Our senior designers still visit each home. Measurements are taken with exacting precision before fabrics are drafted, cut, and tailored.
              </p>
            </div>

            <div className="atelier-card p-6 sm:p-7 rounded-sm">
              <p className="mag-number text-xs sm:text-sm text-champagne font-mono">— 03</p>
              <h3 className="font-serif text-xl sm:text-2xl mt-1 sm:mt-2 text-matte">
                Craft over inventory.
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-charcoal font-light leading-relaxed max-w-2xl">
                Our bespoke process means we promise a custom fit no ready-made curtain can match. The fall, weight and finish will belong to your room alone.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Timeline */}
      <section
        className="py-16 sm:py-24 md:py-32 bg-textile-linen relative overflow-hidden"
        data-testid="about-timeline"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -top-8 -right-8 select-none"
          aria-hidden="true"
        >
          Timeline
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
          <Reveal className="mb-10 sm:mb-14 max-w-2xl">
            <p className="overline">
              <span className="hairline" /> The Timeline
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              Thirty years, <span className="font-serif-italic text-walnut">quietly built.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-5">
            {timeline.map((item, idx) => (
              <Reveal
                key={item.year}
                delay={idx * 80}
                className="atelier-card p-5 sm:p-6 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <p className="font-serif text-2xl sm:text-4xl text-champagne">{item.year}</p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-charcoal font-light leading-relaxed">
                    {item.label}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-linen/50 text-[0.65rem] text-charcoal/50 uppercase tracking-wider font-mono">
                  Milestone 0{idx + 1}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Invitation */}
      <section className="py-16 sm:py-24 md:py-32 bg-walnut text-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 text-center">
          <Reveal>
            <p className="overline !text-champagne">
              <span className="hairline !bg-champagne" /> The Invitation
            </p>
            <h2 className="section-title mt-3 sm:mt-4 !text-ivory max-w-3xl mx-auto text-2xl sm:text-4xl">
              Come by the showroom in Gomathipuram.{" "}
              <span className="font-serif-italic text-champagne">Tea is on us.</span>
            </h2>
            <Link
              to="/contact"
              className="btn-primary !bg-champagne !text-matte mt-8 sm:mt-10 inline-flex w-full sm:w-auto justify-center"
            >
              Plan Your Visit <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
