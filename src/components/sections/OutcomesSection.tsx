"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { OutcomesRecord } from "@/components/motion/OutcomesRecord";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";
import { Rich } from "@/components/ui/Rich";
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
      animate={{ opacity: lit ? 1 : 0.55 }}
      transition={{ duration: 0.6, ease: EASE_SOFT }}
      className="grid gap-x-8 gap-y-4 border-t border-white/15 py-9 lg:grid-cols-[7rem_1fr_24rem] lg:items-baseline lg:py-12"
    >
      <span className="font-heading font-medium tabular-nums text-sm text-gold">{item.number}</span>
      <h3 className="font-heading text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
        {item.title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-white/75 lg:text-lg"><Rich text={item.description} strongClassName="font-semibold text-white" /></p>
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
        {/* Right-side visual (lg+): original work-plan illustration fading into the navy; sits behind the headline. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-24 hidden w-[46%] max-w-[620px] lg:block lg:top-32"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to bottom, #000 72%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskImage: "linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to bottom, #000 72%, transparent 100%)",
            maskComposite: "intersect",
          }}
        >
          <Image src="/images/outcomes-work-plan-stack.webp" alt="" width={1200} height={1100} sizes="(min-width:1024px) 620px, 0px" className="h-auto w-full opacity-90" />
        </div>
        <div className="relative z-10 mb-16 max-w-5xl space-y-8 lg:mb-24">
          <SectionLabel tone="dark" emphasis>{outcomes.badge}</SectionLabel>
          <MaskedTextReveal
            as="h2"
            label={outcomes.headline}
            className="font-heading text-[1.85rem] font-bold leading-[1.06] tracking-[-0.03em] text-white min-[400px]:text-[2.1rem] sm:text-5xl lg:text-7xl"
            lines={[
              { text: "By Week 12, Your Goal" },
              { text: "Stops Being a Wish" },
              { text: "and Becomes a Record", className: "text-gold" },
              { text: "of Work Done" },
            ]}
          />
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base text-white/75 sm:text-lg lg:text-xl">{outcomes.subtitle}</p>
          </Reveal>
          {/* Mobile/tablet: short faded strip below the copy, so it never covers the text. */}
          <div
            aria-hidden="true"
            className="pointer-events-none -mx-4 h-56 overflow-hidden sm:mx-0 sm:h-72 lg:hidden"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, #000 25%, #000 75%, transparent 100%)",
            }}
          >
            <Image src="/images/outcomes-work-plan-stack.webp" alt="" width={1200} height={1100} sizes="(max-width:1023px) 520px, 0px" className="mx-auto -mt-10 h-auto w-[26rem] max-w-none sm:w-[32rem]" />
          </div>
        </div>

        <Reveal className="mb-16 lg:mb-24">
          <OutcomesRecord />
        </Reveal>

        <ol>
          {outcomes.items.map((item) => (
            <OutcomeRow key={item.number} item={item} />
          ))}
          <li className="border-t border-white/15" aria-hidden="true" />
        </ol>

        <div className="mt-12">
          <CtaButton kind="signUp" tone="dark" size="lg" />
        </div>
      </div>
    </section>
  );
}
