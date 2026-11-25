/**
 * Site configuration and programme constants for Goal Grid
 * Under BMB Strategy and Advisory Limited.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CTA DESTINATIONS (Phase 2)
 *
 *   Sign Up       → Sellar registration/store page      → SELLAR_SIGN_UP_URL        (PENDING)
 *   Start Here    → Google Form (name, email, WhatsApp,
 *                   business goals)                     → GOOGLE_FORM_START_HERE_URL (CONFIRMED)
 *   Chat with Us  → WhatsApp, general conversation      → getWhatsAppUrl("chat")
 *   Make an Enquiry → WhatsApp, enquiry-specific text   → getWhatsAppUrl("enquiry")
 *
 * Start Here is CONFIRMED (forms.gle link below). Sign Up (Sellar) is still PENDING: no URL has been supplied. Both are read from
 * environment variables so they can be set on the host without a code change:
 *
 *   NEXT_PUBLIC_SELLAR_SIGN_UP_URL
 *   NEXT_PUBLIC_GOOGLE_FORM_START_HERE_URL
 *
 * Until a valid https:// URL is set, `resolveCta()` reports the destination as pending and the
 * UI degrades honestly (see CtaButton). No URL is ever invented.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** PENDING: Sellar registration/store URL. Set NEXT_PUBLIC_SELLAR_SIGN_UP_URL (or paste the URL here). */
export const SELLAR_SIGN_UP_URL: string = process.env.NEXT_PUBLIC_SELLAR_SIGN_UP_URL?.trim() ?? "";

/** CONFIRMED by the client (25 Nov 2026): the Start Here Google Form. */
const CONFIRMED_GOOGLE_FORM_URL = "https://forms.gle/2dVD5c3uECsYw8r88";

/** Start Here → Google Form. Defaults to the confirmed form; NEXT_PUBLIC_GOOGLE_FORM_START_HERE_URL can override. */
export const GOOGLE_FORM_START_HERE_URL: string =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_START_HERE_URL?.trim() || CONFIRMED_GOOGLE_FORM_URL;

/** Official WhatsApp number, international digits only (+234 805 211 0631). */
export const WHATSAPP_NUMBER = "2348052110631";

export const siteConfig = {
  name: "Goal Grid",
  legalEntity: "BMB Strategy and Advisory Limited",
  description:
    "A practical 12-week goal execution programme for business owners and career professionals.",
  /** Canonical production origin (www is the preferred host). Override only via NEXT_PUBLIC_SITE_URL for non-production builds. */
  url: (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.goalgridproject.com").replace(/\/+$/, ""),
  seo: {
    title: "Goal Grid: 12-Week Goal Execution & Accountability Programme",
    description:
      "A 12-week goal execution programme for business owners and career professionals: turn goals into daily action with the GRID method and group accountability.",
    ogDescription:
      "Don't just set the goal. Build the path to achieve it. A 12-week programme for business owners and career professionals. Registration opens 1 December 2026.",
    ogImage: "/og/goal-grid-og.jpg",
    ogImageAlt: "Goal Grid, a 12-week programme from BMB Strategy and Advisory Limited",
  },
  programme: {
    duration: "12 weeks",
    registrationOpens: "1 December 2026",
  },
  investment: {
    standardFee: "₦50,000",
    standardFeeNumerical: 50000,
    instalmentFee: "₦60,000",
    instalmentFeeNumerical: 60000,
    currency: "NGN",
  },
  contact: {
    whatsappPhone: WHATSAPP_NUMBER,
    /** Prefilled WhatsApp messages. Each action has its own wording; encoded by getWhatsAppUrl. */
    messages: {
      chat: "Hello, i am interested in being a part of the Goal Grid Project. I would like to know more.",
      // Client-approved (26 Nov 2026): the enquiry button uses the same exact message as chat.
      enquiry: "Hello, i am interested in being a part of the Goal Grid Project. I would like to know more.",
    },
  },
  brand: {
    colors: {
      navy: "#142642",
      gold: "#C9A45C",
      white: "#FFFFFF",
      charcoal: "#30343B",
      surfaceLight: "#FAFBFD",
    },
    logoNavy: "/brand/bmb-logo-navy.png",
    logoBadge: "/brand/bmb-logo-badge.jpg",
  },
  navItems: [
    { label: "The Programme", href: "#programme" },
    { label: "The GRID Method", href: "#method" },
    { label: "What You'll Gain", href: "#outcomes" },
    { label: "About the Host", href: "#host" },
    { label: "Investment", href: "#investment" },
    { label: "FAQs", href: "#faqs" },
  ],
};

export type WhatsAppMessageKey = keyof typeof siteConfig.contact.messages;

/**
 * Single WhatsApp click-to-chat generator. Pass "chat" | "enquiry", or a custom message string.
 * The text is always URL-encoded.
 */
export function getWhatsAppUrl(messageKeyOrText: WhatsAppMessageKey | (string & {}) = "chat"): string {
  const { whatsappPhone, messages } = siteConfig.contact;
  const text =
    messageKeyOrText in messages ? messages[messageKeyOrText as WhatsAppMessageKey] : messageKeyOrText;
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
}

export type CtaKind = "signUp" | "startHere" | "chat" | "enquiry";

export interface ResolvedCta {
  href: string;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external: boolean;
  /** True when the real destination has not been supplied yet (Sellar / Google Form). */
  pending: boolean;
}

const isHttps = (u: string) => /^https:\/\/\S+$/i.test(u);

/**
 * Resolves a CTA to its destination. Sign Up and Start Here never fall back to WhatsApp or to each other:
 * while their URL is pending they point at the in-page "How to join" section, which states
 * the facts (registration opens 1 December 2026) rather than pretending a link exists.
 */
export function resolveCta(kind: CtaKind): ResolvedCta {
  switch (kind) {
    case "signUp":
      return isHttps(SELLAR_SIGN_UP_URL)
        ? { href: SELLAR_SIGN_UP_URL, external: true, pending: false }
        : { href: "#how-to-join", external: false, pending: true };
    case "startHere":
      return isHttps(GOOGLE_FORM_START_HERE_URL)
        ? { href: GOOGLE_FORM_START_HERE_URL, external: true, pending: false }
        : { href: "#how-to-join", external: false, pending: true };
    case "chat":
      return { href: getWhatsAppUrl("chat"), external: true, pending: false };
    case "enquiry":
      return { href: getWhatsAppUrl("enquiry"), external: true, pending: false };
  }
}
