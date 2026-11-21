"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DUR, EASE_SOFT } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** Play on mount instead of when scrolled into view. */
  immediate?: boolean;
}

/** Scroll-triggered rise + fade. Renders final state under reduced motion. */
export function Reveal({ children, delay = 0, y = 24, className, immediate }: RevealProps) {
  const reduce = useReducedMotion();
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, amount: 0.2 } })}
      transition={{ duration: DUR.base, delay, ease: EASE_SOFT }}
    >
      {children}
    </motion.div>
  );
}
