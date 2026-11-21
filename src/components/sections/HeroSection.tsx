"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { CalendarDays, CheckSquare, UserCheck, Video } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DUR, EASE_INOUT, EASE_SOFT } from "@/lib/motion";

/**
 * Cinematic hero.
 *
 * Layers (back to front):
 *  1. Photograph (hero-cinematic-bg.jpg) – eases from a slow 1.14× push-in; on scroll it
 *     drifts down and scales (parallax).
 *  2. Navy directional gradients – dark where the type sits, open where the subject stands,
 *     so the photograph stays visible.
 *  3. Warm window light – a soft gold bloom that moves against the photo for depth.
 *  4. Architectural hairlines (desktop) – restrained geometry that draws in.
 *  5. Film grain.
 *  6. Content – masked headline, copy, CTA, facts.
 *
 * Entrance order: scene → identifier → 4 masked headline lines → copy → CTA → price → facts.
 */
const factIcons = [CalendarDays, CheckSquare, Video, UserCheck];

export function HeroSection() {
  const { hero } = landingPageData;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const lightY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const fade = (delay: number, y = 18) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: DUR.base + 0.1, delay, ease: EASE_SOFT },
  });

  return (
    <section
      id="top"
      ref={ref}
      aria-label="Goal Grid introduction"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-white"
    >
      {/* 1 · Photograph */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 max-md:bottom-auto max-md:h-[72svh] max-md:[mask-image:linear-gradient(to_bottom,black_58%,transparent)]"
        style={reduce ? undefined : { y: bgY, scale: bgScale }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.14, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 1 }}
          transition={{
            scale: { duration: 3.2, ease: EASE_INOUT },
            opacity: { duration: 1.6, ease: "easeOut" },
          }}
        >
          <Image
            src="/images/hero-cinematic-bg.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[64%_top] md:object-[60%_center] lg:object-center"
          />
        </motion.div>
      </motion.div>

      {/* 2 · Navy treatment: dark under the type, open around the subject */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 via-[38%] to-navy/0 to-[78%] max-md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 via-[38%] to-navy/0 to-[72%]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-navy/80 to-transparent" />
        <div className="absolute inset-0 bg-navy/20" />
      </div>

      {/* 3 · Warm window light, counter-parallax */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-[10%] top-[8%] h-[70%] w-[55%] rounded-full bg-gold/20 blur-[130px] mix-blend-soft-light pointer-events-none"
        style={reduce ? undefined : { y: lightY }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.6 }}
      />

      {/* 4 · Architectural hairlines (desktop only) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {["22%", "50%", "78%"].map((left, i) => (
          <motion.span
            key={left}
            className="absolute top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-white/15 to-transparent"
            style={{ left }}
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 0.8 + i * 0.2, ease: EASE_INOUT }}
          />
        ))}
      </div>

      {/* 6 · Content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-container flex-1 flex-col justify-end px-4 sm:px-6 lg:px-8 pt-36 pb-10 lg:pt-32 lg:pb-12"
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-[46rem]">
          <motion.p
            {...fade(0.7, 10)}
            className="mb-6 flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold"
          >
            <span className="h-px w-8 flex-shrink-0 bg-gold" aria-hidden="true" />
            <span>{hero.badge}</span>
          </motion.p>

          <MaskedTextReveal
            as="h1"
            trigger="mount"
            baseDelay={0.95}
            stagger={0.15}
            label={hero.headline}
            className="font-heading text-[2.9rem] font-bold text-white leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] 2xl:text-[6.5rem]"
            lines={[
              { text: "Don’t Just" },
              { text: "Set the Goal." },
              { text: "Build the Path", className: "text-gold" },
              { text: "to Achieve It." },
            ]}
          />

          <motion.p
            {...fade(2.0)}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div {...fade(2.2)} className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
            <WhatsAppButton messageKey="heroCta" variant="gold">
              {hero.ctaText}
            </WhatsAppButton>
            <div className="text-sm">
              <p className="font-semibold tracking-wide text-gold">{hero.pricingNote}</p>
              <p className="text-xs text-white/55">Enquire directly on WhatsApp</p>
            </div>
          </motion.div>
        </div>

        {/* Programme facts: an instrument strip, not cards */}
        <motion.dl
          {...fade(2.45, 14)}
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/20 pt-6 lg:mt-16 lg:grid-cols-4 lg:gap-0"
        >
          {hero.keyFacts.map((f, i) => {
            const Icon = factIcons[i];
            return (
              <div key={f.title} className="lg:border-l lg:border-white/15 lg:px-6 lg:first:border-l-0 lg:first:pl-0">
                <dt className="flex items-center gap-2.5 font-heading text-sm font-semibold sm:text-base">
                  <Icon className="h-4 w-4 flex-shrink-0 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  {f.title}
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-white/60 sm:text-[13px]">{f.detail}</dd>
              </div>
            );
          })}
        </motion.dl>
      </motion.div>
    </section>
  );
}
