import Image from "next/image";
import { siteConfig } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/** Closing scene: the skyline from the hero photograph (a different crop), BMB identity, one clear action. */
export function FinalCtaSection() {
  const { finalCta } = landingPageData;

  return (
    <section id="join" className="grain relative isolate flex min-h-[44rem] items-center overflow-hidden bg-navy text-white lg:min-h-[52rem]">
      <ParallaxImage src="/images/hero-cinematic-bg.jpg" imgClassName="object-cover object-[88%_20%] scale-125 origin-[88%_20%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy via-navy/70 to-navy" />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/35" />

      <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Reveal className="mb-10 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={siteConfig.brand.logoNavy}
              alt="BMB"
              width={140}
              height={50}
              className="h-11 w-auto brightness-0 invert"
            />
            <p className="text-[10px] uppercase leading-none tracking-[0.16em] text-gold sm:text-xs">Strategy and Advisory Limited</p>
          </div>
          <p className="font-body font-medium text-[11px] uppercase tracking-[0.18em] text-gold">{finalCta.badge}</p>
        </Reveal>

        <MaskedTextReveal
          as="h2"
          label={finalCta.headline}
          className="mx-auto max-w-4xl font-heading text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl"
          lines={[
            { text: "Another Year" },
            { text: "With the Same" },
            { text: "Unfinished Goal," },
            { text: "or 12 Weeks", className: "text-gold" },
            { text: "That Change It?", className: "text-gold" },
          ]}
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{finalCta.subheadline}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CtaButton kind="signUp" tone="dark" size="lg" />
            <CtaButton kind="startHere" tone="dark" size="lg" />
          </div>
          <p className="mt-2 text-sm font-semibold text-gold">{finalCta.pricingNote}</p>
          <p className="max-w-md text-sm text-white/60">{finalCta.closingNote}</p>
          <CtaButton kind="chat" tone="dark" className="mt-2" />
        </Reveal>
      </div>
    </section>
  );
}
