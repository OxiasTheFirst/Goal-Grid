"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EASE_SOFT } from "@/lib/motion";

/** Each outcome comes to full contrast as it crosses the middle band of the viewport. */
function OutcomeRow({ item }: { item: (typeof landingPageData.outcomes.items)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const focused = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const lit = reduce || focused;

  return (
    <motion.li
      ref={ref}
      animate={{ opacity: lit ? 1 : 0.5 }}
      transition={{ duration: 0.6, ease: EASE_SOFT }}
      className="grid gap-x-8 gap-y-4 border-t border-white/15 py-9 lg:grid-cols-[7rem_1fr_24rem] lg:items-baseline lg:py-12"
    >
      <span className="font-mono text-sm text-gold">{item.number}</span>
      <h3 className="font-heading text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.6rem]">
        {item.title}
      </h3>
      <p className="max-w-md text-[15px] leading-relaxed text-white/65 lg:text-base">{item.description}</p>
    </motion.li>
  );
}

export function OutcomesSection() {
  const { outcomes } = landingPageData;

  return (
    <section id="outcomes" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[20%] top-0 h-[40rem] w-[60rem] rounded-full bg-gold/10 blur-[160px]"
      />
      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="mb-16 max-w-5xl space-y-8 lg:mb-24">
          <SectionLabel tone="dark">{outcomes.badge}</SectionLabel>
          <MaskedTextReveal
            as="h2"
            label={outcomes.headline}
            className="font-heading text-[1.85rem] font-bold leading-[1.08] tracking-[-0.035em] text-white min-[400px]:text-[2.1rem] sm:text-5xl lg:text-7xl"
            lines={[
              { text: "By March, Your Goal" },
              { text: "Stops Being a Wish" },
              { text: "and Becomes a Record", className: "text-gold" },
              { text: "of Work Done" },
            ]}
          />
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-white/65 sm:text-lg">{outcomes.subtitle}</p>
          </Reveal>
        </div>

        <ol>
          {outcomes.items.map((item) => (
            <OutcomeRow key={item.number} item={item} />
          ))}
          <li className="border-t border-white/15" aria-hidden="true" />
        </ol>

        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-relaxed text-white/50">
            These are the programme’s intended outcomes. They describe the structure and habits Goal Grid is built to
            develop, not guaranteed business results.
          </p>
          <WhatsAppButton messageKey="outcomesCta" variant="gold">
            {outcomes.ctaText}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
