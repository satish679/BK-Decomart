import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ScrollProgress from "./ScrollProgress";

const pageMeta = {
  "/": {
    title: "BK Decomart – Curtains, Blinds & Home Décor | Madurai",
    desc: "Come, Let's Dressup Your Home. Premium bespoke curtains, window blinds, designer wallpapers, rugs & mattresses in Madurai since 1995.",
  },
  "/about": {
    title: "About Us – Three Decades of Dressing Homes in Madurai | BK Decomart",
    desc: "Established in 1995 on Sivagangai Main Road, Gomathipuram. Two generations dedicated to hand-tailored home dressing across Madurai.",
  },
  "/products": {
    title: "All Collections – Curtains, Blinds, Wallpapers, Carpets & Mattresses | BK Decomart",
    desc: "Explore BK Decomart's complete catalogue of custom curtains, architectural window blinds, luxury wallpapers, carpets, mattresses & plants.",
  },
  "/products/curtains": {
    title: "Custom Curtains & Tailored Drapery in Madurai | BK Decomart",
    desc: "Royal sheer, velvet blackout, pleated, and Belgian linen custom curtains stitched to the millimetre with at-home measurement in Madurai.",
  },
  "/products/blinds": {
    title: "Architectural Window Blinds in Madurai | BK Decomart",
    desc: "Motorised roller blinds, roman blinds, wooden Venetian and zebra blinds crafted for modern residences and offices in Madurai.",
  },
  "/products/wallpapers": {
    title: "Designer Wallpapers & Feature Murals in Madurai | BK Decomart",
    desc: "Vastu running horses, Radha Krishna devotional murals, vintage botanicals, and metallic textured wallpapers installed with precision.",
  },
  "/products/carpets": {
    title: "Luxury Area Rugs, Carpets & Hallway Runners in Madurai | BK Decomart",
    desc: "Hand-tufted Persian motifs, acoustic plush wool carpets, and contemporary geometric rugs for formal living rooms and bedrooms.",
  },
  "/products/mattresses": {
    title: "Orthopaedic Beds & Spring Mattresses in Madurai | BK Decomart",
    desc: "7-zone pocket spring, natural latex, and breathable memory foam mattresses designed for deep restorative sleep.",
  },
  "/products/artificial-plants": {
    title: "Botanical Indoor Artificial Plants & Planters in Madurai | BK Decomart",
    desc: "Real-touch fiddle leaf figs, monstera trees, areca palms and decorative ceramic planters for luxury Madurai interiors.",
  },
  "/gallery": {
    title: "Gallery – Real Transformations & Showrooms | BK Decomart Madurai",
    desc: "Browse photographs of luxury drapery, wallpaper feature walls, and custom interior installations across Madurai.",
  },
  "/contact": {
    title: "Contact & Showrooms in Gomathipuram & Jaihindpuram | BK Decomart",
    desc: "Visit our flagship showroom on Sivagangai Main Road, Gomathipuram, or our studio in Jaihindpuram. Book a free home consultation.",
  },
  "/faq": {
    title: "FAQ – Measurements, Stitching & Delivery | BK Decomart Madurai",
    desc: "Answers to common questions about at-home measurements, customization turnaround, installation, and care guidelines.",
  },
  "/privacy": {
    title: "Privacy Policy | BK Decomart Madurai",
    desc: "How BK Decomart collects, uses and protects customer enquiry information.",
  },
  "/terms": {
    title: "Terms & Conditions | BK Decomart Madurai",
    desc: "Terms of service, quotation validity, measurement verification, and installation policies at BK Decomart.",
  },
};

export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = pageMeta[pathname] || {
      title: "BK Decomart – Curtains, Blinds & Home Décor | Madurai",
      desc: "Come, Let's Dressup Your Home. Premium curtains, blinds, wallpapers, carpets & mattresses in Madurai since 1995.",
    };

    document.title = meta.title;

    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", meta.desc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.desc);
  }, [pathname]);

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main data-testid="site-main">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
