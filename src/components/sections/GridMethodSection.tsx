"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { landingPageData } from "@/data/landing-page-data";
import { Target, Map, Play, ShieldCheck } from "lucide-react";

export function GridMethodSection() {
  const { gridMethod } = landingPageData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const stepIcons = [
    <Target key="target" className="w-5 h-5 text-gold" />,
    <Map key="map" className="w-5 h-5 text-gold" />,
    <Play key="play" className="w-5 h-5 text-gold" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-gold" />,
  ];

  return (
    <section
      id="method"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #142642 1px, transparent 1px), linear-gradient(to bottom, #142642 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-24"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-navy shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{gridMethod.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {gridMethod.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {gridMethod.subtitle}
          </p>
        </motion.div>

        {/* The 4-Pillar GRID Progressive Framework */}
        <div className="relative max-w-6xl mx-auto">
          {/* Animated Gold Progress Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gray-200 z-0 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold via-gold-400 to-gold"
              initial={shouldReduceMotion ? { width: "100%" } : { width: "0%" }}
              animate={isInView || shouldReduceMotion ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {gridMethod.steps.map((step, index) => (
              <motion.div
                key={step.letter}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                animate={
                  isInView || shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : 0.15 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-[#FAFBFD] rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:border-gold/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden card-glow"
              >
                {/* Large Responsive Ghost Letter Display Anchor */}
                <div className="absolute -top-4 -right-2 text-7xl sm:text-8xl font-heading font-extrabold text-navy/5 group-hover:text-gold/15 transition-colors duration-300 select-none pointer-events-none">
                  {step.letter}
                </div>

                <div>
                  {/* Step Header with Node & Stage Indicator */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-13 h-13 rounded-2xl bg-navy text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-md border-2 border-gold/50 group-hover:bg-navy-700 group-hover:scale-105 transition-all">
                      {step.letter}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/90 flex items-center justify-center shadow-xs text-gold">
                      {stepIcons[index]}
                    </div>
                  </div>

                  {/* Stage Number & Title */}
                  <div className="mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-gold block mb-1">
                      Stage 0{index + 1}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                      {step.name}
                    </h3>
                  </div>

                  {/* Core Question Prompt */}
                  <p className="text-xs sm:text-sm font-semibold text-navy/80 mb-3.5 bg-gold/10 px-3 py-1.5 rounded-lg border border-gold/20 inline-block">
                    {step.question}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Identifier */}
                <div className="mt-8 pt-4 border-t border-gray-200/70 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="font-mono text-[11px] font-semibold text-navy/60">
                    PHASE 0{index + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                    Pillar
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Method Conclusion Banner */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-navy/5 via-gold/10 to-navy/5 p-px rounded-full inline-block">
            <p className="text-sm sm:text-base font-semibold text-navy bg-white py-3 px-8 rounded-full shadow-xs border border-gray-100">
              {gridMethod.closingStatement}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
