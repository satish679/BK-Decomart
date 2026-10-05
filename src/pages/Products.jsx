import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/lib/products";
import LuxImg from "@/components/LuxImg";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

function ProductCard({ category, index }) {
  const gallery = category.gallery && category.gallery.length > 0 ? category.gallery : [category.img];
  const [activeImage, setActiveImage] = useState(category.img);

  const cleanName = activeImage.replace(/^(images|Product-images|product-img2|jpegmini_optimized)\//, "");
  const caption =
    category.galleryCaptions?.[activeImage] ||
    category.galleryCaptions?.[`images/${cleanName}`] ||
    category.galleryCaptions?.[`Product-images/${cleanName}`] ||
    category.galleryCaptions?.[cleanName] ||
    "";

  return (
    <Reveal delay={(index % 3) * 80} data-testid={`product-card-${category.slug}`}>
      <div className="block group">
        <Link to={`/products/${category.slug}`} className="block">
          <div className="hover-zoom aspect-[4/5] rounded-sm overflow-hidden bg-linen/30 shadow-soft relative">
            <LuxImg
              name={activeImage}
              alt={category.name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute top-3 right-3 bg-matte/75 backdrop-blur-sm text-ivory text-[0.65rem] tracking-[0.15em] uppercase px-2.5 py-1 rounded-sm border border-ivory/15">
              {gallery.length} {gallery.length === 1 ? "Design" : "Designs"}
            </div>
            {caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-matte/85 via-matte/50 to-transparent p-3 text-ivory text-xs font-serif line-clamp-1">
                {caption}
              </div>
            )}
          </div>
        </Link>

        {gallery.length > 1 && (
          <div className="flex items-center gap-2 mt-3 px-0.5 overflow-x-auto no-scrollbar py-0.5">
            {gallery.slice(0, 5).map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveImage(img);
                }}
                onMouseEnter={() => setActiveImage(img)}
                className={`relative w-11 h-11 rounded-sm overflow-hidden border transition-all shrink-0 ${
                  activeImage === img
                    ? "border-champagne ring-2 ring-champagne scale-105"
                    : "border-linen/70 opacity-75 hover:opacity-100"
                }`}
                aria-label={`Preview design ${i + 1} of ${category.name}`}
              >
                <LuxImg name={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
            {gallery.length > 5 && (
              <Link
                to={`/products/${category.slug}`}
                className="text-[0.68rem] uppercase tracking-wider text-charcoal/70 hover:text-champagne font-medium pl-1 shrink-0"
              >
                +{gallery.length - 5} more
              </Link>
            )}
          </div>
        )}

        <Link
          to={`/products/${category.slug}`}
          className="mt-3 flex items-start justify-between"
        >
          <div>
            <p className="mag-number text-xs">— 0{index + 1}</p>
            <h3 className="font-serif text-2xl sm:text-3xl mt-1">{category.name}</h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-xs">
              {category.subtitle}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="mt-3 text-champagne group-hover:translate-x-1 transition-transform shrink-0"
          />
        </Link>
      </div>
    </Reveal>
  );
}

export default function Products() {
  return (
    <div className="pt-36 sm:pt-44 md:pt-52">
      <section className="pb-12 sm:pb-16 md:pb-20 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> The Collections
            </p>
            <h1 className="hero-title mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl max-w-4xl">
              Six curated worlds
              <br />
              <span className="font-serif-italic text-walnut">for the modern home.</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal/80 font-light max-w-2xl leading-relaxed">
              Explore our bespoke window dressings, luxury wallpapers, hand-finished rugs, mattresses and accessories curated for homes across Tamil Nadu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {products.map((category, idx) => (
            <ProductCard key={category.slug} category={category} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
