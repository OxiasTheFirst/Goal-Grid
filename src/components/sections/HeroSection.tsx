"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import {
  MessageCircle,
  ArrowRight,
  Calendar,
  CheckSquare,
  Video,
  UserCheck,
  Compass,
} from "lucide-react";

export function HeroSection() {
  const { hero } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("heroCta");
  const shouldReduceMotion = useReducedMotion();

  const factIcons = [
    <Calendar key="cal" className="w-4 h-4 text-gold flex-shrink-0" />,
    <CheckSquare key="check" className="w-4 h-4 text-gold flex-shrink-0" />,
    <Video key="vid" className="w-4 h-4 text-gold flex-shrink-0" />,
    <UserCheck key="user" className="w-4 h-4 text-gold flex-shrink-0" />,
  ];

  return (
    <section
      id="programme"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-white to-[#F5F7FA] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-gray-100/80"
    >
      {/* Restrained Architectural Grid & Ambient Accents */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#142642 1px, transparent 1px), linear-gradient(to right, #142642 1px, transparent 1px), linear-gradient(to bottom, #142642 1px, transparent 1px)`,
          backgroundSize: "40px 40px, 120px 120px, 120px 120px",
        }}
      />
      {/* Subtle Warm Radial Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-navy/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Split Layout: Left 58% Command Zone, Right 42% Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Command & Authority Typography */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-left"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold tracking-wide text-navy uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* Main Headline with Editorial Contrast */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[1.12]">
              Don’t Just Set the Goal.{" "}
              <span className="text-gold relative inline-block">
                Build the Path
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-gold/30 rounded-full" />
              </span>{" "}
              to Achieve It.
            </h1>

            {/* Subheadline with Generous Readability */}
            <p className="text-base sm:text-lg lg:text-xl text-charcoal-light leading-relaxed max-w-xl font-normal">
              {hero.subheadline}
            </p>

            {/* Primary CTA & Pricing Cue */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
              <div className="text-xs sm:text-sm font-medium text-charcoal-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>{hero.pricingNote}</span>
              </div>
            </div>

            {/* Programme Context Micro-Notice */}
            <div className="pt-2 text-xs text-charcoal-muted tracking-wide flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>A BMB Strategy & Advisory Executive Programme · Cohort Q1 2027</span>
            </div>
          </motion.div>

          {/* Right Column: Art-Directed Executive Visual with Layered CSS GRID Motif */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Layered Geometric GRID Diamond Motif */}
            <div
              className="absolute -top-6 -right-6 w-72 h-72 border border-gold/30 rounded-3xl rotate-12 pointer-events-none hidden sm:block opacity-60"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(201, 164, 92, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(201, 164, 92, 0.08) 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute -bottom-6 -left-6 w-60 h-60 border border-navy/15 rounded-3xl -rotate-6 pointer-events-none hidden sm:block" />

            {/* Main Visual Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-navy/10 shadow-2xl bg-navy-800 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-executive-grid.jpg"
                  alt="Goal Grid Executive Strategy & Architectural Planning Surface"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Gradient Veil for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-gray-200/80 shadow-md flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center font-heading font-bold text-sm shadow-xs">
                    GG
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs text-navy tracking-tight">
                      Architectural Execution
                    </p>
                    <p className="text-[10px] text-charcoal-muted uppercase tracking-wider">
                      Goal · Roadmap · Implementation · Discipline
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/15 text-[10px] font-semibold text-navy">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Q1 2027</span>
                </div>
              </div>

              {/* Corner Architectural Coordinate Ticks */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gold/70" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gold/70" />
            </div>
          </motion.div>
        </div>

        {/* Key Facts Ribbon Strip — Redesigned as an Authoritative Unified Data Bar */}
        <motion.div
          className="mt-16 lg:mt-20 pt-8 border-t border-gray-200/70"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200/80 shadow-sm p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
              {hero.keyFacts.map((fact, index) => (
                <div
                  key={fact.title}
                  className="px-2 lg:px-6 flex items-start gap-3.5 group hover:bg-gold/5 transition-colors rounded-xl p-2"
                >
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    {factIcons[index]}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy text-sm sm:text-base leading-snug flex items-center gap-1.5">
                      <span>{fact.title}</span>
                      <span className="text-[10px] font-mono text-gold opacity-80">
                        / 0{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-light leading-snug mt-0.5">
                      {fact.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
