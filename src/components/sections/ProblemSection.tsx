"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, Quote, MessageCircle } from "lucide-react";

export function ProblemSection() {
  const { problem } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("problemCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden"
    >
      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #142642 1px, transparent 1px), linear-gradient(to bottom, #142642 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span>{problem.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {problem.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {problem.context}
          </p>

          <p className="text-xs sm:text-sm font-semibold text-charcoal-muted uppercase tracking-widest pt-1">
            {problem.subtitle}
          </p>
        </motion.div>

        {/* 2x2 Editorial Thought Progression — Structured with High Typographic Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {problem.experiences.map((item, index) => (
            <motion.div
              key={item.theme}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={
                isInView || shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.1 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/80 shadow-sm hover:border-gold/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group card-glow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-muted">
                    Friction Point 0{index + 1}
                  </span>
                </div>

                <p className="font-heading font-medium text-lg sm:text-xl text-navy leading-snug mb-4">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="font-semibold text-gold uppercase tracking-wider">
                  The Obstacle
                </span>
                <span className="font-medium text-navy/70">{item.theme}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Turning Point Transition Box & CTA */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-b from-white to-[#FAFBFD] rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-lg relative overflow-hidden"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="font-heading font-bold text-xl sm:text-2xl text-navy leading-relaxed max-w-2xl mx-auto">
            {problem.closingStatement}
          </p>

          <div>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
              <span>{problem.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
