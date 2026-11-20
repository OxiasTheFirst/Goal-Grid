"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { Check, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export function PricingSection() {
  const { pricing } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("pricingCta");

  return (
    <section id="investment" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{pricing.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {pricing.headline}
          </h2>
        </div>

        {/* High-Impact Executive Pricing Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-gray-200/80 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Fee Banner */}
            <div className="lg:col-span-5 bg-navy text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-5"
                style={{
                  backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gold uppercase tracking-wider">
                  Full 3-Month Access
                </span>

                <div className="pt-2">
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                    {pricing.fee}
                  </div>
                  <div className="text-xs sm:text-sm text-white/70 mt-1 uppercase tracking-wider">
                    {pricing.feePeriod}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-700/80 border border-gold/30 text-xs font-semibold text-gold mt-2">
                  <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{pricing.instalmentNote}</span>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-navy-700 text-xs text-white/60 leading-relaxed">
                Covers all daily tasks, Google Meet strategy calls, progress
                reports, cohort leader support, and private host advisory.
              </div>
            </div>

            {/* Right Inclusions Checklist & CTA */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-heading font-bold text-lg text-navy mb-4">
                  Everything Included in Your Fee:
                </h3>

                <ul className="space-y-3">
                  {pricing.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-charcoal-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-5">
                <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed italic">
                  “{pricing.persuasion}”
                </p>

                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-navy text-white text-base font-semibold px-6 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group"
                >
                  <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
                  <span>{pricing.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
