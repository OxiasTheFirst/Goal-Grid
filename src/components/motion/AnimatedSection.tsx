"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  id,
  className = "",
  delay = 0,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        animate={
          isInView || shouldReduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 28 }
        }
        transition={{
          duration: 0.65,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
