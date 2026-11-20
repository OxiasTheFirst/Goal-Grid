"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MessageCircle, ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  const { finalCta } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("finalCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-white relative overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating High-Contrast Container in Deep Navy #142642 */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-navy text-white rounded-3xl p-8 sm:p-14 lg:p-20 border-2 border-gold/40 shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-navy-600/40 blur-[120px] rounded-full pointer-events-none" />

          {/* Coordinate Pattern Accent */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-gold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span>{finalCta.badge}</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {finalCta.headline}
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-normal">
              {finalCta.subheadline}
            </p>

            <div className="pt-4 flex flex-col items-center gap-3">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-navy text-base sm:text-lg font-bold px-10 py-4.5 rounded-full hover:bg-gold-400 transition-all shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <MessageCircle className="w-5 h-5 text-navy fill-navy/20" />
                <span>{finalCta.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-navy transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-xs sm:text-sm font-medium text-white/60">
                {finalCta.pricingNote}
              </p>
            </div>

            <div className="pt-6 border-t border-navy-700/90">
              <p className="text-sm text-gold font-medium tracking-wide">
                “{finalCta.closingNote}”
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
