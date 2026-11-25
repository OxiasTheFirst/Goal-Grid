"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ClipboardList, Info, MessageCircle, UserPlus, type LucideIcon } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { resolveCta } from "@/config/site";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";

const routeIcons: Record<string, LucideIcon> = { signUp: UserPlus, startHere: ClipboardList, contact: MessageCircle };

/**
 * How to join: three distinct routes, each with its own purpose, label and destination.
 *   Sign Up → Sellar · Start Here → Google Form · Chat / Enquiry → WhatsApp.
 * They are alternatives, not a sequence. The vertical path animation from Phase 1 is retained.
 * While the Sellar / Google Form URLs are pending, those two buttons render disabled here and a
 * plain-language note explains why. No fake link is published.
 */
export function HowToJoinSection() {
  const { howToJoin } = landingPageData;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const fixed = useMotionValue(1);

  return (
    <section id="how-to-join" className="bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <SectionLabel>{howToJoin.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={howToJoin.headline}
              className="font-heading text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[{ text: "Three Ways" }, { text: "to Begin", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-charcoal-light sm:text-lg">{howToJoin.subtitle}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="inline-block border-l-2 border-gold pl-4 font-heading text-lg font-semibold text-navy">
                {howToJoin.registrationOpens}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div aria-hidden="true" className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-navy/15">
                <motion.div className="h-full origin-top bg-gold" style={{ scaleY: reduce ? fixed : smooth }} />
              </div>
              <ol ref={ref} className="space-y-14">
                {howToJoin.routes.map((r) => {
                  const Icon = routeIcons[r.kind];
                  const pending = r.kind === "contact" ? false : resolveCta(r.kind).pending;
                  return (
                    <li key={r.kind} className="relative pl-16 sm:pl-20">
                      <span className="absolute left-0 top-0 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border border-gold bg-white text-navy">
                        <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <Reveal>
                        <h3 className="font-heading text-xl font-semibold tracking-tight text-navy sm:text-2xl">{r.title}</h3>
                        <p className="mt-2 max-w-lg text-base leading-relaxed text-charcoal-light">{r.description}</p>
                        <div className="mt-5 flex flex-wrap items-center gap-3">
                          {r.kind === "signUp" && <CtaButton kind="signUp" tone="light" size="lg" disableWhenPending />}
                          {r.kind === "startHere" && <CtaButton kind="startHere" tone="light" size="lg" disableWhenPending />}
                          {r.kind === "contact" && (
                            <CtaButton kind="chat" tone="light" />
                          )}
                        </div>
                        {pending && r.pendingNote && (
                          <p className="mt-3 text-sm text-charcoal-muted">{r.pendingNote}</p>
                        )}
                      </Reveal>
                    </li>
                  );
                })}
              </ol>
            </div>

            <Reveal className="mt-14 flex items-start gap-3 border-t border-navy/15 pt-6 text-sm leading-relaxed text-charcoal-light">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-600" strokeWidth={1.75} aria-hidden="true" />
              <span>{howToJoin.clarificationNote}</span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
