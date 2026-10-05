import React from "react";
import { faqData } from "@/lib/products";
import Reveal from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="pt-36 sm:pt-44 md:pt-52">
      {/* 1. Header */}
      <section className="pb-10 sm:pb-14 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> Frequently Asked
            </p>
            <h1 className="hero-title mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl max-w-4xl">
              Everything you might{" "}
              <span className="font-serif-italic text-walnut">quietly wonder.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* 2. Accordion */}
      <section className="pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 md:px-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            data-testid="faq-accordion"
          >
            {faqData.map((item, idx) => (
              <AccordionItem key={item.q} value={`item-${idx}`} className="border-b border-linen">
                <AccordionTrigger className="text-left font-serif text-lg sm:text-xl md:text-2xl py-4 sm:py-6 hover:text-champagne">
                  <span className="mag-number pr-3 sm:pr-4 text-xs sm:text-sm">
                    — {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span>{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-charcoal font-light pb-4 sm:pb-6 pl-6 sm:pl-12">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
