"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export function OutcomesSection() {
  const { outcomes } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("outcomesCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="outcomes"
      ref={sectionRef}
      className="py-24 lg:py-36 bg-navy text-white relative overflow-hidden"
    >
      {/* Restrained Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      {/* Subtle Warm Atmospheric Gold Glow */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-navy-600/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-20 lg:mb-28"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-gold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{outcomes.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {outcomes.headline}
          </h2>

          <p className="text-xs sm:text-sm text-gold/80 tracking-widest uppercase font-mono">
            Intended Programme Outcomes & Execution Capabilities
          </p>
        </motion.div>

        {/* The 6-Point Editorial Numbered Manifesto Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {outcomes.items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={
                isInView || shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.08 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-7 sm:p-8 rounded-3xl bg-navy-700/50 backdrop-blur-sm border border-navy-600/70 hover:border-gold/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Large Distinctive Editorial Numerals */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-gold/50 group-hover:text-gold transition-colors">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center border border-gold/30 group-hover:border-gold transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-gold opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Outcome Title */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2.5 leading-snug">
                  {item.title}
                </h3>

                {/* Outcome Description */}
                <p className="text-sm text-white/75 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Rule */}
              <div className="mt-8 pt-4 border-t border-navy-600/60 flex items-center justify-between text-[11px] text-white/40 font-mono">
                <span>GOAL GRID MANIFESTO</span>
                <span className="text-gold/80 font-semibold uppercase">Pillar 0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Action Trigger */}
        <motion.div
          className="text-center space-y-3"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-navy text-base sm:text-lg font-bold px-9 py-4 rounded-full hover:bg-gold-400 transition-all shadow-xl group transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-navy fill-navy/20" />
            <span>{outcomes.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-navy transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs text-white/50 tracking-wider">
            All primary programme enquiries managed via WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
