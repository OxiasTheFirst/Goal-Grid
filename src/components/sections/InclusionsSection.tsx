"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import {
  CalendarCheck,
  Users,
  LineChart,
  Video,
  Presentation,
  UserCheck,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export function InclusionsSection() {
  const { inclusions } = landingPageData;
  const whatsappUrl = getWhatsAppUrl("inclusionsCta");

  const iconMap: Record<string, React.ReactNode> = {
    CalendarCheck: <CalendarCheck className="w-5 h-5 text-gold" />,
    Users: <Users className="w-5 h-5 text-gold" />,
    LineChart: <LineChart className="w-5 h-5 text-gold" />,
    Video: <Video className="w-5 h-5 text-gold" />,
    Presentation: <Presentation className="w-5 h-5 text-gold" />,
    UserCheck: <UserCheck className="w-5 h-5 text-gold" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy/5 text-xs font-semibold tracking-wider uppercase text-navy">
            <span>{inclusions.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            {inclusions.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            {inclusions.subtitle}
          </p>
        </div>

        {/* 3x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14">
          {inclusions.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:border-gold/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="font-mono text-xs font-semibold text-charcoal-muted tracking-widest">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-navy mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="text-[11px] font-medium text-navy/70">
                  Included in ₦50,000 fee
                </span>
                <span className="text-gold font-medium group-hover:translate-x-0.5 transition-transform inline-flex items-center">
                  Active pillar →
                </span>
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
            className="inline-flex items-center gap-2.5 bg-navy text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-navy-700 transition-all shadow-sm group"
          >
            <MessageCircle className="w-4 h-4 text-gold fill-gold/20" />
            <span>{inclusions.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
