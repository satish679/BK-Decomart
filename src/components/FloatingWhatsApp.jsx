import React from "react";
import { getWhatsAppUrl } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp({ message }) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      data-testid="floating-whatsapp"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-champagne/30 blur-xl scale-110 sm:scale-125 group-hover:scale-150 transition-all duration-500" />
      <span className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-matte text-champagne border border-champagne/60 flex items-center justify-center shadow-deep group-hover:bg-champagne group-hover:text-matte transition-colors duration-500">
        <MessageCircle size={20} strokeWidth={1.8} className="sm:scale-110" />
      </span>
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap text-[0.7rem] uppercase tracking-[0.24em] text-matte bg-ivory px-3 py-2 rounded-sm shadow-soft border border-linen opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </a>
  );
}
