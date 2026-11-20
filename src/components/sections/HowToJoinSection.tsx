"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, MessageCircle, HelpCircle } from "lucide-react";

export function HowToJoinSection() {
  const { howToJoin } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("howToJoinCta");

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{howToJoin.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {howToJoin.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {howToJoin.subtitle}
          </p>
        </div>

        {/* 4-Step Process Sequence */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howToJoin.steps.map((item) => (
            <div
              key={item.step}
              className="bg-[#FAFBFD] rounded-2xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between hover:border-gold/40 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center font-heading font-bold text-sm mb-4 border border-gold/40 group-hover:bg-navy-700 transition-colors">
                  0{item.step}
                </div>

                <h3 className="font-heading font-bold text-base text-navy mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-200/60 text-[10px] uppercase font-bold tracking-wider text-charcoal-muted">
                Step 0{item.step}
              </div>
            </div>
          ))}
        </div>

        {/* Clarification Box: Clicking button opens an enquiry, does NOT auto-register */}
        <div className="max-w-2xl mx-auto mb-10 p-4 rounded-xl bg-gold/10 border border-gold/20 flex items-start gap-3 text-xs sm:text-sm text-charcoal-light">
          <HelpCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
          <span>{howToJoin.clarificationNote}</span>
        </div>

        {/* Action Trigger */}
        <div className="text-center">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-navy text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-navy-700 transition-all shadow-sm group"
          >
            <MessageCircle className="w-4 h-4 text-gold fill-gold/20" />
            <span>{howToJoin.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
