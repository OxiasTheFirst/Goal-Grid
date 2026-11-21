import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { ArrowRight } from "lucide-react";

/** Slim programme strip. Rendered inside <Header /> so the two stay stacked over the hero. */
export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-navy text-white text-[11px] sm:text-xs">
      <div className="mx-auto flex h-9 max-w-container items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2.5 truncate">
          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" aria-hidden="true" />
          <span className="font-semibold uppercase tracking-[0.16em] text-gold">Waitlist opens December 2026</span>
          <span className="hidden md:inline text-white/40">/</span>
          <span className="hidden md:inline text-white/70">Programme runs January–March 2027</span>
        </p>
        <Link
          href={getWhatsAppUrl("announcement")}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-shrink-0 items-center gap-1.5 font-medium text-gold transition-colors hover:text-white"
        >
          <span>Get updates</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
