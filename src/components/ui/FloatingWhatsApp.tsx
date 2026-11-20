"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl("floatingBubble");

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with the Goal Grid team on WhatsApp"
        className="flex items-center gap-2.5 bg-navy text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl border border-gold/30 hover:border-gold hover:bg-navy-700 transition-all transform hover:-translate-y-1 active:translate-y-0"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
        <span className="font-heading font-semibold text-xs sm:text-sm tracking-wide">
          Chat with us
        </span>
      </Link>
    </aside>
  );
}
