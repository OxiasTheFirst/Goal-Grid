"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export function FaqSection() {
  const { faq } = landingPageData;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const whatsappUrl = getWhatsAppUrl("faqCta");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
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
            <span>{faq.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {faq.headline}
          </h2>
        </motion.div>

        {/* 9-Item Accordion List with Smooth Height Animation */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={
                  isInView || shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 16 }
                }
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : 0.04 * index,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-gold/50 shadow-md"
                    : "border-gray-200/90 shadow-xs hover:border-gold/30"
                }`}
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy pr-2 leading-snug">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-navy text-white"
                        : "bg-gray-100 text-charcoal hover:bg-gray-200"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 text-sm sm:text-base text-charcoal-light leading-relaxed border-t border-gray-100 space-y-3">
                        <p>{item.answer}</p>
                        {item.statusNote && (
                          <div className="inline-flex items-center gap-2 text-xs font-semibold text-navy bg-gold/15 px-3 py-1.5 rounded-lg border border-gold/30">
                            <HelpCircle className="w-4 h-4 text-gold flex-shrink-0" />
                            <span>{item.statusNote}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Touchpoint */}
        <motion.div
          className="max-w-md mx-auto text-center space-y-3 bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-charcoal-light font-medium">
            {faq.helpPrompt}
          </p>
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-gold fill-gold/20" />
            <span>{faq.ctaText} →</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
