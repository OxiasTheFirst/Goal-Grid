import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
    <html lang="en" className={`${sora.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white text-charcoal font-body antialiased">
        {children}
      </body>
    </html>
  );
}
