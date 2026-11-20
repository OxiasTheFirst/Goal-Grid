"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, Quote } from "lucide-react";

export function ProblemSection() {
  const { problem } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("problemCta");

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{problem.badge}</span>
          </div>

          {/* Section Headline */}
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {problem.headline}
          </h2>

          {/* Context Narrative */}
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {problem.context}
          </p>

          {/* Explicit Integrity Disclaimer */}
          <p className="text-xs sm:text-sm font-medium text-charcoal-muted uppercase tracking-wider pt-2">
            {problem.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Illustrative Owner Experiences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto mb-14">
          {problem.experiences.map((item) => (
            <div
              key={item.theme}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-gold/30 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="font-heading font-medium text-base sm:text-lg text-navy leading-snug">
                  “{item.quote}”
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-charcoal-muted">
                <span className="font-semibold text-gold uppercase tracking-wider">
                  Challenge
                </span>
                <span>{item.theme}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Turning Point Box & CTA */}
        <div className="max-w-2xl mx-auto text-center space-y-6 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm">
          <p className="font-heading font-bold text-lg sm:text-xl text-navy leading-relaxed">
            {problem.closingStatement}
          </p>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-navy text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-navy-700 transition-all shadow-sm group"
          >
            <span>{problem.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
