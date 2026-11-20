"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface MaskedLineProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * MaskedLine: Emerges from behind a horizontal concealed boundary.
 * The outer container clips all overflow (overflow-hidden).
 * The inner element translates smoothly from y: 115% -> 0% with physical easing.
 */
export function MaskedLine({ children, delay = 0, className = "" }: MaskedLineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden py-1 leading-[1.12]">
      <motion.span
        className={`block ${className}`}
        initial={shouldReduceMotion ? { y: "0%", opacity: 1 } : { y: "118%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.9,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface MaskedTextRevealProps {
  lines: Array<{
    text: ReactNode;
    className?: string;
  }>;
  baseDelay?: number;
  stagger?: number;
  className?: string;
}

export function MaskedTextReveal({
  lines,
  baseDelay = 0.2,
  stagger = 0.22,
  className = "",
}: MaskedTextRevealProps) {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <MaskedLine
          key={index}
          delay={baseDelay + index * stagger}
          className={line.className}
        >
          {line.text}
        </MaskedLine>
      ))}
    </div>
  );
}
