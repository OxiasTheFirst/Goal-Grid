"use client";

import { landingPageData } from "@/data/landing-page-data";
import { CheckCircle2, Shield, Clock, Users2, Info } from "lucide-react";

export function AccountabilitySection() {
  const { accountability } = landingPageData;

  const pillarIcons = [
    <Clock key="clock" className="w-6 h-6 text-gold" />,
    <Shield key="shield" className="w-6 h-6 text-gold" />,
    <Users2 key="users" className="w-6 h-6 text-gold" />,
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{accountability.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {accountability.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {accountability.subtitle}
          </p>
        </div>

        {/* 3 Confirmed Governance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {accountability.pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-[#FAFBFD] rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:border-gold/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  {pillarIcons[index]}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-heading font-bold text-xl text-navy">
                    {pillar.title}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                </div>

                <p className="text-sm text-charcoal-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs text-charcoal-muted font-mono">
                <span>Pillar 0{index + 1}</span>
                <span className="text-[10px] text-navy font-semibold uppercase tracking-wider">
                  Confirmed Structure
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Programme Disclaimer & Grounding */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-surface-light border border-gray-200/60 flex items-start gap-3 text-xs text-charcoal-muted text-center justify-center">
          <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
          <span>{accountability.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}
