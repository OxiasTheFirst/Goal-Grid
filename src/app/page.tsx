import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { GridMethodSection } from "@/components/sections/GridMethodSection";
import { InclusionsSection } from "@/components/sections/InclusionsSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { AudienceQualifierSection } from "@/components/sections/AudienceQualifierSection";
import { HostSection } from "@/components/sections/HostSection";
import { AccountabilitySection } from "@/components/sections/AccountabilitySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { HowToJoinSection } from "@/components/sections/HowToJoinSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal antialiased selection:bg-gold/20 selection:text-navy">
      {/* 01–02. Fixed header (contains the announcement strip) floating over the hero */}
      <Header />

      <main className="flex-1">
        {/* 03. Hero Section & Key Facts Ribbon */}
        <HeroSection />

        {/* 04. The Problem / Illustrative Business Owner Experiences */}
        <ProblemSection />

        {/* 05. The GRID Method Framework */}
        <GridMethodSection />

        {/* 06. Programme Inclusions ("What You Get") */}
        <InclusionsSection />

        {/* 07. Programme Outcomes ("What You Stand to Gain") */}
        <OutcomesSection />

        {/* 08. Audience Qualifier ("Is This For You?") */}
        <AudienceQualifierSection />

        {/* 09. Meet the Host */}
        <HostSection />

        {/* 10. Accountability Architecture (Credibility / Systemic Execution) */}
        <AccountabilitySection />

        {/* 11. Programme Investment & Pricing */}
        <PricingSection />

        {/* 12. How to Join (5 Simple Steps) */}
        <HowToJoinSection />

        {/* 13. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 14. Final Call to Action Card */}
        <FinalCtaSection />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
