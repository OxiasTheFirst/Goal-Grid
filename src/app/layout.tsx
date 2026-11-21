import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
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
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Goal Grid — 3-Month Goal Execution Programme for Business Owners",
  description:
    "Don't Just Set the Goal. Build the Path to Achieve It. Goal Grid is a practical 3-month programme from BMB Strategy & Advisory designed to help business owners execute with structure, discipline, and momentum.",
  keywords: [
    "Goal Grid",
    "BMB Strategy & Advisory",
    "business goals",
    "goal execution programme",
    "business strategy",
    "accountability",
  ],
  authors: [{ name: "BMB Strategy & Advisory Ltd." }],
  openGraph: {
    title: "Goal Grid — 3-Month Goal Execution Programme for Business Owners",
    description:
      "Don't Just Set the Goal. Build the Path to Achieve It. January to March 2027.",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
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
