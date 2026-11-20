"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, Quote, MessageCircle, AlertCircle } from "lucide-react";

export function ProblemSection() {
  const { problem } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("problemCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-36 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden"
    >
      {/* Subtle Architectural Grid Coordinates */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #142642 1px, transparent 1px), linear-gradient(to bottom, #142642 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-5 mb-20 lg:mb-24"
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

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto font-normal">
            {problem.context}
          </p>

          <p className="text-xs sm:text-sm font-semibold text-charcoal-muted uppercase tracking-widest pt-2">
            {problem.subtitle}
          </p>
        </motion.div>

        {/* Editorial Friction Progression: Quotes as Prominent Typographic Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
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
              className="bg-white rounded-3xl p-8 sm:p-9 border border-gray-200/90 shadow-sm hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden card-glow"
            >
              {/* Subtle Ghost Number */}
              <div className="absolute top-4 right-6 font-mono text-4xl font-extrabold text-navy/5 group-hover:text-gold/15 transition-colors select-none pointer-events-none">
                0{index + 1}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-charcoal-muted">
                    Execution Friction Point
                  </span>
                </div>

                <p className="font-heading font-medium text-lg sm:text-xl text-navy leading-snug mb-6">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>The Root Cause</span>
                </span>
                <span className="font-semibold text-navy/80">{item.theme}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Turning Point Transition: High Impact Resolution Container */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-6 bg-gradient-to-b from-white to-[#FAFBFD] rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-xl relative overflow-hidden"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="font-heading font-bold text-xl sm:text-2xl text-navy leading-relaxed max-w-2xl mx-auto">
            {problem.closingStatement}
          </p>

          <div>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group transform hover:-translate-y-0.5 active:translate-y-0 border border-navy-700"
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
