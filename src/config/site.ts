/**
 * Site configuration and programme constants for Goal Grid
 * Under BMB Strategy & Advisory Ltd.
 */

export const siteConfig = {
  name: "Goal Grid",
  legalEntity: "BMB Strategy & Advisory Ltd.",
  description:
    "A practical 3-month goal execution programme for business owners, scheduled for January–March 2027.",
  url: "https://goalgridproject.com",
  dates: {
    programmeDuration: "January–March 2027",
    waitlistOpens: "December 2026",
    waitlistOpensNote: "Waitlist opens December 2026",
  },
  investment: {
    fee: "₦50,000",
    feeNumerical: 50000,
    currency: "NGN",
    instalmentsAvailable: true,
    instalmentNote: "Instalments available",
  },
  contact: {
    // Official WhatsApp phone number placeholder until client supplies final number
    whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "234XXXXXXXXXX",
    defaultMessage:
      "Hello, I'm interested in the Goal Grid programme. Please send me the waitlist and registration details.",
    messages: {
      announcement:
        "Hello, I would like to get updates on the Goal Grid waitlist opening.",
      navCta:
        "Hello, I'm interested in the Goal Grid programme. Please send me the waitlist and registration details.",
      heroCta:
        "Hello, I want to join the Goal Grid waitlist for January 2027.",
      problemCta:
        "Hello, I'm ready to build a clear plan for my business with Goal Grid.",
      inclusionsCta:
        "Hello, I'm interested in the Goal Grid programme structure and inclusions.",
      outcomesCta:
        "Hello, I want to achieve my business goals with Goal Grid in 2027.",
      qualifierCta:
        "Hello, I reviewed the Goal Grid requirements and I'm ready to commit to the programme.",
      pricingCta:
        "Hello, I would like to join the waitlist and learn about the ₦50,000 fee and instalment options.",
      howToJoinCta:
        "Hello, I would like to enquire about registering for the Goal Grid programme.",
      faqCta:
        "Hello, I have a question about the Goal Grid programme.",
      finalCta:
        "Hello, I'm ready to join the Goal Grid 2027 cohort. Please send me details.",
      floatingBubble:
        "Hello, I'm looking at Goal Grid and have a quick question.",
      footerLink:
        "Hello, I'm interested in Goal Grid and would like to speak with the advisory team.",
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

/**
 * Centralized WhatsApp Click-to-Chat URL Generator
 * Guarantees every CTA on the site uses the exact same routing logic,
 * configuration, and phone number.
 */
export function getWhatsAppUrl(
  messageKey?: keyof typeof siteConfig.contact.messages | string
): string {
  const phone = siteConfig.contact.whatsappPhone;
  let text = siteConfig.contact.defaultMessage;

  if (messageKey && messageKey in siteConfig.contact.messages) {
    text =
      siteConfig.contact.messages[
        messageKey as keyof typeof siteConfig.contact.messages
      ];
  } else if (messageKey && typeof messageKey === "string") {
    text = messageKey;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
