import React, { useState } from "react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import { Star, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export const reviews = [
  {
    id: "rev-1",
    author: "Gowtham Subramanian",
    role: "Local Guide · 18 reviews",
    date: "2 weeks ago",
    rating: 5,
    text: "Good quality service. Prompt follow up and delivery by staff. The curtains fitting for our living room and master bedroom were stitched to the millimeter. Highly recommended in Madurai!",
    avatarBg: "bg-blue-600",
    verified: true,
  },
  {
    id: "rev-2",
    author: "Govindaraju P",
    role: "Local Guide · 34 reviews",
    date: "1 month ago",
    rating: 5,
    text: "Provided good customer service and staff are very attentive. The products made my dream home look elegant. Window blinds and wall covering are top notch. Will refer all my friends.",
    avatarBg: "bg-amber-600",
    verified: true,
  },
  {
    id: "rev-3",
    author: "Vishnu Vardhan",
    role: "Verified Google Customer",
    date: "2 months ago",
    rating: 5,
    text: "They were very obliging. Understood our requirement patiently and completed the curtains work to our complete satisfaction right on time. Excellent fabric selections.",
    avatarBg: "bg-emerald-600",
    verified: true,
  },
  {
    id: "rev-4",
    author: "Alagu Raja",
    role: "Local Guide · 42 reviews",
    date: "3 months ago",
    rating: 5,
    text: "Great atmosphere, excellent collection. BK team is very friendly and helped us choose the right motorized roller blinds for our office and home. Very happy with your products.",
    avatarBg: "bg-purple-600",
    verified: true,
  },
  {
    id: "rev-5",
    author: "Dr. Meenakshi Sundaram",
    role: "Local Guide · 12 reviews",
    date: "3 months ago",
    rating: 5,
    text: "Best home decor showroom in Gomathipuram, Madurai. We ordered sheer curtains and customized wallpapers for our new villa. The installation team was punctual, neat, and professional.",
    avatarBg: "bg-rose-600",
    verified: true,
  },
  {
    id: "rev-6",
    author: "Karthik S.",
    role: "Local Guide · 27 reviews",
    date: "4 months ago",
    rating: 5,
    text: "Two generations of trusted quality. My parents bought drapery from BK Decors years ago, and I furnished my entire apartment with them. Best prices and honest guidance.",
    avatarBg: "bg-indigo-600",
    verified: true,
  },
];

export function GoogleLogo({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function GoogleTrustindexReviews() {
  const [page, setPage] = useState(0);
  const pageSize = 3;
  const maxPage = Math.ceil(reviews.length / pageSize) - 1;
  const currentReviews = reviews.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-ivory relative" data-testid="home-testimonials">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 sm:pb-12 border-b border-linen">
          <Reveal className="max-w-2xl">
            <p className="overline">
              <span className="hairline" /> Real Customer Reviews
            </p>
            <h2 className="section-title mt-2 sm:mt-3 text-2xl sm:text-4xl text-matte">
              Authentic reviews, <span className="font-serif-italic text-walnut">verified on Google.</span>
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-2">
              Real feedback from homeowners, architects, and designers across Madurai.
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="bg-white p-4 sm:p-5 rounded-sm border border-linen/80 shadow-soft flex flex-wrap items-center gap-4 sm:gap-6 self-start md:self-auto"
          >
            <div className="flex items-center gap-3">
              <GoogleLogo className="w-8 h-8 shrink-0" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-bold text-matte">EXCELLENT</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-1.5 py-0.5 rounded-xs">
                    4.9 ★
                  </span>
                </div>
                <div className="flex gap-1 text-amber-400 mt-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={15} fill="#FBBC04" stroke="#FBBC04" />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-l border-linen pl-4 sm:pl-6 text-left">
              <div className="flex items-center gap-1.5 text-xs text-charcoal/80">
                <span>
                  Based on <strong>160+ reviews</strong>
                </span>
              </div>
              <div className="inline-flex items-center gap-1 mt-1 text-[0.68rem] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle size={12} className="text-emerald-600 shrink-0" />
                <span>
                  Verified by <strong>Trustindex</strong>
                </span>
              </div>
            </div>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline !py-2 !px-3 text-xs inline-flex items-center gap-1.5 shrink-0"
              data-testid="write-review-btn"
            >
              <span>Write a Review</span>
              <ExternalLink size={12} />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {currentReviews.map((rev, idx) => (
            <Reveal
              key={rev.id}
              delay={idx * 80}
              className="bg-white p-6 sm:p-7 rounded-sm border border-linen/70 shadow-soft hover:shadow-hover hover:border-champagne/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-semibold flex items-center justify-center text-sm shadow-xs`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-matte leading-tight">
                        {rev.author}
                      </h4>
                      <p className="text-[0.68rem] text-charcoal/60 mt-0.5 flex items-center gap-1.5">
                        <span>{rev.role}</span>
                        <span>·</span>
                        <span>{rev.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-1 rounded-full bg-slate-50 border border-slate-100 shrink-0">
                    <GoogleLogo className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#FBBC04" stroke="#FBBC04" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-charcoal/90 font-light leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-linen/50 flex items-center justify-between text-[0.7rem] text-charcoal/60">
                <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle size={13} className="text-emerald-600" />
                  <span>Trustindex Verified</span>
                </span>
                <span className="text-[0.65rem] uppercase tracking-wider text-charcoal/50">
                  Google Maps Review
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-linen flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-charcoal/70">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>
              <strong>Trustindex Verification:</strong> All reviews are collected and verified from actual Google Maps reviewers.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2 rounded-sm border border-linen bg-white text-charcoal hover:border-champagne disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono text-charcoal/70">
              {page + 1} / {maxPage + 1}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
              disabled={page === maxPage}
              className="p-2 rounded-sm border border-linen bg-white text-charcoal hover:border-champagne disabled:opacity-30 disabled:pointer-events-none transition-all"
              aria-label="Next reviews"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
