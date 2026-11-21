import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";

/**
 * Footer. Only verified identity is shown: BMB logo/entity, programme dates, anchors, WhatsApp.
 * The Instagram handle and email that previously appeared here are NOT in the client brief
 * (which lists them as placeholders), so they have been removed until supplied.
 */
export function Footer() {
  const { footer } = landingPageData;
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-10">
        <div className="grid gap-14 md:grid-cols-12 border-b border-white/10 pb-14">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-gold/30">
                <Image src={siteConfig.brand.logoBadge} alt="BMB Strategy & Advisory" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold">{footer.programmeName}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{footer.advisoryEntity}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              A practical 3-month goal execution programme for business owners, running {footer.duration}.
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="mb-5 font-body font-medium text-[11px] uppercase tracking-[0.18em] text-gold">Navigate</p>
            <ul className="space-y-3">
              {footer.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1 text-sm text-white/75 transition-colors hover:text-white">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="mb-5 font-body font-medium text-[11px] uppercase tracking-[0.18em] text-gold">Contact</p>
            <p className="mb-4 text-sm leading-relaxed text-white/65">
              Questions about the programme or enrolment? Message the advisory team directly.
            </p>
            <Link
              href={getWhatsAppUrl("footerLink")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        <p className="pt-8 text-xs text-white/45">{footer.copyright}</p>
      </div>
    </footer>
  );
}
