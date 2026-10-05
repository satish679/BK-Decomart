import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProductBySlug, products } from "@/lib/products";
import { site, getWhatsAppUrl } from "@/lib/site";
import LuxImg from "@/components/LuxImg";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  ZoomIn,
  X,
  MessageCircle,
  Phone,
  Check,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";

function getCaption(category, imgKey, index) {
  if (!imgKey) return category?.name || "Product";
  const clean = imgKey
    .replace(/^(images|Product-images|product-img2|jpegmini_optimized)\//, "")
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");
  return (
    category?.galleryCaptions?.[imgKey] ||
    category?.galleryCaptions?.[`images/${clean}`] ||
    category?.galleryCaptions?.[`Product-images/${clean}`] ||
    category?.galleryCaptions?.[clean] ||
    `${category?.name || "Design"} #${String(index != null ? index + 1 : 1).padStart(2, "0")}`
  );
}

function getFileName(imgKey) {
  if (!imgKey) return "";
  const clean = imgKey.replace(/^(images|Product-images|product-img2|jpegmini_optimized)\//, "");
  return clean.includes(".") ? clean : `${clean}.jpg`;
}

export default function ProductCategory() {
  const { slug } = useParams();
  const category = getProductBySlug(slug);

  const [activeModalImg, setActiveModalImg] = useState(null);

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const galleryItems =
    category.gallery && category.gallery.length > 0 ? category.gallery : [category.img];
  const related = products.filter((p) => p.slug !== category.slug).slice(0, 3);

  const modalCaption = activeModalImg ? getCaption(category, activeModalImg) : "";
  const modalFileName = activeModalImg ? getFileName(activeModalImg) : "";

  return (
    <div className="pt-36 sm:pt-44 md:pt-52">
      {/* 1. Category Header */}
      <section className="pb-12 sm:pb-16 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/60 mb-3">
              <Link to="/products" className="hover:text-champagne transition-colors">
                Collections
              </Link>
              <span>/</span>
              <span className="text-champagne font-semibold">{category.name}</span>
            </div>
            <h1 className="hero-title mt-2 text-3xl sm:text-5xl md:text-6xl max-w-4xl">
              {category.name}
            </h1>
            <p className="font-serif italic text-lg sm:text-2xl text-walnut mt-2">
              {category.subtitle}
            </p>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-charcoal/80 font-light max-w-3xl leading-relaxed">
              {category.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={getWhatsAppUrl(
                  `Hi BK Decomart, I would like to inquire about your ${category.name} collection.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={16} /> Inquire on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline">
                Book Free Home Visit <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Main Hero Showcase */}
      <section className="pb-16 sm:pb-24 bg-textile-linen">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 hover-zoom aspect-[16/10] sm:aspect-cinema rounded-sm overflow-hidden bg-linen/30 border border-linen/80 shadow-soft">
              <LuxImg
                name={category.img}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-4 space-y-6">
              <div className="atelier-card p-6 rounded-sm">
                <h3 className="font-serif text-lg font-bold text-matte mb-3">
                  Signature Varieties
                </h3>
                <ul className="space-y-2">
                  {category.varieties?.map((v) => (
                    <li key={v} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="atelier-card p-6 rounded-sm">
                <h3 className="font-serif text-lg font-bold text-matte mb-3">
                  Curated Materials
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed font-light">
                  {category.materials?.join(" · ")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Features & Benefits */}
      <section className="py-16 sm:py-24 bg-beige">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
          <Reveal>
            <p className="overline">
              <span className="hairline" /> Features
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              Why our {category.name.toLowerCase()}{" "}
              <span className="font-serif-italic text-walnut">stand apart.</span>
            </h2>
            <ul className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
              {category.features?.map((feat, idx) => (
                <li key={feat} className="flex gap-4 sm:gap-5 border-b border-linen/60 pb-4 sm:pb-5">
                  <span className="mag-number text-xs shrink-0">— 0{idx + 1}</span>
                  <span className="text-sm sm:text-base text-charcoal font-light">{feat}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={150}>
            <p className="overline">
              <span className="hairline" /> Benefits
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              What they bring
              <br />
              <span className="font-serif-italic text-walnut">to your home.</span>
            </h2>
            <ul className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
              {category.benefits?.map((ben, idx) => (
                <li key={ben} className="flex gap-4 sm:gap-5 border-b border-linen/60 pb-4 sm:pb-5">
                  <span className="mag-number text-xs shrink-0">— 0{idx + 1}</span>
                  <span className="text-sm sm:text-base text-charcoal font-light">{ben}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. Real Installations Photo Grid */}
      <section className="py-16 sm:py-24 md:py-32 bg-ivory">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal className="mb-8 sm:mb-12 max-w-2xl">
            <p className="overline">
              <span className="hairline" /> Real Installations & Work
            </p>
            <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
              {category.name}{" "}
              <span className="font-serif-italic text-walnut">in real spaces.</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2">
              {galleryItems.length} real photographs from our collections. Tap any image to expand.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((img, idx) => {
              const caption = getCaption(category, img, idx);
              const fileName = getFileName(img);

              return (
                <Reveal key={img + idx} delay={(idx % 4) * 60}>
                  <div className="group bg-white rounded-sm overflow-hidden border border-linen/70 shadow-soft hover:shadow-hover transition-all flex flex-col h-full">
                    <button
                      type="button"
                      onClick={() => setActiveModalImg(img)}
                      className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] w-full overflow-hidden bg-linen/20 block text-left focus:outline-none"
                      aria-label={`View ${caption}`}
                    >
                      <LuxImg
                        name={img}
                        alt={caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading={idx < 4 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5 text-ivory">
                        <span className="text-[0.7rem] tracking-wider font-light line-clamp-1">
                          Click to view full photo
                        </span>
                        <span className="p-1.5 rounded-full bg-ivory/20 backdrop-blur-sm text-ivory shrink-0 ml-2">
                          <ZoomIn size={14} />
                        </span>
                      </div>
                    </button>

                    <div className="p-3.5 flex flex-col justify-between flex-1 gap-2.5 bg-white">
                      <div>
                        <p
                          className="font-serif text-sm sm:text-base text-matte font-normal line-clamp-2"
                          title={caption}
                        >
                          {caption}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          <span className="font-mono text-[0.68rem] bg-linen/60 text-charcoal/80 px-2 py-0.5 rounded-xs border border-linen/70">
                            {fileName}
                          </span>
                          <span className="text-[0.65rem] uppercase tracking-wider text-charcoal/50">
                            {category.name}
                          </span>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-linen/50 flex items-center justify-between text-xs">
                        <button
                          type="button"
                          onClick={() => setActiveModalImg(img)}
                          className="text-charcoal hover:text-champagne flex items-center gap-1 font-light transition-colors"
                        >
                          <ZoomIn size={13} /> Zoom
                        </button>
                        <a
                          href={getWhatsAppUrl(
                            `Hi BK Decomart, I would like to inquire about "${caption}" (Image: ${fileName}) from your ${category.name} collection.`
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="text-champagne hover:text-walnut font-medium flex items-center gap-1 transition-colors"
                        >
                          Inquire <ArrowRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Lightbox Modal */}
      {activeModalImg && (
        <div
          className="fixed inset-0 z-50 bg-matte/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveModalImg(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveModalImg(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 text-ivory/80 hover:text-ivory bg-matte/60 p-2.5 rounded-full border border-ivory/20 transition z-10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] relative rounded-sm overflow-hidden shadow-2xl flex flex-col items-center bg-matte/90 border border-ivory/15 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <LuxImg
              name={activeModalImg}
              alt={modalCaption}
              className="max-h-[68vh] max-w-full object-contain mx-auto rounded-xs"
            />
            <div className="mt-4 text-center flex flex-col items-center gap-2">
              <h4 className="font-serif text-lg sm:text-xl text-ivory tracking-wide">
                {modalCaption}
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
                <span className="font-mono text-champagne bg-ivory/10 px-2.5 py-0.5 rounded border border-champagne/30">
                  {modalFileName}
                </span>
                <span className="text-ivory/50">·</span>
                <span className="text-ivory/80 uppercase tracking-widest text-[0.7rem]">
                  {category.name} Collection
                </span>
              </div>
              <a
                href={getWhatsAppUrl(
                  `Hi BK Decomart, I am interested in "${modalCaption}" (Image: ${modalFileName}) from your ${category.name} collection. Please share pricing and options.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary !py-2.5 !px-6 text-xs sm:text-sm mt-2 inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 6. Related Collections */}
      <section className="py-16 sm:py-24 md:py-32 bg-beige">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
          <Reveal className="flex items-end justify-between mb-8 sm:mb-12">
            <div>
              <p className="overline">
                <span className="hairline" /> Related
              </p>
              <h2 className="section-title mt-3 sm:mt-4 text-2xl sm:text-4xl">
                You may also love
              </h2>
            </div>
            <Link to="/products" className="btn-outline shrink-0 text-xs sm:text-sm">
              All Collections <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {related.map((rel, idx) => (
              <Reveal key={rel.slug} delay={idx * 80}>
                <Link
                  to={`/products/${rel.slug}`}
                  className="block group"
                  data-testid={`related-${rel.slug}`}
                >
                  <div className="hover-zoom aspect-[4/5] rounded-sm overflow-hidden bg-linen/30 shadow-soft">
                    <LuxImg name={rel.img} alt={rel.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 sm:mt-5">
                    <h3 className="font-serif text-xl sm:text-2xl">{rel.name}</h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 mt-1">{rel.subtitle}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
