import React from "react";
import { Link } from "react-router-dom";
import { site, getPhoneUrl, getWhatsAppUrl } from "@/lib/site";
import { products } from "@/lib/products";
import CinematicHero from "@/components/CinematicHero";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import LuxImg from "@/components/LuxImg";
import Marquee from "@/components/Marquee";
import BeforeAfter from "@/components/BeforeAfter";
import ClientLogos from "@/components/ClientLogos";
import GoogleTrustindexReviews from "@/components/GoogleTrustindexReviews";
import {
  ArrowRight,
  Award,
  Ruler,
  Wrench,
  Truck,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

const featuredSlugs = ["curtains", "blinds", "wallpapers", "carpets"];

const pillars = [
  {
    icon: Award,
    title: "30 Years of Trust",
    copy: "Established 1995 · Two generations of dressing Madurai homes.",
  },
  {
    icon: Ruler,
    title: "Site Measurement",
    copy: "Free at-home consultation and precise measurements at your doorstep.",
  },
  {
    icon: Wrench,
    title: "Full Installation",
    copy: "In-house master teams for drapery, blinds, tracks and wallpapers.",
  },
  {
    icon: Truck,
    title: "Pan-Tamil Nadu Delivery",
    copy: "Careful packaging, safe transit, and on-time arrival guaranteed.",
  },
];

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* 1. Cinematic Scroll Video Hero */}
      <CinematicHero />

      {/* 2. Brand Story Overview */}
      <section
        className="py-16 sm:py-24 md:py-32 bg-textile-linen relative overflow-hidden"
        data-testid="home-story"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -top-10 -left-6 select-none"
          aria-hidden="true"
        >
          Madurai
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-12 gap-8 sm:gap-12 relative z-10 items-center">
          <Reveal className="md:col-span-6">
            <p className="overline">
              <span className="hairline" /> The BK Heritage
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-3xl sm:text-5xl">
              Thirty years of dressing{" "}
              <span className="font-serif-italic text-walnut">Madurai's finest spaces.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-charcoal font-light leading-relaxed">
              Founded in 1995 on Sivagangai Main Road, Gomathipuram, BK Decomart has grown from a bespoke drapery shop into South Tamil Nadu's premiere destination for bespoke window dressing, architectural blinds, luxury wallpapers and rugs.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link to="/about" className="btn-outline">
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150} className="md:col-span-6">
            <div className="hover-zoom aspect-[4/3] rounded-sm overflow-hidden bg-linen/30 border border-linen/80 shadow-soft p-1.5 bg-white/70">
              <LuxImg
                name="images/store-pic"
                alt="BK Decomart Gomathipuram Showroom"
                className="w-full h-full object-cover rounded-xs"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Curated Collections Grid */}
      <section
        className="py-16 sm:py-24 md:py-32 bg-ivory relative overflow-hidden"
        data-testid="home-collections"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -bottom-10 -right-8 select-none"
          aria-hidden="true"
        >
          Collections
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
            <div>
              <p className="overline">
                <span className="hairline" /> The Collections
              </p>
              <h2 className="section-title mt-3 sm:mt-4 max-w-xl text-2xl sm:text-4xl">
                Curated categories,
                <br />
                <span className="font-serif-italic text-walnut">cinematic craft.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="btn-outline shrink-0 w-full sm:w-auto text-center justify-center"
              data-testid="collections-view-all"
            >
              View all collections <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredSlugs.map((slug, idx) => {
              const item = products.find((p) => p.slug === slug);
              if (!item) return null;
              return (
                <Reveal key={slug} delay={idx * 100}>
                  <Tilt strength={6}>
                    <Link
                      to={`/products/${slug}`}
                      className="block group"
                      data-testid={`featured-${slug}`}
                    >
                      <div className="hover-zoom aspect-[4/5] rounded-sm overflow-hidden bg-linen/30 border border-linen/70 p-1 bg-white/70 shadow-soft">
                        <LuxImg
                          name={item.img}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xs"
                        />
                      </div>
                      <div className="mt-4 sm:mt-5 flex items-start justify-between gap-4">
                        <div>
                          <p className="mag-number text-xs">— 0{idx + 1}</p>
                          <h3 className="font-serif text-xl sm:text-2xl mt-0.5">{item.name}</h3>
                          <p className="text-xs text-charcoal/70 mt-1 line-clamp-1">{item.subtitle}</p>
                        </div>
                        <ArrowRight
                          size={18}
                          strokeWidth={1.4}
                          className="mt-2 text-champagne group-hover:translate-x-1 transition-transform shrink-0"
                        />
                      </div>
                    </Link>
                  </Tilt>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Marquee Ribbon */}
      <Marquee />

      {/* 5. Before & After Transformation */}
      <section
        className="py-12 sm:py-16 md:py-20 bg-textile-linen relative overflow-hidden"
        data-testid="home-before-after"
      >
        <span
          className="watermark-emblem text-8xl -top-6 -right-10 select-none"
          aria-hidden="true"
        >
          Atelier
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
          <Reveal className="mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
            <p className="overline justify-center">
              <span className="hairline" /> Transformation <span className="hairline" />
            </p>
            <h2 className="section-title mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl">
              Drag the handle.{" "}
              <span className="font-serif-italic text-walnut">Watch a space become a dressed home.</span>
            </h2>
            <p className="mt-2 text-charcoal/70 text-xs sm:text-sm font-light">
              Swipe or drag horizontally to view the transition from initial structure to finished luxury drapery.
            </p>
          </Reveal>

          <Reveal className="max-w-2xl lg:max-w-3xl mx-auto">
            <BeforeAfter
              beforeSrc="/before.png"
              afterSrc="/after.png"
              className="shadow-deep rounded-md aspect-[4/3] max-h-[440px] sm:max-h-[480px] w-full border border-linen/70"
            />
          </Reveal>
        </div>
      </section>

      {/* 6. Why BK Decomart Pillars */}
      <section
        className="py-16 sm:py-24 md:py-32 bg-textile-beige relative overflow-hidden"
        data-testid="home-why"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -top-8 -left-6 select-none"
          aria-hidden="true"
        >
          Quality
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
          <Reveal className="mb-10 sm:mb-14 max-w-2xl">
            <p className="overline">
              <span className="hairline" /> Why BK Decomart
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              Considered choices,{" "}
              <span className="font-serif-italic text-walnut">quietly delivered.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((item, idx) => (
              <Reveal
                key={item.title}
                delay={idx * 80}
                className="atelier-card p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-sm bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne">
                      <item.icon size={22} strokeWidth={1.4} />
                    </div>
                    <span className="font-serif italic text-charcoal/20 text-lg">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl mt-2 text-matte">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-charcoal/75 mt-2 sm:mt-3 leading-relaxed font-light">
                    {item.copy}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-linen/50 flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-walnut font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  <span>Madurai Atelier</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Logos Marquee */}
      <ClientLogos />

      {/* 8. Stats Ribbon */}
      <section
        className="relative py-20 sm:py-24 md:py-28 bg-matte text-ivory overflow-hidden"
        data-testid="home-stats"
      >
        <div className="absolute inset-0">
          <LuxImg
            name="images/curtains-4"
            alt="Curtains"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-matte/75" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 text-center">
          {[
            { n: "12K+", l: "Happy Customers" },
            { n: "8", l: "Curated Worlds" },
            { n: "30+", l: "Top Brands" },
            { n: "30+", l: "Years in Madurai" },
          ].map((stat, idx) => (
            <Reveal key={stat.l} delay={idx * 80}>
              <p className="font-serif text-3xl sm:text-5xl md:text-6xl text-champagne">
                {stat.n}
              </p>
              <p className="mt-1 sm:mt-2 overline !text-ivory/70 text-[0.65rem] sm:text-xs">
                {stat.l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 9. Google Trustindex Verified Reviews */}
      <GoogleTrustindexReviews />

      {/* 10. Consultation & Showroom Invitation */}
      <section
        className="py-16 sm:py-24 md:py-32 bg-textile-beige relative overflow-hidden"
        data-testid="home-consultation"
      >
        <span
          className="watermark-emblem text-8xl md:text-9xl -bottom-10 -right-10 select-none"
          aria-hidden="true"
        >
          BK Atelier
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
          <Reveal className="md:col-span-6">
            <div className="hover-zoom aspect-[4/3] sm:aspect-portrait rounded-sm overflow-hidden shadow-soft border border-linen/80 p-1.5 bg-white/70">
              <LuxImg
                name="images/showroom-2"
                alt="BK Decomart Showroom"
                className="w-full h-full object-cover rounded-xs"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 md:pl-4" delay={150}>
            <p className="overline">
              <span className="hairline" /> Book a Consultation
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              Free home visit.{" "}
              <span className="font-serif-italic text-walnut">One conversation begins it all.</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal font-light leading-relaxed max-w-md">
              Tell us the rooms you'd like to dress. We'll bring swatches, take measurements and share a personalized written proposal within 48 hours — at no cost.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center"
                data-testid="cta-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href={getPhoneUrl()}
                className="btn-outline w-full sm:w-auto text-center justify-center"
                data-testid="cta-call"
              >
                <Phone size={16} /> {site.phone}
              </a>
              <Link
                to="/contact"
                className="btn-outline w-full sm:w-auto text-center justify-center"
              >
                <MapPin size={16} /> Visit Showroom
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
