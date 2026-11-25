import { Calendar, ShieldCheck, Users } from "lucide-react";
import { landingPageData } from "@/data/landing-page-data";
import { MaskedTextReveal } from "@/components/motion/MaskedTextReveal";
import { Reveal } from "@/components/motion/Reveal";
import { CrossfadeFrame, type CrossfadeSlide } from "@/components/motion/CrossfadeFrame";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Host. The three supplied professional photographs share one fixed 4:5 frame and cross-fade
 * (CrossfadeFrame). Each was cropped to the same eye line and head scale so the face never jumps.
 * No biography, credentials or quotes have been supplied, so none are invented; only the programme role
 * and confirmed duties appear. The pending biography is tracked in docs/HANDOVER.md, not shown publicly.
 */
const dutyIcons = [Calendar, Users, ShieldCheck];

/** Order chosen from the images themselves: warm direct welcome → mid-gesture teaching → composed authority. */
const hostSlides: CrossfadeSlide[] = [
  {
    src: "/images/host/goal-grid-host-01-welcome.jpg",
    alt: "Goal Grid programme host smiling at the camera, in a grey suit with a blue paisley tie and round gold-framed glasses",
    position: "50% 30%",
    drift: { x: "1.4%", y: "0.8%" },
  },
  {
    src: "/images/host/goal-grid-host-02-teaching.jpg",
    alt: "The Goal Grid host mid-explanation, gesturing as he teaches, in a grey suit with a blue lapel flower",
    position: "50% 30%",
    drift: { x: "-1.4%", y: "0.6%" },
  },
  {
    src: "/images/host/goal-grid-host-03-composed.jpg",
    alt: "The Goal Grid host in a composed, confident pose with one arm raised, wearing a grey suit and blue lapel flower",
    position: "50% 30%",
    drift: { x: "1.2%", y: "0.4%" },
  },
];

export function HostSection() {
  const { host } = landingPageData;

  return (
    <section id="host" className="bg-surface-light">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Portrait frame */}
          <Reveal className="lg:col-span-5">
            <div className="grain relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-navy shadow-[0_30px_60px_-30px_rgba(20,38,66,0.55)]">
              <CrossfadeFrame
                slides={hostSlides}
                label={`${host.name.replace(/^@/, "")}, Goal Grid programme host: photographs`}
              />
              {["top-4 left-4 border-t border-l", "top-4 right-4 border-t border-r", "bottom-4 left-4 border-b border-l", "bottom-4 right-4 border-b border-r"].map((c) => (
                <span key={c} aria-hidden="true" className={`pointer-events-none absolute z-30 h-5 w-5 border-gold/80 ${c}`} />
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-8">
            <SectionLabel>{host.badge}</SectionLabel>
            <MaskedTextReveal
              as="h2"
              label={host.headline}
              className="font-heading text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-navy sm:text-5xl lg:text-[2.6rem] xl:text-[3.25rem]"
              lines={[{ text: "Programme Leadership" }, { text: "& Host Advisory", className: "text-gold-600" }]}
            />
            <Reveal delay={0.1}>
              <div className="border-l-2 border-gold pl-5">
                <p className="font-heading text-2xl font-semibold text-navy">{host.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-muted">
                  {host.role} · {host.organization}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-xl text-base leading-relaxed text-charcoal-light sm:text-lg">{host.biography}</p>
            </Reveal>
            <ul>
              {host.duties.map((d, i) => {
                const Icon = dutyIcons[i] ?? ShieldCheck;
                return (
                  <li key={d}>
                    <Reveal className="flex items-start gap-4 border-t border-navy/15 py-4">
                      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-base leading-snug text-charcoal">{d}</span>
                    </Reveal>
                  </li>
                );
              })}
              <li className="border-t border-navy/15" aria-hidden="true" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
