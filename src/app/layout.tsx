import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

// Typography system: Space Grotesk for display/headings, DM Sans for body and interface.
// Only the weights actually used are loaded. next/font self-hosts them and generates
// size-adjusted fallbacks, so swapping fonts causes minimal layout shift.
// latin-ext is required for the Naira sign (₦, U+20A6), which Space Grotesk only ships there.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

// DM Sans has no ₦ glyph; Space Grotesk is its glyph-level fallback (see tailwind.config.ts).
// Display serif used ONLY for the large G·R·I·D letters (client request, final pass): a high-contrast,
// authoritative serif that reads as premium corporate advisory. Not used anywhere else.
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Goal Grid — 12-Week Goal Execution Programme for Business Owners and Career Professionals",
  description:
    "Don't Just Set the Goal. Build the Path to Achieve It. Goal Grid is a practical 12-week programme from BMB Strategy and Advisory Limited designed to help business owners and career professionals execute with structure, discipline, and momentum.",
  keywords: [
    "Goal Grid",
    "BMB Strategy and Advisory Limited",
    "business goals",
    "career professionals",
    "goal execution programme",
    "business strategy",
    "accountability",
  ],
  authors: [{ name: "BMB Strategy and Advisory Limited" }],
  openGraph: {
    title: "Goal Grid — 12-Week Goal Execution Programme for Business Owners and Career Professionals",
    description:
      "Don't Just Set the Goal. Build the Path to Achieve It. A 12-week programme. Registration opens 1 December 2026.",
    url: siteConfig.url,
    siteName: "Goal Grid",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/brand/bmb-logo-navy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen bg-white text-charcoal font-body antialiased">
        {/* Without JS the entrance animations can never run: show all content in its final state. */}
        <noscript>
          <style>{`[style*="opacity: 0"],[style*="opacity:0"]{opacity:1!important;transform:none!important}h1 > span > span,h2 > span > span,p > span > span{transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
