import { Check } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * Investment. The fee is the typographic hero of the section.
 * Two payment options are shown as stated by the client (₦50,000 standard, ₦60,000 instalment option).
 * No instalment schedule or extra conditions are invented, and there is no urgency or scarcity messaging.
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
              className="font-heading font-semibold tracking-[-0.03em] text-white"
              lines={[
                { text: pricing.fee, className: "text-[clamp(3.5rem,16vw,5.5rem)] leading-[0.95] font-semibold text-gold sm:text-[clamp(5rem,14vw,8rem)] lg:text-[clamp(5rem,8.6vw,8.5rem)]" },
                { text: "for 12 weeks of structure,", className: "mt-3 text-2xl leading-tight tracking-[-0.02em] sm:text-4xl" },
                { text: "support and accountability", className: "text-2xl leading-tight tracking-[-0.02em] sm:text-4xl" },
              ]}
            />
            <Reveal delay={0.1}>
              <p className="mb-3 font-body text-xs font-medium uppercase tracking-[0.16em] text-white/60">
                Payment options · {pricing.feePeriod}
              </p>
              <dl className="grid max-w-xl grid-cols-1 border-y border-white/20 sm:grid-cols-2 sm:divide-x sm:divide-white/20">
                {pricing.options.map((o, i) => (
                  <div key={o.label} className={`py-5 sm:py-6 ${i === 1 ? "border-t border-white/20 sm:border-t-0 sm:pl-8" : "sm:pr-8"}`}>
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">{o.label}</dt>
                    <dd className="mt-2 font-heading text-4xl font-semibold tabular-nums tracking-tight text-white sm:text-[2.6rem]">{o.amount}</dd>
                    <dd className="mt-2 text-sm leading-snug text-white/65">{o.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-2 font-body font-medium text-[11px] uppercase tracking-[0.16em] text-gold">Included</p>
              <ul>
                {pricing.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-4 border-t border-white/15 py-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" strokeWidth={2} aria-hidden="true" />
                    <span className="text-base leading-snug text-white/85">{d}</span>
                  </li>
                ))}
                <li className="border-t border-white/15" aria-hidden="true" />
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center gap-3">
              <CtaButton kind="signUp" tone="dark" size="lg" />
              <CtaButton kind="enquiry" tone="dark" size="lg" />
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-20 max-w-3xl border-l-2 border-gold pl-6">
          <p className="font-heading text-lg font-medium leading-relaxed text-white/80 sm:text-xl">{pricing.persuasion}</p>
        </Reveal>
      </div>
    </section>
  );
}
