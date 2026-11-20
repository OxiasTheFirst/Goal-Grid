"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";

export function HowToJoinSection() {
  const { howToJoin } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("howToJoinCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-navy shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{howToJoin.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {howToJoin.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {howToJoin.subtitle}
          </p>
        </motion.div>

        {/* 4-Step Process Sequence with Animated Progressive Line */}
        <div className="relative max-w-5xl mx-auto mb-14">
          {/* Subtle Horizontal Progression Line on Desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-gray-200 z-0">
            <motion.div
              className="h-full bg-gold"
              initial={shouldReduceMotion ? { width: "100%" } : { width: "0%" }}
              animate={isInView || shouldReduceMotion ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {howToJoin.steps.map((item, index) => (
              <motion.div
                key={item.step}
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
                className="bg-[#FAFBFD] rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-gold/50 hover:shadow-lg transition-all duration-300 group card-glow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center font-heading font-bold text-base mb-5 border-2 border-gold/50 group-hover:bg-navy-700 transition-colors shadow-sm">
                    0{item.step}
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-navy mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-gray-200/70 font-mono text-[10px] uppercase font-bold tracking-widest text-gold">
                  Step 0{item.step}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clarification Box: Clicking button opens an enquiry, does NOT auto-register */}
        <motion.div
          className="max-w-2xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gold/10 border border-gold/25 flex items-start gap-3.5 text-xs sm:text-sm text-charcoal-light leading-relaxed"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
          <span>{howToJoin.clarificationNote}</span>
        </motion.div>

        {/* Action Trigger */}
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
            <span>{howToJoin.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
