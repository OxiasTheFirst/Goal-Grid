"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import Image from "next/image";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { GridPathIllustration } from "@/components/motion/GridPathIllustration";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Rich } from "@/components/ui/Rich";

/**
 * GRID framework.
 *
 * One scroll-linked progress value drives everything:
 *  - the connecting line fills (horizontal ≥lg, vertical below)
 *  - each stage "arrives" as the line reaches it: the oversized letter tilts up out of
 *    perspective and fills gold, the isometric tile marker lights, the copy comes to full contrast.
 * Reduced motion: progress is fixed at 1, so the finished composition is shown statically.
 */

const GOLD = "rgba(201,164,92,1)";
const GOLD_0 = "rgba(201,164,92,0.1)"; // letters keep a faint body before they are reached

function Stage({
  step,
  index,
  total,
  progress,
}: {
  step: (typeof landingPageData.gridMethod.steps)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const t = index / total + 0.04; // progress at which the line has reached this stage
  const letterFill = useTransform(progress, [t - 0.04, t + 0.1], [GOLD_0, GOLD]);
  const letterTilt = useTransform(progress, [t - 0.12, t + 0.06], [32, 0]);
  const copyOpacity = useTransform(progress, [t - 0.1, t + 0.04], [0.32, 1]);
  const tileBg = useTransform(progress, [t - 0.03, t + 0.05], ["rgba(20,38,66,1)", GOLD]);

  return (
    <li className="relative pl-16 lg:pl-0 lg:pt-20">
      {/* Dimensional marker: an isometric tile sitting on the progress line */}
      <div
        className="absolute left-0 top-1 h-11 w-11 lg:top-0"
        style={{ perspective: 400 }}
        aria-hidden="true"
      >
        <motion.div
          className="h-full w-full rounded-[3px] border border-gold"
          style={{
            backgroundColor: tileBg,
            rotateX: 58,
            rotateZ: 45,
            boxShadow: "5px 5px 0 rgba(201,164,92,0.28), 0 18px 28px -6px rgba(0,0,0,0.5)",
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-heading text-[10px] font-semibold text-white mix-blend-difference">
          0{index + 1}
        </span>
      </div>

      <div style={{ perspective: 900 }}>
        <motion.p
          aria-hidden="true"
          className="origin-bottom select-none font-display font-extrabold leading-[0.9] tracking-[-0.01em] text-outline-strong text-[7.5rem] sm:text-[9rem] lg:text-[clamp(7rem,13vw,12.5rem)]"
          style={{ color: letterFill, rotateX: letterTilt }}
        >
          {step.letter}
        </motion.p>
      </div>

      <motion.div style={{ opacity: copyOpacity }} className="mt-3 lg:mt-6 pr-4">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
          <span className="sr-only">{step.letter} — </span>
          {step.name}
        </h3>
        <p className="mt-3 text-base font-semibold leading-snug text-gold sm:text-lg">{step.question}</p>
        <p className="mt-3 max-w-xs text-base leading-relaxed text-white/75">{step.description}</p>
      </motion.div>
    </li>
  );
}

export function GridMethodSection() {
  const { gridMethod } = landingPageData;
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 72%", "end 62%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const fixed = useMotionValue(1);
  const progress = reduce ? fixed : smooth;

  const total = gridMethod.steps.length;

  return (
    <section id="method" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        {/* Subtle right-side depth (lg+): isometric floor plane and soft light behind the GRID illustration, which stays the primary visual. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[4%] top-4 hidden w-[54%] max-w-[760px] opacity-90 lg:block"
          style={{
            WebkitMaskImage: "radial-gradient(closest-side, #000 45%, transparent 100%)",
            maskImage: "radial-gradient(closest-side, #000 45%, transparent 100%)",
          }}
        >
          <Image src="/images/method-grid-depth-plane.webp" alt="" width={1000} height={1000} sizes="(min-width:1024px) 720px, 0px" className="h-auto w-full" />
        </div>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
         <div className="space-y-8 lg:col-span-7">
          <SectionLabel tone="dark">{gridMethod.badge}</SectionLabel>
          <MaskedTextReveal
            as="h2"
            label={gridMethod.headline}
            className="font-heading text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
            lines={[{ text: "Four Steps" }, { text: "From “I Want”", className: "text-gold" }, { text: "to “I Did”", className: "text-gold" }]}
          />
          <Reveal delay={0.15}>
            <p className="max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl lg:leading-relaxed">
              <Rich text={gridMethod.subtitle} strongClassName="font-semibold text-white" />
            </p>
          </Reveal>
         </div>
         <Reveal delay={0.2} className="lg:col-span-5">
           <GridPathIllustration className="mx-auto w-full max-w-[34rem] lg:max-w-none" />
         </Reveal>
        </div>

        {/* Progression */}
        <div className="relative mt-20 lg:mt-28">
          {/* horizontal line (desktop) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-white/15 lg:block">
            <motion.div className="h-full origin-left bg-gold" style={{ scaleX: progress }} />
          </div>
          {/* vertical line (mobile / tablet) */}
          <div aria-hidden="true" className="absolute bottom-0 left-[1.35rem] top-2 w-px bg-white/15 lg:hidden">
            <motion.div className="h-full origin-top bg-gold" style={{ scaleY: progress }} />
          </div>

          <ol ref={trackRef} className="grid gap-16 lg:grid-cols-4 lg:gap-8">
            {gridMethod.steps.map((s, i) => (
              <Stage key={s.letter} step={s} index={i} total={total} progress={progress} />
            ))}
          </ol>
        </div>

        <Reveal className="mt-24 lg:mt-32 max-w-3xl border-l-2 border-gold pl-6">
          <p className="font-heading text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
            {gridMethod.closingStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
