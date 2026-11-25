"use client";

import { useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronUp, ShieldCheck, Users } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { hostProfile } from "@/data/host-profile";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { CrossfadeFrame, type CrossfadeSlide } from "@/components/motion/CrossfadeFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Host. The three supplied professional photographs share one fixed 4:5 frame and cross-fade
 * (CrossfadeFrame). Beside it: name, title, tagline and the opening excerpt of the host's own biography
 * (src/data/host-profile.ts, verbatim). "Read Full Profile" is an accessible disclosure (button with
 * aria-expanded/aria-controls) that opens the complete biography below. The full text is always in the
 * HTML; when collapsed it is only visually hidden (visibility:hidden), so it is never gated behind JS.
 */
const dutyIcons = [Calendar, Users, ShieldCheck];

/** Order chosen from the images themselves: warm direct welcome → mid-gesture teaching → composed authority. */
const hostSlides: CrossfadeSlide[] = [
  {
    src: "/images/host/goal-grid-host-01-welcome.jpg",
    alt: "Bolaji Babalola, the Goal Grid host, smiling at the camera, in a grey suit with a blue paisley tie and round gold-framed glasses",
    position: "50% 30%",
    drift: { x: "1.4%", y: "0.8%" },
  },
  {
    src: "/images/host/goal-grid-host-02-teaching.jpg",
    alt: "Bolaji Babalola mid-explanation, gesturing as he teaches, in a grey suit with a blue lapel flower",
    position: "50% 30%",
    drift: { x: "-1.4%", y: "0.6%" },
  },
  {
    src: "/images/host/goal-grid-host-03-composed.jpg",
    alt: "Bolaji Babalola in a composed, confident pose with one arm raised, wearing a grey suit and blue lapel flower",
    position: "50% 30%",
    drift: { x: "1.2%", y: "0.4%" },
  },
];

export function HostSection() {
  const { host } = landingPageData;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = "host-full-profile";
  const collapse = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <section id="host" className="bg-surface-light">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Portrait frame */}
          <Reveal className="lg:col-span-5">
            <div className="grain relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-navy shadow-[0_30px_60px_-30px_rgba(20,38,66,0.55)]">
              <CrossfadeFrame
                slides={hostSlides}
                label={`${hostProfile.name}, Goal Grid programme host: photographs`}
              />
              {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((c) => (
                <span key={c} aria-hidden="true" className={`pointer-events-none absolute z-30 h-5 w-5 border-gold/80 ${c}`} />
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-7">
            <SectionLabel>{host.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={host.headline}
              className="font-heading text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[{ text: "Programme Leadership" }, { text: "& Host Advisory", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1}>
              <div className="border-l-2 border-gold pl-5">
                <h3 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-navy sm:text-4xl">{hostProfile.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-[0.14em] text-charcoal-muted sm:text-[13px]">
                  {hostProfile.title}
                </p>
                <p className="mt-3 font-heading text-lg font-semibold text-gold-700">{hostProfile.tagline}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-2xl text-base leading-relaxed text-charcoal-light sm:text-lg">{hostProfile.excerpt}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <button
                ref={toggleRef}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className="group inline-flex min-h-[48px] items-center gap-3 border border-navy bg-navy px-6 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-gold hover:bg-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {open ? "Collapse Profile" : "Read Full Profile"}
                {open ? <ChevronUp className="h-4 w-4 text-gold" aria-hidden="true" /> : <ChevronDown className="h-4 w-4 text-gold" aria-hidden="true" />}
              </button>
            </Reveal>
          </div>
        </div>

        {/* Full biography: verbatim, always in the DOM; collapsed = height 0 + visibility hidden. */}
        <div
          id={panelId}
          role="region"
          aria-label={`${hostProfile.name}: full professional profile`}
          className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className={`overflow-hidden ${open ? "visible" : "invisible"}`}>
            <div className="mt-14 border-t-2 border-gold bg-white px-5 py-10 shadow-[0_30px_60px_-40px_rgba(20,38,66,0.35)] sm:px-10 lg:mt-16 lg:px-14 lg:py-14">
              {hostProfile.sections.map((sec) => (
                <section
                  key={sec.heading}
                  className="grid gap-4 border-b border-navy/10 py-8 first:pt-0 lg:grid-cols-12 lg:gap-12 lg:py-10"
                >
                  <h4 className="font-heading text-sm font-semibold uppercase leading-snug tracking-[0.14em] text-gold-700 lg:col-span-4 lg:pr-6">
                    {sec.heading}
                  </h4>
                  <div className="space-y-5 lg:col-span-8">
                    {sec.blocks.map((b) => {
                      const rest = b.label ? b.text.slice(b.label.length + 1) : null;
                      return b.label ? (
                        <p key={b.text} className="max-w-[68ch] border-l-2 border-gold/60 pl-4 text-base leading-[1.75] text-charcoal-light">
                          <strong className="font-semibold text-navy">{b.label}:</strong>
                          {rest}
                        </p>
                      ) : (
                        <p key={b.text} className="max-w-[68ch] text-base leading-[1.75] text-charcoal-light">
                          {b.text}
                        </p>
                      );
                    })}
                  </div>
                </section>
              ))}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={collapse}
                  className="inline-flex min-h-[44px] items-center gap-2 border border-navy/30 px-5 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-colors hover:border-gold hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Collapse Profile
                  <ChevronUp className="h-4 w-4 text-gold-600" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-10 lg:mt-16 lg:grid-cols-3">
          {host.duties.map((d, i) => {
            const Icon = dutyIcons[i] ?? ShieldCheck;
            return (
              <li key={d}>
                <Reveal className="flex items-start gap-4 border-t border-navy/15 py-5">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-base leading-snug text-charcoal">{d}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
