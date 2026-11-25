import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { landingPageData } from "@/data/landing-page-data";

/**
 * Footer. Only verified identity is shown: BMB logo/entity, programme duration, anchors and the contact actions.
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
                <Image src={siteConfig.brand.logoBadge} alt="BMB Strategy and Advisory Limited" fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold">{footer.programmeName}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{footer.advisoryEntity}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              A practical 12-week goal execution programme for business owners and career professionals.
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
              Ready to join, or just have a question? Choose the route that fits.
            </p>
            <div className="flex flex-col items-start gap-3">
              <CtaButton kind="signUp" tone="dark" />
              <CtaButton kind="chat" tone="dark" />
            </div>
          </div>
        </div>

        <p className="pt-8 text-xs text-white/45">{footer.copyright}</p>
      </div>
    </footer>
  );
}
