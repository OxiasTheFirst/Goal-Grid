"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { ShieldCheck, Calendar, Users, Info, CheckCircle2 } from "lucide-react";

export function HostSection() {
  const { host } = landingPageData;

  return (
    <section id="host" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Executive Split Container */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Portrait & Badge Container */}
            <div className="lg:col-span-5 bg-navy p-8 sm:p-12 flex flex-col justify-between items-center text-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: `radial-gradient(#C9A45C 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Formal Framing Container */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-gold/40 shadow-xl mb-4 bg-navy-700 flex items-center justify-center">
                  <Image
                    src={siteConfig.brand.logoBadge}
                    alt={host.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-[11px] text-white/50 italic mb-4">
                  Official portrait pending client confirmation
                </p>

                <h3 className="font-heading font-bold text-xl text-white">
                  {host.name}
                </h3>
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mt-1">
                  {host.role}
                </p>
                <p className="text-xs text-white/60 mt-0.5">
                  {host.organization}
                </p>
              </div>

              {/* Advisory Inclusions Pills */}
              <div className="relative z-10 w-full mt-6 pt-6 border-t border-navy-700/80 space-y-2 text-left">
                <div className="flex items-center gap-2.5 text-xs text-white/80">
                  <Calendar className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Leads weekly Friday teaching calls</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/80">
                  <Users className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Guides cohort curriculum</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Conducts your private 1-on-1 session</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Narrative & Role */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 text-xs font-semibold tracking-wider uppercase text-navy">
                  <span>{host.badge}</span>
                </div>

                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-navy tracking-tight">
                  {host.headline}
                </h2>

                <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                  {host.biography}
                </p>

                <div className="pt-2 space-y-2.5">
                  <h4 className="text-xs font-bold text-navy uppercase tracking-wider">
                    Confirmed Host Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {host.duties.map((duty) => (
                      <li
                        key={duty}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-light"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status Note on Credentials Sign-Off */}
              <div className="pt-4 border-t border-gray-100 flex items-start gap-2 text-xs text-charcoal-muted">
                <Info className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="italic">
                  {host.credentialsConfirmationNote}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
