"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { getWhatsAppUrl } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl("floatingBubble");
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.aside
      aria-label="Contact options"
      initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 22,
        delay: shouldReduceMotion ? 0 : 1.2,
      }}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with the Goal Grid team on WhatsApp"
        className="flex items-center gap-2.5 bg-navy text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-gold/20 border border-gold/40 hover:border-gold hover:bg-navy-700 transition-all transform hover:-translate-y-1 active:translate-y-0"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-gold fill-gold/20" />
        <span className="font-heading font-semibold text-xs sm:text-sm tracking-wide">
          Chat with us
        </span>
      </Link>
    </motion.aside>
  );
}
