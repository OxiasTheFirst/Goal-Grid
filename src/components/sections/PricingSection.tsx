import { Check } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * Investment. The fee is the typographic hero of the section.
 * Instalments are stated exactly as confirmed ("available"); no schedule is invented and
 * there is no urgency or scarcity messaging.
 */
export function PricingSection() {
  const { pricing } = landingPageData;

  return (
    <section id="investment" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] -top-[10%] h-[44rem] w-[44rem] rounded-full bg-gold/10 blur-[150px]"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 lg:items-end">
          <div className="lg:col-span-7 space-y-8">
            <SectionLabel tone="dark">{pricing.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={pricing.headline}
              className="font-heading font-bold tracking-[-0.04em] text-white"
              lines={[
                { text: pricing.fee, className: "text-[clamp(3.5rem,16vw,5.5rem)] leading-[0.95] text-gold sm:text-[clamp(5rem,14vw,8rem)] lg:text-[clamp(5rem,8.6vw,8.5rem)]" },
                { text: "for 3 months of structure,", className: "mt-3 text-2xl leading-tight tracking-[-0.02em] sm:text-4xl" },
                { text: "support and accountability", className: "text-2xl leading-tight tracking-[-0.02em] sm:text-4xl" },
              ]}
            />
            <Reveal delay={0.1} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="font-mono uppercase tracking-[0.18em] text-white/60">{pricing.feePeriod}</span>
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
              <span className="font-semibold text-gold">{pricing.instalmentNote}</span>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-sm leading-relaxed text-white/60">
                Instalment dates and amounts are being finalised. Ask the team on WhatsApp for the current options.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">Included</p>
              <ul>
                {pricing.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-4 border-t border-white/15 py-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-white/85">{d}</span>
                  </li>
                ))}
                <li className="border-t border-white/15" aria-hidden="true" />
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <WhatsAppButton messageKey="pricingCta" variant="gold">
                {pricing.ctaText}
              </WhatsAppButton>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 max-w-3xl border-l-2 border-gold pl-6">
          <p className="font-heading text-lg leading-relaxed text-white/80 sm:text-xl">{pricing.persuasion}</p>
        </Reveal>
      </div>
    </section>
  );
}
