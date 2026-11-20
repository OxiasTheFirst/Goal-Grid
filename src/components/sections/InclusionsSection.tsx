"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const shouldReduceMotion = useReducedMotion();

  const iconMap: Record<string, React.ReactNode> = {
    CalendarCheck: <CalendarCheck className="w-5 h-5 text-gold" />,
    Users: <Users className="w-5 h-5 text-gold" />,
    LineChart: <LineChart className="w-5 h-5 text-gold" />,
    Video: <Video className="w-5 h-5 text-gold" />,
    Presentation: <Presentation className="w-5 h-5 text-gold" />,
    UserCheck: <UserCheck className="w-5 h-5 text-gold" />,
  };

  // Asymmetric Bento Column Spanning (Row 1: 7+5, Row 2: 5+7, Row 3: 6+6 = 12 cols)
  const colSpans = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-5",
    "lg:col-span-7",
    "lg:col-span-6",
    "lg:col-span-6",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F8FAFC] border-b border-gray-100 relative overflow-hidden"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center space-y-4 mb-16 lg:mb-20"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-xs font-semibold tracking-wider uppercase text-navy">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            <span>{inclusions.badge}</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-tight">
            {inclusions.headline}
          </h2>

          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            {inclusions.subtitle}
          </p>
        </motion.div>

        {/* Dynamic Asymmetric Bento Grid (12-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-16">
          {inclusions.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={
                isInView || shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 }
              }
              transition={{
                duration: 0.6,
                delay: shouldReduceMotion ? 0 : 0.08 * index,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${colSpans[index]} bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group card-glow`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    {iconMap[item.iconName]}
                  </div>
                  <span className="font-mono text-xs font-bold text-charcoal-muted tracking-widest bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-navy mb-2.5 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-muted">
                <span className="text-[11px] font-semibold text-navy/70">
                  Included in ₦50,000 fee
                </span>
                <span className="text-gold font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  Active pillar <span>→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Action Trigger */}
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white text-base font-semibold px-8 py-4 rounded-full hover:bg-navy-700 transition-all shadow-md group transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
            <span>{inclusions.ctaText}</span>
            <ArrowRight className="w-4 h-4 text-gold/80 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
