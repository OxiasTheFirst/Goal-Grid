import {
  CalendarCheck,
  LineChart,
  Presentation,
  UserCheck,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const icons: Record<string, LucideIcon> = {
  CalendarCheck,
  Users,
  LineChart,
  Video,
  Presentation,
  UserCheck,
};

/**
 * Programme inclusions ("The Programme" anchor).
 * Asymmetric: a sticky statement column on the left, an editorial ledger on the right.
 * One consistent Lucide stroke icon per item, no icon-in-circle cards.
 */
export function InclusionsSection() {
  const { inclusions } = landingPageData;

  return (
    <section id="programme" className="bg-surface-light">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <SectionLabel>{inclusions.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={inclusions.headline}
              className="font-heading text-[2.4rem] font-bold leading-[1.06] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[
                { text: "Everything" },
                { text: "Built to Keep" },
                { text: "You Moving" },
                { text: "for 3 Months", className: "text-gold-600" },
              ]}
            />
            <Reveal delay={0.15}>
              <p className="max-w-md text-base leading-relaxed text-charcoal-light sm:text-lg">{inclusions.subtitle}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <WhatsAppButton messageKey="inclusionsCta" variant="navy">
                {inclusions.ctaText}
              </WhatsAppButton>
            </Reveal>
          </div>

          <ol className="lg:col-span-7">
            {inclusions.items.map((item) => {
              const Icon = icons[item.iconName] ?? CalendarCheck;
              return (
                <li key={item.id}>
                  <Reveal className="group relative grid grid-cols-[2.75rem_1fr] gap-x-4 gap-y-1 border-t border-navy/15 py-9 sm:grid-cols-[4rem_1fr_auto] sm:py-11">
                    <span className="pt-1.5 font-mono text-xs text-gold-700">{item.number}</span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-charcoal-light">{item.description}</p>
                    </div>
                    <Icon
                      className="col-start-2 mt-4 h-8 w-8 text-gold-600 transition-transform duration-500 group-hover:-translate-y-1 sm:col-start-3 sm:row-start-1 sm:mt-0"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -top-px left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-700 ease-out group-hover:scale-x-100"
                    />
                  </Reveal>
                </li>
              );
            })}
            <li className="border-t border-navy/15" aria-hidden="true" />
          </ol>
        </div>
      </div>
    </section>
  );
}
