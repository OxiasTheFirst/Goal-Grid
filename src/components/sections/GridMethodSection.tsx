"use client";

import { landingPageData } from "@/data/landing-page-data";
import { Target, Map, Play, ShieldCheck } from "lucide-react";

export function GridMethodSection() {
  const { gridMethod } = landingPageData;

  const stepIcons = [
    <Target key="target" className="w-5 h-5 text-gold" />,
    <Map key="map" className="w-5 h-5 text-gold" />,
    <Play key="play" className="w-5 h-5 text-gold" />,
    <ShieldCheck key="shield" className="w-5 h-5 text-gold" />,
  ];

  return (
    <section id="method" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{gridMethod.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {gridMethod.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {gridMethod.subtitle}
          </p>
        </div>

        {/* 4 Connected Step Cards with Continuous Horizontal Line (Desktop) & Vertical (Mobile) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Continuous Gold Connecting Line behind milestone circles (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {gridMethod.steps.map((step, index) => (
              <div
                key={step.letter}
                className="bg-[#FAFBFD] rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:border-gold/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header with Letter Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-heading font-bold text-lg shadow-sm group-hover:bg-navy-700 transition-colors border-2 border-gold/40">
                      {step.letter}
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                      {stepIcons[index]}
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-navy mb-1.5">
                    {step.letter} — {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-gold mb-3">
                    {step.question}
                  </p>

                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="font-mono">Stage 0{index + 1}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-navy/60">
                    Execution Pillar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Method Conclusion Banner */}
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-sm sm:text-base font-medium text-navy/80 bg-surface-light py-3 px-6 rounded-full inline-block border border-gray-200/60">
            {gridMethod.closingStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
