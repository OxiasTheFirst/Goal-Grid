"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  className?: string; // classes for the wrapper (sizing)
  imgClassName?: string; // object-position etc.
  range?: number; // % travel each way
  sizes?: string;
}

/** Full-bleed image that drifts slower than the page. Oversized so edges never show. */
export function ParallaxImage({
  src,
  alt = "",
  className = "",
  imgClassName = "object-cover",
  range = 9,
  sizes = "100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={alt ? undefined : true}>
      <motion.div className="absolute -inset-y-[12%] inset-x-0" style={reduce ? undefined : { y }}>
        <Image src={src} alt={alt} fill sizes={sizes} quality={85} className={imgClassName} />
      </motion.div>
    </div>
  );
}
