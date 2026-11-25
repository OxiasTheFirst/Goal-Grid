"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";

/** Appears once the hero CTA has scrolled away. Icon-only on small screens so it never covers copy. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.aside
          aria-label="Contact options"
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40"
          initial={reduce ? false : { y: 24, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 24, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <Link
            href={getWhatsAppUrl("chat")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="flex items-center gap-2.5 rounded-full border border-gold/50 bg-navy/95 p-3.5 sm:px-5 sm:py-3 text-white shadow-[0_12px_40px_-8px_rgba(20,38,66,0.7)] backdrop-blur transition-colors hover:border-gold hover:bg-navy"
          >
            <MessageCircle className="h-5 w-5 text-gold" strokeWidth={1.75} aria-hidden="true" />
            <span className="hidden sm:inline text-sm font-semibold tracking-wide">Chat with us</span>
          </Link>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
