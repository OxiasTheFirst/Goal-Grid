"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";

export function FaqSection() {
  const { faq } = landingPageData;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const whatsappUrl = getWhatsAppUrl("faqCta");

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{faq.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {faq.headline}
          </h2>
        </div>

        {/* 9-Item Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5 mb-14">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50/60 transition-colors focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-navy pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-navy text-white rotate-180"
                        : "bg-gray-100 text-charcoal"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal-light leading-relaxed border-t border-gray-100/60 space-y-3 ${
                    isOpen ? "block animate-fade-in" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                  {item.statusNote && (
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                      <HelpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{item.statusNote}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Touchpoint */}
        <div className="max-w-md mx-auto text-center space-y-3 bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
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
        </div>
      </div>
    </section>
  );
}
