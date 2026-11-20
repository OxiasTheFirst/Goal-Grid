"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react";

export function AudienceQualifierSection() {
  const { qualifier } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("qualifierCta");
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
            <span>{qualifier.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {qualifier.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {qualifier.subtitle}
          </p>
        </motion.div>

        {/* Two-Column Qualifier Comparison with Disciplined BMB Brand Palette */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Left Column: Who This Is For */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            animate={
              isInView || shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -24 }
            }
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm space-y-6 card-glow"
          >
            <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200/80">
              <div className="w-9 h-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center font-bold border border-gold/30">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                Goal Grid Is For You If:
              </h3>
            </div>

            <ul className="space-y-4">
              {qualifier.criteriaForYou.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/30">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Who This May Not Be For */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            animate={
              isInView || shouldReduceMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 24 }
            }
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm space-y-6 card-glow"
          >
            <div className="flex items-center gap-3.5 pb-4 border-b border-gray-200/80">
              <div className="w-9 h-9 rounded-xl bg-navy/10 text-navy flex items-center justify-center font-bold border border-navy/20">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-navy">
                This May Not Be For You If:
              </h3>
            </div>

            <ul className="space-y-4">
              {qualifier.criteriaNotForYou.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gray-100 text-charcoal-muted flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-200/70">
              <p className="text-xs text-charcoal-muted leading-relaxed italic">
                Goal Grid asks for daily action and your presence at scheduled
                sessions. If you can commit that time, it will repay it.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section Action Trigger */}
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
            <span>{qualifier.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
