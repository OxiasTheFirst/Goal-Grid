import Image from "next/image";
import { Calendar, ShieldCheck, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Host. Placeholder status is retained on purpose: no portrait, biography, credentials or quotes
 * have been supplied, so none are invented. Only the programme role and confirmed duties appear.
 */
const dutyIcons = [Calendar, Users, ShieldCheck];

export function HostSection() {
  const { host } = landingPageData;

  return (
    <section id="host" className="bg-surface-light">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Portrait placeholder frame */}
          <Reveal className="lg:col-span-5">
            <div className="grain relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-navy">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: "radial-gradient(#C9A45C 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <div aria-hidden="true" className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gold/20 blur-[90px]" />
              {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((c) => (
                <span key={c} aria-hidden="true" className={`absolute h-5 w-5 border-gold/70 ${c}`} />
              ))}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                <Image
                  src={siteConfig.brand.logoNavy}
                  alt="BMB Strategy & Advisory"
                  width={140}
                  height={50}
                  className="h-12 w-auto opacity-80 brightness-0 invert"
                />
                <p className="font-body font-medium text-[11px] uppercase tracking-[0.16em] text-gold/80">
                  Official portrait to be supplied
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8">
            <SectionLabel>{host.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={host.headline}
              className="font-heading text-[2.4rem] font-medium leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[{ text: "Programme Leadership" }, { text: "& Host Advisory", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1}>
              <div className="border-l-2 border-gold pl-5">
                <p className="font-heading text-2xl font-semibold text-navy">{host.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-muted">
                  {host.role} · {host.organization}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-base leading-relaxed text-charcoal-light sm:text-lg">{host.biography}</p>
            </Reveal>
            <ul>
              {host.duties.map((d, i) => {
                const Icon = dutyIcons[i] ?? ShieldCheck;
                return (
                  <li key={d}>
                    <Reveal className="flex items-start gap-4 border-t border-navy/15 py-4">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-base leading-snug text-charcoal">{d}</span>
                    </Reveal>
                  </li>
                );
              })}
              <li className="border-t border-navy/15" aria-hidden="true" />
            </ul>
            <p className="text-xs italic leading-relaxed text-charcoal-muted">{host.credentialsConfirmationNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
