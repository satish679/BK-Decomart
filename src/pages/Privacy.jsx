import React from "react";
import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";

const privacySections = [
  {
    t: "Information We Collect",
    b: "We collect only the information you share via WhatsApp, phone, email, or our contact form. We do not build tracking profiles.",
  },
  {
    t: "How We Use It",
    b: "To respond to enquiries, prepare quotations, coordinate site measurement and installation, and improve our services.",
  },
  {
    t: "Data Sharing",
    b: "We never sell your data. We may share it with our design, stitching or logistics team strictly to fulfil your enquiry.",
  },
  {
    t: "Retention",
    b: "Enquiry details are kept for our business records under Indian tax and consumer laws.",
  },
  {
    t: "Your Rights",
    b: `You may request access, correction or deletion of your personal information at any time by writing to ${site.email}.`,
  },
  {
    t: "Cookies",
    b: "Our website uses minimal essential cookies only. No advertising cookies are set.",
  },
  {
    t: "Contact",
    b: `Questions? Write to ${site.email} or call ${site.phone}.`,
  },
];

export default function Privacy() {
  return (
    <div className="pt-28">
      <section className="pb-14 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> Legal
            </p>
            <h1 className="hero-title mt-6">Privacy Policy</h1>
            <p className="text-sm text-charcoal/70 mt-4">Last updated · January 2026</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10 space-y-10">
          {privacySections.map((item, idx) => (
            <Reveal key={item.t} delay={idx * 50}>
              <p className="mag-number">— {String(idx + 1).padStart(2, "0")}</p>
              <h2 className="font-serif text-2xl mt-2">{item.t}</h2>
              <p className="mt-3 text-charcoal font-light leading-relaxed">{item.b}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
