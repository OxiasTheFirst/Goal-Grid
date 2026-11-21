"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { EASE_INOUT, EASE_REVEAL } from "@/lib/motion";

/**
 * Fixed header that floats over the hero.
 * - Transparent at the top, deep-navy glass once scrolled; the announcement strip collapses away.
 * - Scroll-spy underlines the section currently in view.
 * - Mobile menu is a full-screen navy sheet with staggered masked links.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy
  useEffect(() => {
    const ids = siteConfig.navItems.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Menu: lock scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          scrolled ? "max-h-0 opacity-0" : "max-h-9 opacity-100"
        }`}
      >
        <AnnouncementBar />
      </div>

      <div
        className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
          scrolled || open
            ? "bg-navy/90 backdrop-blur-xl shadow-[0_1px_0_rgba(201,164,92,0.18)]"
            : "bg-gradient-to-b from-navy/70 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-container items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-4" aria-label="Goal Grid — BMB Strategy & Advisory, back to top">
            <Image
              src={siteConfig.brand.logoNavy}
              alt="BMB Strategy & Advisory"
              width={112}
              height={40}
              priority
              className="h-9 w-auto object-contain brightness-0 invert"
            />
            <span className="hidden h-6 w-px bg-white/25 sm:block" aria-hidden="true" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-heading text-base font-semibold tracking-tight text-white">Goal Grid</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/55">Q1 2027 Cohort</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-8" aria-label="Primary">
            {siteConfig.navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative whitespace-nowrap py-1 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={getWhatsAppUrl("navCta")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-300"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Join the Waitlist
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="xl:hidden rounded-full p-2.5 text-white transition-colors hover:bg-white/10"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="xl:hidden fixed inset-0 top-0 -z-10 bg-navy pt-28 px-6 pb-10 flex flex-col"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_INOUT }}
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {siteConfig.navItems.map((item, i) => (
                <span key={item.href} className="block overflow-hidden border-b border-white/10">
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.07, ease: EASE_REVEAL }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 font-heading text-2xl font-medium text-white"
                    >
                      <span className="font-heading font-medium tabular-nums text-xs text-gold">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>
            <Link
              href={getWhatsAppUrl("navCta")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-auto flex items-center justify-center gap-2 rounded-full bg-gold py-4 text-base font-semibold text-navy"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              Join the Waitlist on WhatsApp
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
