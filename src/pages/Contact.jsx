import React, { useState } from "react";
import { showrooms, site, getPhoneUrl, getEmailUrl, getWhatsAppUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Navigation,
} from "lucide-react";

export default function Contact() {
  const [activeShowroomIdx, setActiveShowroomIdx] = useState(0);
  const activeShowroom = showrooms[activeShowroomIdx] || showrooms[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      "Hi BK Decomart!",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Preferred Showroom: ${data.get("showroom") || "Any"}`,
      `Interested in: ${data.get("interest")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(getWhatsAppUrl(text), "_blank", "noreferrer");
  };

  return (
    <div className="pt-24 sm:pt-28">
      {/* 1. Header */}
      <section className="pb-10 sm:pb-14 bg-textile-linen relative overflow-hidden">
        <span
          className="watermark-emblem text-8xl md:text-9xl -top-8 -right-6 select-none"
          aria-hidden="true"
        >
          Madurai
        </span>
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 relative z-10">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> Our Showrooms & Contact
            </p>
            <h1 className="hero-title mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl max-w-4xl">
              Two locations in Madurai.
              <br />
              <span className="font-serif-italic text-walnut">Come say hello, tea is on us.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* 2. Showroom Cards & Form */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-12 gap-8 sm:gap-10 md:gap-14">
          {/* Left Column: Showroom Cards & Direct Contacts */}
          <Reveal className="md:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <p className="overline text-xs text-champagne font-semibold tracking-[0.2em] mb-3">
                Our Showrooms in Madurai
              </p>
              <div className="space-y-4">
                {showrooms.map((sh, idx) => (
                  <div
                    key={sh.id}
                    className={`p-4 sm:p-5 rounded-sm border transition-all ${
                      activeShowroomIdx === idx
                        ? "border-champagne bg-ivory shadow-soft ring-1 ring-champagne/40"
                        : "border-linen/70 bg-white/70 hover:border-champagne/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[0.65rem] tracking-[0.18em] uppercase font-semibold text-walnut px-2 py-0.5 bg-beige rounded-sm">
                          {sh.title}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl mt-1.5 text-matte">
                          {sh.name}
                        </h3>
                        <p className="text-xs text-charcoal/70 font-light">{sh.subtitle}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveShowroomIdx(idx)}
                        className={`text-[0.68rem] uppercase tracking-wider px-2.5 py-1 rounded-sm border shrink-0 transition-colors ${
                          activeShowroomIdx === idx
                            ? "bg-matte text-ivory border-matte"
                            : "border-linen text-charcoal hover:border-champagne"
                        }`}
                      >
                        View on Map
                      </button>
                    </div>

                    <p className="font-serif text-sm sm:text-base mt-3 leading-snug flex gap-2.5 text-charcoal">
                      <MapPin size={18} strokeWidth={1.4} className="text-champagne shrink-0 mt-0.5" />
                      <span>{sh.address}</span>
                    </p>

                    <div className="mt-3 pt-3 border-t border-linen/50 flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={sh.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-champagne hover:underline font-medium uppercase tracking-wider"
                        data-testid={`directions-btn-${sh.id}`}
                      >
                        <Navigation size={12} /> Directions on Google Maps ↗
                      </a>
                      <span className="text-[0.7rem] text-charcoal/60">{sh.hours}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <p className="overline text-xs">Call Us</p>
                <a
                  href={getPhoneUrl()}
                  className="font-serif text-base sm:text-lg mt-1 flex items-center gap-2 hover:text-champagne transition"
                  data-testid="contact-phone"
                >
                  <Phone size={18} strokeWidth={1.3} className="text-champagne shrink-0" />
                  <span>{site.phone}</span>
                </a>
              </div>

              <div>
                <p className="overline text-xs">Email</p>
                <a
                  href={getEmailUrl()}
                  className="font-serif text-base sm:text-lg mt-1 flex items-center gap-2 hover:text-champagne break-all transition"
                  data-testid="contact-email"
                >
                  <Mail size={18} strokeWidth={1.3} className="text-champagne shrink-0" />
                  <span>{site.email}</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full sm:w-auto text-center justify-center inline-flex"
                data-testid="contact-whatsapp"
              >
                <MessageCircle size={16} /> WhatsApp Design Team
              </a>
            </div>
          </Reveal>

          {/* Right Column: Enquiry Form */}
          <Reveal className="md:col-span-7" delay={150}>
            <form
              onSubmit={handleSubmit}
              className="bg-beige p-6 sm:p-8 md:p-10 border border-linen/60 space-y-5 sm:space-y-6 rounded-sm shadow-soft"
              data-testid="contact-form"
            >
              <div>
                <p className="overline text-xs">Send an Enquiry</p>
                <h2 className="section-title mt-2 sm:mt-3 text-2xl sm:text-3xl">
                  A few details,{" "}
                  <span className="font-serif-italic text-walnut">and we'll take it from there.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-charcoal font-medium">
                    Name
                  </span>
                  <input
                    name="name"
                    required
                    className="mt-1.5 w-full bg-ivory border border-linen px-3.5 sm:px-4 py-2.5 sm:py-3 focus:border-champagne outline-none rounded-none text-sm"
                    data-testid="contact-name"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-charcoal font-medium">
                    Phone
                  </span>
                  <input
                    name="phone"
                    required
                    inputMode="tel"
                    className="mt-1.5 w-full bg-ivory border border-linen px-3.5 sm:px-4 py-2.5 sm:py-3 focus:border-champagne outline-none rounded-none text-sm"
                    data-testid="contact-phone-input"
                    placeholder="+91..."
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-charcoal font-medium">
                    Preferred Showroom
                  </span>
                  <select
                    name="showroom"
                    className="mt-1.5 w-full bg-ivory border border-linen px-3.5 sm:px-4 py-2.5 sm:py-3 focus:border-champagne outline-none rounded-none text-sm"
                  >
                    <option value="Showroom 1 (Gomathipuram)">
                      Showroom 1 – Gomathipuram (Main)
                    </option>
                    <option value="Showroom 2 (Jaihindpuram)">
                      Showroom 2 – Jaihindpuram
                    </option>
                    <option value="Home Visit / Either">Free Home Visit</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-[0.68rem] uppercase tracking-[0.2em] text-charcoal font-medium">
                    Interested in
                  </span>
                  <select
                    name="interest"
                    className="mt-1.5 w-full bg-ivory border border-linen px-3.5 sm:px-4 py-2.5 sm:py-3 focus:border-champagne outline-none rounded-none text-sm"
                    data-testid="contact-interest"
                  >
                    <option>Curtains & Drapery</option>
                    <option>Blinds (Roller, Roman, Zebra, Wooden)</option>
                    <option>Designer Wallpapers</option>
                    <option>Carpets & Rugs</option>
                    <option>Luxury Mattresses</option>
                    <option>Artificial Plants</option>
                    <option>Full Home Consultation</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[0.68rem] uppercase tracking-[0.2em] text-charcoal font-medium">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={3}
                  className="mt-1.5 w-full bg-ivory border border-linen px-3.5 sm:px-4 py-2.5 sm:py-3 focus:border-champagne outline-none rounded-none text-sm"
                  data-testid="contact-message"
                  placeholder="Tell us about your home requirements..."
                />
              </label>

              <button
                type="submit"
                className="btn-primary w-full justify-center !py-3.5"
                data-testid="contact-submit"
              >
                <MessageCircle size={16} /> Send via WhatsApp
              </button>

              <p className="text-xs text-charcoal/60 text-center">
                Submitting opens WhatsApp with your enquiry pre-filled.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 3. Interactive Map */}
      <section className="pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="overline text-xs">
                <span className="hairline" /> Interactive Map
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-matte mt-1">
                Currently Viewing: <span className="text-walnut">{activeShowroom.name}</span> ({activeShowroom.area})
              </h2>
            </div>

            <div className="flex items-center gap-2 p-1 bg-beige rounded-sm border border-linen/60 self-start sm:self-auto">
              {showrooms.map((sh, idx) => (
                <button
                  key={sh.id}
                  type="button"
                  onClick={() => setActiveShowroomIdx(idx)}
                  className={`px-3 sm:px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-xs transition-all flex items-center gap-2 ${
                    activeShowroomIdx === idx
                      ? "bg-matte text-ivory shadow-soft font-semibold"
                      : "text-charcoal/80 hover:text-matte hover:bg-ivory/60"
                  }`}
                >
                  <MapPin size={14} className={activeShowroomIdx === idx ? "text-champagne" : ""} />
                  <span>{sh.id === "gomathipuram" ? "1. Gomathipuram" : "2. Jaihindpuram"}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="aspect-cinema sm:aspect-[21/9] border border-linen/60 rounded-sm overflow-hidden shadow-soft relative group">
            <iframe
              key={activeShowroom.id}
              title={`${activeShowroom.name} Location`}
              src={activeShowroom.mapEmbed}
              className="w-full h-full border-0 transition-opacity duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="contact-map"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded shadow-md border border-linen text-xs flex items-center gap-2">
              <a
                href={activeShowroom.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-matte hover:text-champagne flex items-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
