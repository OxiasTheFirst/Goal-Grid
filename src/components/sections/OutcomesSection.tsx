"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export function OutcomesSection() {
  const { outcomes } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("outcomesCta");

  return (
    <section id="outcomes" className="py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
      {/* Restrained Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wider uppercase text-gold">
            <span>{outcomes.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            {outcomes.headline}
          </h2>

          <p className="text-xs sm:text-sm text-white/60 tracking-wider uppercase">
            Intended Programme Outcomes & Execution Capabilities
          </p>
        </div>

        {/* 6 Stacked Outcome Cards (2 columns on tablet/desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {outcomes.items.map((item) => (
            <div
              key={item.number}
              className="bg-navy-700/60 backdrop-blur-sm rounded-2xl p-7 border border-navy-600/60 hover:border-gold/40 transition-all flex items-start gap-4 group"
            >
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-gold/80 flex-shrink-0 group-hover:text-gold transition-colors font-mono">
                {item.number}
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {item.title}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Action Trigger */}
        <div className="text-center">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold text-navy text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-gold-400 transition-all shadow-lg group"
          >
            <MessageCircle className="w-4 h-4 text-navy fill-navy/20" />
            <span>{outcomes.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-navy transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
