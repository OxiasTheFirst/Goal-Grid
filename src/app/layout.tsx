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

const orgId = `${siteConfig.url}/#organization`;
const siteId = `${siteConfig.url}/#website`;

// Verified facts only: names, URL, logo, programme description. No address, socials, ratings, reviews or events.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.legalEntity,
      url: siteConfig.url,
      logo: `${siteConfig.url}${siteConfig.brand.logoBadge}`,
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en-GB",
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: `${siteConfig.url}/`,
      name: siteConfig.seo.title,
      description: siteConfig.seo.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": siteId },
      about: { "@id": orgId },
      primaryImageOfPage: { "@type": "ImageObject", url: `${siteConfig.url}${siteConfig.seo.ogImage}`, width: 1200, height: 630 },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalEntity }],
  creator: siteConfig.legalEntity,
  publisher: siteConfig.legalEntity,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: siteConfig.seo.ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.ogDescription,
    images: [siteConfig.seo.ogImage],
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
        <script
          type="application/ld+json"
          // Static, first-party JSON only; "<" escaped so the payload can never close the script tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
