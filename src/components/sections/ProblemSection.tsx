import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CtaButton } from "@/components/ui/CtaButton";
import { Rich } from "@/components/ui/Rich";

/**
 * Problem: typography-led and light. The four experiences are set as an editorial list
 * (not quote cards, and explicitly labelled illustrative, never testimonials).
 * The section ends on a full-bleed photographic moment that carries the closing statement
 * and leads into the dark GRID section.
 */
export function ProblemSection() {
  const { problem } = landingPageData;

  return (
    <section id="problem" className="bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-8">
            <SectionLabel>{problem.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={problem.headline}
              className="font-heading text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-navy sm:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
              lines={[{ text: "You Have" }, { text: "the Goal." }, { text: "Where Is", className: "text-gold-600" }, { text: "the Plan?", className: "text-gold-600" }]}
            />
            <Reveal delay={0.2}>
              <p className="max-w-md text-base leading-relaxed text-charcoal-light sm:text-lg lg:text-xl lg:leading-relaxed"><Rich text={problem.context} strongClassName="font-semibold text-navy" /></p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-2 font-body font-bold text-xs uppercase tracking-[0.16em] text-navy sm:text-[13px]">
                {problem.subtitle}
              </p>
            </Reveal>
            <ul>
              {problem.experiences.map((e, i) => (
                <li key={e.quote}>
                  <Reveal delay={0.05} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-navy/15 py-8 sm:grid-cols-[4rem_1fr] sm:py-10">
                    <span className="pt-2 font-heading font-medium tabular-nums text-xs text-gold-700">0{i + 1}</span>
                    <div>
                      <p className="font-heading text-[1.6rem] font-medium leading-[1.25] tracking-tight text-navy/70 sm:text-[2.1rem] sm:leading-[1.2]">
                        <Rich
                          text={e.quote.replace(/^["“]|["”]$/g, "")}
                          strongClassName="font-bold text-navy decoration-gold decoration-[3px] underline underline-offset-[6px] [text-decoration-skip-ink:none]"
                        />
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
              <li className="border-t border-navy/15" aria-hidden="true" />
            </ul>
          </div>
        </div>
      </div>

      {/* Photographic transition */}
      <div className="grain relative isolate flex min-h-[34rem] items-center overflow-hidden bg-navy py-24 lg:min-h-[44rem]">
        <ParallaxImage
          src="/images/hero-executive-grid.jpg"
          imgClassName="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 via-[45%] to-navy/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy/80" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
          <MaskedTextReveal
            as="p"
            label={problem.closingStatement}
            className="max-w-4xl font-heading text-[1.65rem] font-semibold leading-[1.14] tracking-[-0.025em] text-white min-[400px]:text-[1.85rem] sm:text-5xl lg:text-6xl"
            lines={[
              { text: "You can be busy" },
              { text: "every day and still" },
              { text: "feel like your business" },
              { text: "is not moving forward." },
              { text: "Goal Grid changes that.", className: "text-gold" },
            ]}
          />
          <Reveal delay={0.5} className="mt-10">
            <CtaButton kind="startHere" tone="dark" size="lg" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
