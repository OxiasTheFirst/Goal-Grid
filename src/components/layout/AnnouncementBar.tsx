"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  const whatsappUrl = getWhatsAppUrl("announcement");

  return (
    <div className="bg-navy border-b border-navy-700 text-white text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-container mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="font-heading font-semibold tracking-wider uppercase text-gold">
            Waitlist Opens December 2026
          </span>
          <span className="hidden md:inline text-white/50">|</span>
          <span className="hidden md:inline text-white/80">
            Programme Runs January–March 2027
          </span>
        </div>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 font-medium text-gold hover:text-white transition-colors group"
        >
          <span>Get updates</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
