"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { landingPageData } from "@/data/landing-page-data";
import { CheckCircle2, Shield, Clock, Users2, Info } from "lucide-react";

export function AccountabilitySection() {
  const { accountability } = landingPageData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const pillarIcons = [
    <Clock key="clock" className="w-6 h-6 text-gold" />,
    <Shield key="shield" className="w-6 h-6 text-gold" />,
    <Users2 key="users" className="w-6 h-6 text-gold" />,
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-24"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-navy shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{accountability.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {accountability.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {accountability.subtitle}
          </p>
        </motion.div>

        {/* 3 Confirmed Governance Pillars with Architectural Precision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {accountability.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              animate={
                isInView || shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 28 }
              }
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.12 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-9 border border-gray-200/90 shadow-sm hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-glow"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  {pillarIcons[index]}
                </div>

                <div className="flex items-center gap-2.5 mb-3">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                    {pillar.title}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                </div>

                <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-gray-200/70 flex items-center justify-between text-xs text-charcoal-muted font-mono">
                <span className="font-semibold text-navy/70">PILLAR 0{index + 1}</span>
                <span className="text-[10px] text-gold font-bold uppercase tracking-wider">
                  Confirmed System
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programme Grounding & Ethical Disclaimer Frame */}
        <motion.div
          className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-surface-light border border-gray-200/80 flex items-start gap-3.5 text-xs sm:text-sm text-charcoal-muted leading-relaxed"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <span>{accountability.disclaimer}</span>
        </motion.div>
      </div>
    </section>
  );
}
