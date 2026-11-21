"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MessageCircle, Plus } from "lucide-react";
import { getWhatsAppUrl } from "@/config/site";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EASE_INOUT } from "@/lib/motion";

/**
 * FAQ accordion: ruled list, smooth height transition, +/× toggle, real <button aria-expanded>
 * controls with region labelling. Answers that depend on unconfirmed details route the visitor
 * to WhatsApp (with their question prefilled) instead of inventing an answer.
 */
export function FaqSection() {
  const { faq } = landingPageData;
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faqs" className="bg-surface-light">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
            <SectionLabel>{faq.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={faq.headline}
              className="font-heading text-[2.4rem] font-medium leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3rem]"
              lines={[{ text: "Frequently" }, { text: "Asked", className: "text-gold-600" }, { text: "Questions", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1} className="space-y-4">
              <p className="text-base text-charcoal-light">{faq.helpPrompt}</p>
              <WhatsAppButton messageKey="faqCta" variant="navy">
                {faq.ctaText}
              </WhatsAppButton>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-b border-navy/15">
              {faq.items.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.question} className="border-t border-navy/15">
                    <h3>
                      <button
                        type="button"
                        id={`faq-q-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-a-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors focus-visible:outline-offset-[-2px]"
                      >
                        <span
                          className={`font-heading text-lg font-medium leading-snug transition-colors duration-300 sm:text-xl ${
                            isOpen ? "text-navy" : "text-navy/80 group-hover:text-navy"
                          }`}
                        >
                          {item.question}
                        </span>
                        <span
                          className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                            isOpen
                              ? "rotate-45 border-gold bg-gold text-navy"
                              : "border-navy/25 text-navy group-hover:border-gold"
                          }`}
                          aria-hidden="true"
                        >
                          <Plus className="h-4 w-4" strokeWidth={2} />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-a-${i}`}
                          role="region"
                          aria-labelledby={`faq-q-${i}`}
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE_INOUT }}
                          className="overflow-hidden"
                        >
                          <div className="max-w-2xl space-y-4 pb-7 pr-12 text-base leading-relaxed text-charcoal-light sm:text-base">
                            <p>{item.answer}</p>
                            {item.statusNote && (
                              <Link
                                href={getWhatsAppUrl(`Hello, I have a question about the Goal Grid programme: ${item.question}`)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-700"
                              >
                                <MessageCircle className="h-4 w-4 text-gold-600" strokeWidth={1.75} aria-hidden="true" />
                                Ask the team on WhatsApp
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
