"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { Check, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const { pricing } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("pricingCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="investment"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span>{pricing.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {pricing.headline}
          </h2>
        </motion.div>

        {/* High-Impact Executive Pricing Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/90 shadow-2xl overflow-hidden card-glow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Fee Banner in Deep Navy */}
            <div className="lg:col-span-5 bg-navy text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute top-0 right-0 w-44 h-44 bg-gold/15 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-gold/30 text-xs font-semibold text-gold uppercase tracking-widest font-mono">
                  Full 3-Month Access
                </span>

                <div className="pt-2">
                  <div className="font-heading font-extrabold text-5xl sm:text-6xl text-white tracking-tight">
                    {pricing.fee}
                  </div>
                  <div className="text-xs sm:text-sm text-gold/80 mt-1 uppercase tracking-wider font-mono">
                    {pricing.feePeriod}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-700/90 border border-gold/30 text-xs font-semibold text-gold mt-2">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{pricing.instalmentNote}</span>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-navy-700/90 text-xs text-white/70 leading-relaxed font-normal">
                Covers all daily tasks, Google Meet strategy calls, progress
                reports, cohort leader support, and private host advisory.
              </div>
            </div>

            {/* Right Inclusions Checklist & CTA */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-navy mb-5">
                  Everything Included in Your Fee:
                </h3>

                <ul className="space-y-3.5">
                  {pricing.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/30">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-charcoal-light leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-5">
                <blockquote className="border-l-2 border-gold pl-4 text-xs sm:text-sm text-charcoal-light leading-relaxed italic">
                  “{pricing.persuasion}”
                </blockquote>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-navy text-white text-base sm:text-lg font-bold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-lg group transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
                  <span>{pricing.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
