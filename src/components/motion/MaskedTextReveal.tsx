"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { DUR, EASE_REVEAL } from "@/lib/motion";

/**
 * Horizontal masked line reveal.
 *
 * Every line owns a clipping container (overflow-hidden). The text inside sits
 * below the container's lower edge and rises into view, so it looks like it is
 * emerging from behind a horizontal surface, not fading in. Lines are staggered
 * by the parent variant.
 *
 * - `trigger="mount"` plays on load (hero).
 * - `trigger="inView"` plays once when scrolled into view (section headings).
 * - With reduced motion the text renders in its final position immediately.
 * - The clip box has vertical padding (cancelled by negative margin) so
 *   descenders and tall glyphs are never cut off at rest.
 */

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: stagger } },
});

const line: Variants = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: DUR.line, ease: EASE_REVEAL } },
};

export interface MaskedLineItem {
  text: ReactNode;
  className?: string;
}

interface MaskedTextRevealProps {
  lines: MaskedLineItem[];
  /** Plain-text version for assistive tech (lines are aria-hidden). */
  label: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  trigger?: "mount" | "inView";
  baseDelay?: number;
  stagger?: number;
  className?: string;
}

export function MaskedTextReveal({
  lines,
  label,
  as = "div",
  trigger = "inView",
  baseDelay = 0,
  stagger = 0.12,
  className = "",
}: MaskedTextRevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const animateProps =
    trigger === "mount"
      ? { animate: "show" }
      : { whileInView: "show", viewport: { once: true, amount: 0.6 } };

  return (
    <Tag
      className={className}
      variants={container(baseDelay, stagger)}
      initial={reduce ? false : "hidden"}
      {...animateProps}
    >
      <span className="sr-only">{label}</span>
      {lines.map((l, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="block overflow-hidden py-[0.09em] -my-[0.09em]"
        >
          <motion.span variants={line} className={`block will-change-transform ${l.className ?? ""}`}>
            {l.text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
