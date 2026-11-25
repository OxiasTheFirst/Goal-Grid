import Link from "next/link";
import { ArrowRight, ClipboardList, HelpCircle, MessageCircle } from "lucide-react";
import { resolveCta, type CtaKind } from "@/config/site";

/**
 * One component for every call to action, so label, purpose and destination can never drift apart.
 *
 *  signUp     primary   "Sign Up"           → Sellar (registration + payment)
 *  startHere  secondary "Start Here"        → Google Form (share your goals)
 *  chat       contact   "Chat with Us"      → WhatsApp, general conversation with the host
 *  enquiry    contact   "Make an Enquiry"   → WhatsApp, enquiry-specific prefilled message
 *
 * `tone` says what the button sits on ("dark" = navy surface, "light" = white surface).
 * While Sellar / Google Form URLs are pending: elsewhere on the page the button points at the
 * "How to join" section; inside that section (`disableWhenPending`) it renders as a disabled
 * button, never a dead or invented link.
 */

const META: Record<CtaKind, { label: string; Icon: typeof ArrowRight; role: "primary" | "secondary" | "contact" }> = {
  signUp: { label: "Sign Up", Icon: ArrowRight, role: "primary" },
  startHere: { label: "Start Here", Icon: ClipboardList, role: "secondary" },
  chat: { label: "Chat with Us", Icon: MessageCircle, role: "contact" },
  enquiry: { label: "Make an Enquiry", Icon: HelpCircle, role: "contact" },
};

const BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

const STYLES = {
  dark: {
    primary: "bg-gold text-navy hover:bg-gold-300 focus-visible:ring-offset-navy",
    secondary: "border border-white/40 text-white hover:border-gold hover:text-gold focus-visible:ring-offset-navy",
    contact: "border border-white/15 bg-white/5 text-white/85 hover:border-gold/60 hover:text-white focus-visible:ring-offset-navy",
    disabled: "cursor-not-allowed border border-white/20 text-white/45",
  },
  light: {
    primary: "bg-navy text-white hover:bg-navy-700 focus-visible:ring-offset-white",
    secondary: "border border-navy/40 text-navy hover:border-gold-600 hover:text-gold-700 focus-visible:ring-offset-white",
    contact: "border border-navy/15 bg-navy/[0.03] text-charcoal hover:border-gold-600 hover:text-navy focus-visible:ring-offset-white",
    disabled: "cursor-not-allowed border border-navy/20 text-charcoal-muted",
  },
} as const;

const SIZES = { md: "px-6 py-3", lg: "px-8 py-4 text-base" } as const;

interface CtaButtonProps {
  kind: CtaKind;
  tone?: "dark" | "light";
  size?: keyof typeof SIZES;
  /** Render a disabled button (not a link) while the destination is pending. */
  disableWhenPending?: boolean;
  className?: string;
}

export function CtaButton({ kind, tone = "dark", size = "md", disableWhenPending = false, className = "" }: CtaButtonProps) {
  const { label, Icon, role } = META[kind];
  const { href, external, pending } = resolveCta(kind);
  const cls = `${BASE} ${SIZES[size]} ${className}`;

  const icon =
    role === "primary" ? (
      <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden="true" />
    ) : (
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
    );

  if (pending && disableWhenPending) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        data-cta={kind}
        data-pending="true"
        className={`${cls} ${STYLES[tone].disabled}`}
      >
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      data-cta={kind}
      data-pending={pending ? "true" : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${cls} ${STYLES[tone][role]}`}
    >
      {role !== "primary" && icon}
      <span>{label}</span>
      {role === "primary" && icon}
    </Link>
  );
}
