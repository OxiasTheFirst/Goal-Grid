import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

/** Three confirmed structural pillars as an oversized-type triptych (distinct from the Inclusions ledger). */
const words = ["Daily", "Weekly", "Together"];

export function AccountabilitySection() {
  const { accountability } = landingPageData;

  return (
    <section id="accountability" className="bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="max-w-4xl space-y-8">
          <SectionLabel>{accountability.badge}</SectionLabel>
          <MaskedTextReveal
            as="h2"
            label={accountability.headline}
            className="font-heading text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[3.4rem]"
            lines={[{ text: "The Programme Structure" }, { text: <>That Drives <span className="whitespace-nowrap">Follow-Through</span></>, className: "text-gold-600" }]}
          />
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-charcoal-light sm:text-lg">{accountability.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-3 lg:gap-0">
          {accountability.pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="border-t-2 border-navy pt-6 lg:pr-10 lg:[&:not(:first-child)]:pl-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-l-navy/15"
            >
              <p
                aria-hidden="true"
                className="font-heading text-[3.5rem] font-semibold leading-none tracking-[-0.03em] text-outline-light sm:text-7xl lg:text-[3.1rem] xl:text-[4.25rem]"
              >
                {words[i]}
              </p>
              <p className="mt-6 font-body font-medium text-[11px] uppercase tracking-[0.16em] text-gold-700">Pillar 0{i + 1}</p>
              <h3 className="mt-2 font-heading text-xl font-medium text-navy">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal-light">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
