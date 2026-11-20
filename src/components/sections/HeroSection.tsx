"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MessageCircle, ArrowRight, Calendar, CheckSquare, Video, UserCheck } from "lucide-react";

export function HeroSection() {
  const { hero } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("heroCta");

  const factIcons = [
    <Calendar key="cal" className="w-5 h-5 text-gold" />,
    <CheckSquare key="check" className="w-5 h-5 text-gold" />,
    <Video key="vid" className="w-5 h-5 text-gold" />,
    <UserCheck key="user" className="w-5 h-5 text-gold" />,
  ];

  return (
    <section
      id="programme"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-white to-[#F6F8FB] pt-14 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-100"
    >
      {/* Restrained Architectural Grid & Ambient Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#142642 1px, transparent 1px), linear-gradient(to right, #142642 1px, transparent 1px), linear-gradient(to bottom, #142642 1px, transparent 1px)`,
          backgroundSize: "40px 40px, 120px 120px, 120px 120px",
        }}
      />
      {/* Subtle Warm Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold tracking-wide text-navy uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span>{hero.badge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
            Don’t Just Set the Goal.{" "}
            <span className="text-gold underline decoration-gold/30 decoration-2 underline-offset-8">
              Build the Path
            </span>{" "}
            to Achieve It.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-2xl mx-auto font-normal">
            {hero.subheadline}
          </p>

          {/* Primary CTA & Pricing Cue */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-navy text-white text-base sm:text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-navy-700 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group border border-navy-700"
            >
              <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
              <span>{hero.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Price Cue — Clean & Scarcity-Free */}
            <p className="text-xs sm:text-sm font-medium text-charcoal-muted">
              {hero.pricingNote}
            </p>
          </div>
        </div>

        {/* Key Facts Ribbon Strip (4-Column Bento Bar) */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-gray-200/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {hero.keyFacts.map((fact, index) => (
              <div
                key={fact.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/70 shadow-sm hover:border-gold/40 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    {factIcons[index]}
                  </div>
                  <span className="font-heading font-bold text-navy text-base">
                    {fact.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light leading-snug pl-[54px] -mt-1">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
