"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "@/config/site";
import { MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = getWhatsAppUrl("navCta");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100/90 shadow-xs"
          : "bg-white/70 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Programme Identifier */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative h-10 w-24 sm:w-28 flex items-center">
            <Image
              src={siteConfig.brand.logoNavy}
              alt="BMB Strategy & Advisory"
              width={112}
              height={40}
              priority
              className="object-contain"
            />
          </div>
          <div className="h-6 w-px bg-gray-200 hidden sm:block" />
          <div className="flex flex-col">
            <span className="font-heading font-bold text-navy tracking-tight text-base sm:text-lg leading-tight group-hover:text-gold transition-colors">
              Goal Grid
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-charcoal-muted hidden sm:inline">
              Q1 2027 Cohort
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal hover:text-navy transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-gold after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-navy-700 shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0 border border-navy-700"
          >
            <MessageCircle className="w-4 h-4 text-gold fill-gold/20" />
            <span>Join the Waitlist</span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal hover:text-navy hover:bg-gray-100 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-gray-200 bg-white/98 backdrop-blur-md px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2 pt-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-charcoal hover:bg-surface-light hover:text-navy rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-charcoal-muted" />
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-gray-100">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-navy text-white text-base font-semibold px-5 py-3.5 rounded-full hover:bg-navy-700 transition-colors shadow-md"
            >
              <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
              <span>Join the Waitlist (WhatsApp)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
