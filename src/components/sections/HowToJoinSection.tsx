"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import { Info } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Four-step WhatsApp sequence on a vertical path that draws itself as you scroll. No forms, no portal. */
export function HowToJoinSection() {
  const { howToJoin } = landingPageData;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const fixed = useMotionValue(1);

  return (
    <section id="how-to-join" className="bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <SectionLabel>{howToJoin.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={howToJoin.headline}
              className="font-heading text-[2.4rem] font-medium leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[{ text: "Four Simple" }, { text: "Steps on" }, { text: "WhatsApp", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-charcoal-light sm:text-lg">{howToJoin.subtitle}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <WhatsAppButton messageKey="howToJoinCta" variant="navy">
                {howToJoin.ctaText}
              </WhatsAppButton>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div aria-hidden="true" className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-navy/15">
                <motion.div className="h-full origin-top bg-gold" style={{ scaleY: reduce ? fixed : smooth }} />
              </div>
              <ol ref={ref} className="space-y-12">
                {howToJoin.steps.map((s) => (
                  <li key={s.step} className="relative pl-16 sm:pl-20">
                    <span className="absolute left-0 top-0 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-gold bg-white font-heading text-xs font-semibold text-navy">
                      {s.step}
                    </span>
                    <Reveal>
                      <h3 className="font-heading text-xl font-medium tracking-tight text-navy sm:text-2xl">{s.title}</h3>
                      <p className="mt-2 max-w-lg text-base leading-relaxed text-charcoal-light">{s.description}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            <Reveal className="mt-14 flex items-start gap-3 border-t border-navy/15 pt-6 text-sm leading-relaxed text-charcoal-light">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600" strokeWidth={1.75} aria-hidden="true" />
              <span>{howToJoin.clarificationNote}</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
