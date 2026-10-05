import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, getPhoneUrl, getWhatsAppUrl } from "@/lib/site";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    try {
      localStorage.removeItem("bk-theme");
    } catch {}
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "nav-glass py-2 sm:py-2.5 shadow-soft"
          : "bg-transparent py-3 sm:py-4 border-transparent shadow-none"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 bg-transparent p-0 border-0 shadow-none hover:opacity-90 transition-opacity"
          data-testid="nav-logo"
        >
          <img
            src={site.logoUrl}
            alt={site.name}
            onError={(e) => {
              if (!e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = "true";
                e.currentTarget.src = "/logo.png";
              }
            }}
            className={`transition-all duration-300 ${
              scrolled ? "h-14 sm:h-18 md:h-24" : "h-20 sm:h-28 md:h-32"
            } w-auto object-contain bg-transparent`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/ /g, "-")}`}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                  isActive ? "text-champagne font-semibold" : "text-matte hover:text-champagne"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getPhoneUrl()}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-matte hover:text-champagne font-medium transition-colors"
          >
            <Phone size={15} strokeWidth={1.5} className="text-champagne" />
            <span>{site.phone}</span>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !py-2.5 !px-5 text-xs"
            data-testid="nav-whatsapp-cta"
          >
            <MessageCircle size={15} />
            <span>Consultation</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-matte hover:text-champagne"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 text-matte hover:text-champagne focus:outline-none"
            aria-label="Toggle navigation menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bg-ivory border-b border-linen shadow-deep p-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-base uppercase tracking-[0.16em] py-2 border-b border-linen/50 transition-colors ${
                  isActive ? "text-champagne font-semibold" : "text-matte"
                }`
              }
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="pt-4 border-t border-linen flex flex-col gap-3">
            <a
              href={getPhoneUrl()}
              className="flex items-center gap-2 text-sm text-matte"
            >
              <Phone size={16} /> {site.phone}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-center justify-center !py-2.5"
            >
              <MessageCircle size={16} /> WhatsApp Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
