"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { siteConfig } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ShieldCheck, Calendar, Users, Info, CheckCircle2 } from "lucide-react";

export function HostSection() {
  const { host } = landingPageData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="host"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Executive Split Container */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 card-glow"
          >
            {/* Left Column: Architectural Portrait Placeholder & Role Container */}
            <div className="lg:col-span-5 bg-navy p-8 sm:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden text-white">
              {/* Subtle Coordinate Grid in Navy Panel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(#C9A45C 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Architectural Formal Framing Container */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl mb-5 bg-navy-700/80 flex flex-col items-center justify-center p-4">
                  {/* Executive Monogram & Institutional Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-gold/15 border border-gold/40 flex items-center justify-center font-heading font-extrabold text-2xl text-gold mb-3 shadow-inner">
                    BB
                  </div>
                  <div className="relative h-6 w-24">
                    <Image
                      src={siteConfig.brand.logoNavy}
                      alt="BMB Strategy & Advisory"
                      fill
                      className="object-contain filter invert brightness-200 opacity-70"
                    />
                  </div>

                  {/* Corner Coordinate Accent Marks */}
                  <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-gold/60" />
                  <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-gold/60" />
                  <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-gold/60" />
                  <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-gold/60" />
                </div>

                <p className="text-[11px] text-gold/75 font-mono uppercase tracking-wider mb-3">
                  Official portrait pending client confirmation
                </p>

                <h3 className="font-heading font-bold text-2xl text-white">
                  {host.name}
                </h3>
                <p className="text-xs font-semibold text-gold uppercase tracking-widest mt-1">
                  {host.role}
                </p>
                <p className="text-xs text-white/60 mt-0.5 font-medium">
                  {host.organization}
                </p>
              </div>

              {/* Advisory Inclusions Pills */}
              <div className="relative z-10 w-full mt-8 pt-6 border-t border-navy-700/90 space-y-2.5 text-left">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Leads weekly Friday teaching calls</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <Users className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Guides cohort curriculum</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Conducts your private 1-on-1 session</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Narrative & Role Structure */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs font-semibold tracking-wider uppercase text-navy">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>{host.badge}</span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy tracking-tight leading-snug">
                  {host.headline}
                </h2>

                <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                  {host.biography}
                </p>

                <div className="pt-3 space-y-3">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider font-mono">
                    Confirmed Host Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {host.duties.map((duty) => (
                      <li
                        key={duty}
                        className="flex items-start gap-3 text-xs sm:text-sm text-charcoal-light leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Note on Credentials Sign-Off */}
              <div className="pt-4 border-t border-gray-100 flex items-start gap-2.5 text-xs text-charcoal-muted leading-relaxed">
                <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="italic">
                  {host.credentialsConfirmationNote}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
