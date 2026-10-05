import React from "react";
import { Link } from "react-router-dom";
import { site, getPhoneUrl, getEmailUrl, assetUrl } from "@/lib/site";
import { products } from "@/lib/products";
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="relative bg-matte text-ivory pt-16 sm:pt-20 pb-10 text-sm sm:text-base"
      data-testid="site-footer"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-12">
          {/* Brand info */}
          <div className="sm:col-span-2 md:col-span-4">
            <div className="bg-ivory inline-block p-3 sm:p-4 rounded-sm">
              <img
                src={site.logoUrl}
                alt={site.name}
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = "true";
                    e.currentTarget.src = assetUrl("logo.png");
                  }
                }}
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-ivory/80 font-light leading-relaxed max-w-sm">
              Since {site.since}, BK Decomart has been dressing homes across Madurai with the finest curtains, blinds, designer wallpapers, rugs and mattresses. Every stitch and finish is chosen and installed with the care of a family business.
            </p>
            <div className="flex gap-3.5 sm:gap-4 mt-5 sm:mt-6">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 border border-ivory/25 flex items-center justify-center hover:border-champagne hover:text-champagne transition rounded-xs"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 border border-ivory/25 flex items-center justify-center hover:border-champagne hover:text-champagne transition rounded-xs"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2">
            <p className="overline mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-[0.2em] text-ivory/90">
              Explore
            </p>
            <ul className="space-y-3 sm:space-y-3.5 text-sm sm:text-base text-ivory/80 font-light">
              <li>
                <Link to="/" className="hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-champagne transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-champagne transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-champagne transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-champagne transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections Links */}
          <div className="md:col-span-3">
            <p className="overline mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-[0.2em] text-ivory/90">
              Collections
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 sm:gap-y-3.5 text-sm sm:text-base text-ivory/80 font-light">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${p.slug}`} className="hover:text-champagne transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showrooms */}
          <div className="md:col-span-3">
            <p className="overline mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-[0.2em] text-ivory/90">
              Our Showrooms
            </p>
            <div className="space-y-4 text-sm text-ivory/80 font-light">
              <div>
                <a
                  href="https://maps.app.goo.gl/kC2BdLfyC2myZ7aC9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2.5 hover:text-champagne transition group"
                  data-testid="footer-address-1"
                >
                  <MapPin size={16} className="mt-0.5 text-champagne shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span>
                    <strong className="text-ivory block font-normal">BK Deco Mart (Main)</strong>
                    12, Sivagangai Main Rd, Gomathipuram, Madurai
                  </span>
                </a>
              </div>

              <div>
                <a
                  href="https://maps.app.goo.gl/ErbEv1MKdKcETcUn9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2.5 hover:text-champagne transition group"
                  data-testid="footer-address-2"
                >
                  <MapPin size={16} className="mt-0.5 text-champagne shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <span>
                    <strong className="text-ivory block font-normal">BK Decors</strong>
                    Arisekara Street, Jaihindpuram, Madurai
                  </span>
                </a>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={getPhoneUrl()}
                  className="flex items-center gap-2 hover:text-champagne transition"
                  data-testid="footer-call"
                >
                  <Phone size={15} className="text-champagne shrink-0" strokeWidth={1.5} />
                  <span>{site.phone}</span>
                </a>
                <a
                  href={getEmailUrl()}
                  className="flex items-center gap-2 hover:text-champagne break-all transition text-xs"
                  data-testid="footer-email"
                >
                  <Mail size={15} className="text-champagne shrink-0" strokeWidth={1.5} />
                  <span>{site.email}</span>
                </a>
              </div>

              <p className="text-xs uppercase tracking-[0.16em] pt-1 text-ivory/60 font-mono">
                {site.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-ivory/15 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-ivory/70 font-light">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved. Est. {site.since}.
          </p>
          <div className="flex flex-wrap gap-5 sm:gap-7">
            <Link to="/privacy" className="hover:text-champagne transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-champagne transition-colors">
              Terms & Conditions
            </Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-1.5 hover:text-champagne transition-colors"
              data-testid="footer-back-to-top"
            >
              Back to top <ArrowUp size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
