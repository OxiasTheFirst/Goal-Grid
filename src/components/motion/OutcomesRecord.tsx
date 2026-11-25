"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * "A wish becomes a record of work done": 12 weekly columns × 7 daily squares.
 * The base layer is the wish (hollow outlines). A gold layer, revealed left to right as the section is
 * scrolled, is the record. It is an illustration of the programme structure (12 weeks of daily tasks),
 * not data. Reduced motion: the finished record is shown statically.
 */
const WEEKS = 12;
const DAYS = 7;

// Deterministic tonal variation so the record reads as lived-in rather than a flat fill
const tone = (w: number, d: number) => 0.62 + ((w * 7 + d * 13) % 5) * 0.095;

function Grid({ filled }: { filled: boolean }) {
  return (
    <div className="grid h-full w-full grid-cols-12 gap-1 sm:gap-2">
      {Array.from({ length: WEEKS }, (_, w) => (
        <div key={w} className="grid grid-rows-7 gap-1 sm:gap-2">
          {Array.from({ length: DAYS }, (_, d) => (
            <span
              key={d}
              className={`h-3.5 rounded-[3px] sm:h-5 lg:h-6 sm:rounded-[4px] ${filled ? "bg-gold" : "border border-white/25"}`}
              style={filled ? { opacity: tone(w, d) } : undefined}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function OutcomesRecord({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const fixed = useMotionValue(1);
  const p = reduce ? fixed : smooth;
  const clip = useTransform(p, (v) => `inset(0 ${(100 - Math.min(1, Math.max(0, v)) * 100).toFixed(2)}% 0 0)`);
  const marker = useTransform(p, (v) => `${Math.min(1, Math.max(0, v)) * 100}%`);

  return (
    <figure ref={ref} className={className}>
      <div className="mb-4 flex items-end justify-between font-body text-xs font-semibold uppercase tracking-[0.16em]">
        <span className="text-white/60">Week 1 · the wish</span>
        <span className="text-gold">Week 12 · the record</span>
      </div>
      <div className="relative" role="img" aria-label="Illustration: twelve weeks of daily tasks filling in, from empty outlines to a completed record of work">
        <Grid filled={false} />
        <motion.div className="absolute inset-0" style={{ clipPath: clip }}>
          <Grid filled />
        </motion.div>
        {/* Leading edge */}
        <motion.span aria-hidden="true" className="absolute -top-2 -bottom-2 w-px bg-gold/80 shadow-[0_0_14px_2px_rgba(201,164,92,0.55)]" style={{ left: marker }} />
      </div>
      <figcaption className="mt-4 text-xs text-white/55">
        Illustration of the programme structure: 12 weeks, a task every day. Not a measure of results.
      </figcaption>
    </figure>
  );
}
