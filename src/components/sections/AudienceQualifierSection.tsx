import { Check, X } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Qualification as two typographic lists, not two cards. */
export function AudienceQualifierSection() {
  const { qualifier } = landingPageData;

  return (
    <section id="audience" className="bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-8">
            <SectionLabel>{qualifier.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={qualifier.headline}
              className="font-heading text-[2.4rem] font-bold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[
                { text: "Built for" },
                { text: "Business Owners" },
                { text: "Ready to Act,", },
                { text: "Not Just Plan", className: "text-gold-600" },
              ]}
            />
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-charcoal-light sm:text-lg">{qualifier.subtitle}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-14">
            <div>
              <Reveal>
                <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold-700">
                  Goal Grid is for you if you are
                </h3>
              </Reveal>
              <ul>
                {qualifier.criteriaForYou.map((c) => (
                  <li key={c}>
                    <Reveal className="flex items-start gap-4 border-t border-navy/15 py-5">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-gold-600" strokeWidth={2} aria-hidden="true" />
                      <span className="font-heading text-lg font-medium leading-snug text-navy sm:text-xl">{c}</span>
                    </Reveal>
                  </li>
                ))}
                <li className="border-t border-navy/15" aria-hidden="true" />
              </ul>
            </div>

            <div>
              <Reveal>
                <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal-muted">
                  This may not be for you if you are
                </h3>
              </Reveal>
              <ul>
                {qualifier.criteriaNotForYou.map((c) => (
                  <li key={c}>
                    <Reveal className="flex items-start gap-4 border-t border-navy/10 py-4">
                      <X className="mt-1 h-5 w-5 flex-shrink-0 text-charcoal-muted" strokeWidth={1.75} aria-hidden="true" />
                      <span className="text-base leading-snug text-charcoal-light">{c}</span>
                    </Reveal>
                  </li>
                ))}
                <li className="border-t border-navy/10" aria-hidden="true" />
              </ul>
              <p className="mt-5 text-xs italic leading-relaxed text-charcoal-muted">
                Goal Grid asks for daily action and your presence at scheduled sessions. If you can commit that time, it
                will repay it.
              </p>
            </div>

            <Reveal>
              <WhatsAppButton messageKey="qualifierCta" variant="navy">
                {qualifier.ctaText}
              </WhatsAppButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
