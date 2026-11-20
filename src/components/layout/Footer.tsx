import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MessageCircle, Mail, Instagram, ArrowUpRight } from "lucide-react";

export function Footer() {
  const whatsappUrl = getWhatsAppUrl("footerLink");

  return (
    <footer className="bg-navy text-white border-t-2 border-gold/25 relative overflow-hidden transition-colors">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-navy-700/60">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative h-14 w-14 rounded-xl overflow-hidden border border-gold/30 shadow-md flex-shrink-0 bg-white">
                <Image
                  src={siteConfig.brand.logoBadge}
                  alt="BMB Strategy & Advisory"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-white tracking-tight">
                  Goal Grid
                </h3>
                <p className="text-xs text-gold font-medium tracking-wider uppercase">
                  BMB Strategy & Advisory Ltd.
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              A practical 3-month goal execution programme for business owners.
              Transforming strategic ambition into structured daily execution from
              January to March 2027.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-700/60 border border-gold/20 text-xs text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              <span>Next Cohort: January–March 2027</span>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-gold">
              Programme Navigation
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Touchpoints */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-xs tracking-wider uppercase text-gold">
              Direct Contact
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Have questions regarding programme structure or enrolment? Connect
              directly with the advisory team.
            </p>

            <div className="space-y-2.5 pt-1">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp Click-to-Chat</span>
              </Link>

              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <div className="w-8 h-8 rounded-full bg-navy-700/50 flex items-center justify-center text-white/40">
                  <Instagram className="w-4 h-4" />
                </div>
                <span className="text-xs">@bmbstrategy (Official)</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <div className="w-8 h-8 rounded-full bg-navy-700/50 flex items-center justify-center text-white/40">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs">info@bmbstrategy.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 BMB Strategy & Advisory Ltd. All rights reserved.</p>
          <p className="text-white/40">
            Goal Grid™ is an executive advisory programme.
          </p>
        </div>
      </div>
    </footer>
  );
}
