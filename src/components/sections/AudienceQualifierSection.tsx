"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react";

export function AudienceQualifierSection() {
  const { qualifier } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("qualifierCta");

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{qualifier.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {qualifier.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {qualifier.subtitle}
          </p>
        </div>

        {/* Two-Column Qualifier Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* Left Column: Who This Is For */}
          <div className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy">
                Goal Grid Is For You If:
              </h3>
            </div>

            <ul className="space-y-4">
              {qualifier.criteriaForYou.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal-light leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Who This May Not Be For */}
          <div className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-xl text-navy">
                This May Not Be For You If:
              </h3>
            </div>

            <ul className="space-y-4">
              {qualifier.criteriaNotForYou.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-200">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-charcoal-light leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-gray-200/60">
              <p className="text-xs text-charcoal-muted leading-relaxed italic">
                Goal Grid asks for daily action and your presence at scheduled
                sessions. If you can make that time, it will repay it.
              </p>
            </div>
          </div>
        </div>

        {/* Section Action Trigger */}
        <div className="text-center">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-navy text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-navy-700 transition-all shadow-sm group"
          >
            <MessageCircle className="w-4 h-4 text-gold fill-gold/20" />
            <span>{qualifier.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
