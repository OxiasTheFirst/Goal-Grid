import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/config/site";

type MessageKey = keyof typeof siteConfig.contact.messages;

interface WhatsAppButtonProps {
  messageKey: MessageKey;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "outline";
  className?: string;
}

const variants = {
  gold: "bg-gold text-navy hover:bg-gold-300 focus-visible:ring-offset-navy",
  navy: "bg-navy text-white hover:bg-navy-700 focus-visible:ring-offset-white",
  outline:
    "border border-white/30 text-white hover:border-gold hover:text-gold focus-visible:ring-offset-navy",
};

/** Single source for every WhatsApp enquiry CTA. URL always comes from getWhatsAppUrl. */
export function WhatsAppButton({ messageKey, children, variant = "gold", className = "" }: WhatsAppButtonProps) {
  return (
    <Link
      href={getWhatsAppUrl(messageKey)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </Link>
  );
}
