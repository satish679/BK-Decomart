import React from "react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import LuxImg from "./LuxImg";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { ArrowRight } from "lucide-react";

export default function CollectionsShowcase({ className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-textile-beige ${className}`} data-testid="collections-showcase">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="overline">
              <span className="hairline" /> Our Collections
            </p>
            <h2 className="section-title mt-2 text-2xl sm:text-4xl">
              Curated for Modern Interiors
            </h2>
          </div>
          <Link to="/products" className="btn-outline shrink-0">
            View All Collections <ArrowRight size={16} />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item, idx) => (
            <Reveal key={item.slug} delay={idx * 80}>
              <Tilt strength={6}>
                <Link to={`/products/${item.slug}`} className="block group">
                  <div className="aspect-[4/5] rounded-sm overflow-hidden bg-linen/30 border border-linen/70 shadow-soft relative">
                    <LuxImg name={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-charcoal/70 mt-1">{item.subtitle}</p>
                    </div>
                    <ArrowRight size={18} className="mt-2 text-champagne group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
