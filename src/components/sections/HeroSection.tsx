"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedLine } from "@/components/motion/MaskedTextReveal";
import {
  MessageCircle,
  ArrowRight,
  Calendar,
  CheckSquare,
  Video,
  UserCheck,
  Compass,
  Building2,
} from "lucide-react";

export function HeroSection() {
  const { hero } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("heroCta");
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle cinematic parallax on the background image
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const factIcons = [
    <Calendar key="cal" className="w-4 h-4 text-gold flex-shrink-0" />,
    <CheckSquare key="check" className="w-4 h-4 text-gold flex-shrink-0" />,
    <Video key="vid" className="w-4 h-4 text-gold flex-shrink-0" />,
    <UserCheck key="user" className="w-4 h-4 text-gold flex-shrink-0" />,
  ];

  return (
    <section
      id="programme"
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-navy text-white pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-navy-700/80"
    >
      {/* 1. Cinematic Full-Bleed Photographic Background with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          y: shouldReduceMotion ? "0%" : bgY,
          scale: shouldReduceMotion ? 1 : bgScale,
        }}
      >
        <Image
          src="/images/hero-cinematic-bg.jpg"
          alt="Goal Grid Executive Ambition and Strategic Planning Environment"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_right] lg:object-center"
        />

        {/* 2. Cinematic Lighting & Navy Gradient Overlays */}
        {/* Left-to-right gradient for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40 lg:to-transparent" />
        {/* Top & bottom atmospheric framing */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/70" />
        {/* Radial warm lighting glow behind headline */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/10 blur-[140px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Subtle Restrained Architectural Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-3xl space-y-7 sm:space-y-8 text-left">
          {/* Eyebrow Pill Badge — Choreographed Entrance 1 */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-md border border-gold/40 text-xs sm:text-sm font-semibold tracking-wider text-gold uppercase shadow-lg">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{hero.badge}</span>
            </div>
          </motion.div>

          {/* Main Headline with Horizontal Masked Reveal — Choreographed Entrance 2 */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              {/* Line 1: Emerges from behind horizontal boundary */}
              <MaskedLine delay={0.25} className="text-white">
                Don’t Just Set the Goal.
              </MaskedLine>

              {/* Line 2: Build the Path with glowing Gold Accent */}
              <MaskedLine delay={0.48} className="text-gold">
                <span className="relative inline-block">
                  Build the Path
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-gold via-gold-300 to-transparent rounded-full opacity-80" />
                </span>
              </MaskedLine>

              {/* Line 3: to Achieve It. */}
              <MaskedLine delay={0.7} className="text-white">
                to Achieve It.
              </MaskedLine>
            </h1>
          </div>

          {/* Subheadline — Choreographed Entrance 3 */}
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl font-normal"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.subheadline}
          </motion.p>

          {/* Primary CTA Cluster & Price Cue — Choreographed Entrance 4 */}
          <motion.div
            className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gold text-navy text-base sm:text-lg font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-gold-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group border border-gold-300"
            >
              <MessageCircle className="w-5 h-5 text-navy fill-navy/20" />
              <span>{hero.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-navy transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Price Cue — Scarcity-Free */}
            <div className="flex flex-col text-xs sm:text-sm text-white/80">
              <span className="font-semibold text-gold tracking-wide">
                {hero.pricingNote}
              </span>
              <span className="text-[11px] text-white/60">
                Direct WhatsApp registration enquiry
              </span>
            </div>
          </motion.div>

          {/* Programme Context Institutional Identifier */}
          <motion.div
            className="pt-2 flex items-center gap-3 text-xs text-white/60 tracking-wider font-mono"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.15 }}
          >
            <div className="flex items-center gap-1.5 text-gold">
              <Building2 className="w-3.5 h-3.5" />
              <span className="uppercase font-semibold">BMB Strategy & Advisory Ltd.</span>
            </div>
            <span>•</span>
            <span className="text-white/70">Q1 2027 Cohort</span>
          </motion.div>
        </div>
      </div>

      {/* 3. Base Key Facts Ribbon — Redesigned as an Architectural Instrument Bar */}
      <motion.div
        className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12"
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bg-navy-900/80 backdrop-blur-md rounded-2xl border border-white/10 sm:border-gold/25 p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {hero.keyFacts.map((fact, index) => (
              <div
                key={fact.title}
                className="px-2 lg:px-6 flex items-start gap-3.5 group hover:bg-white/5 transition-colors rounded-xl p-2"
              >
                <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                  {factIcons[index]}
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm sm:text-base leading-snug flex items-center gap-2">
                    <span>{fact.title}</span>
                    <span className="text-[10px] font-mono text-gold/80 font-normal">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-snug mt-0.5 font-normal">
                    {fact.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
