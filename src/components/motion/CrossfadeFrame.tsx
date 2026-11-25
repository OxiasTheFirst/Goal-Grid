"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, useReducedMotion } from "motion/react";
import { Pause, Play } from "lucide-react";

export interface CrossfadeSlide {
  src: string;
  alt: string;
  /** CSS object-position, tuned per image so the focal point (the face) sits in the same place. */
  position?: string;
  /** Direction of the slow drift, as CSS lengths (default 1.4% / 0.6%). */
  drift?: { x: string; y: string };
}

interface CrossfadeFrameProps {
  slides: CrossfadeSlide[];
  /** Time each image is held, in ms. */
  interval?: number;
  /** Crossfade length, in ms. */
  fade?: number;
  sizes?: string;
  /** Accessible name for the whole sequence. */
  label: string;
  className?: string;
}

/**
 * Cinematic identity-switch: every image occupies the SAME frame. The incoming image fades in on top of
 * the outgoing one (which stays opaque underneath, so there is never a dip to the background) while a slow
 * scale/position drift runs on the visible image.
 *
 * - Pure opacity + transform; no layout work, so it is cheap on mobile.
 * - Pauses when off-screen, when the tab is hidden, on hover/focus, and via an explicit pause button.
 * - Reduced motion: no autoplay, no fade, no drift. The first image is shown and the indicators
 *   switch images instantly on request.
 * - Only the visible image is exposed to assistive tech (the others are aria-hidden).
 */
export function CrossfadeFrame({ slides, interval = 6500, fade = 1800, sizes = "(min-width:1024px) 440px, 90vw", label, className = "" }: CrossfadeFrameProps) {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { margin: "0px 0px -10% 0px" });
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);

  const running = !reduce && !userPaused && !hover && !tabHidden && inView && slides.length > 1;
  const fadeMs = reduce ? 0 : fade;

  const goTo = useCallback((next: number) => {
    setIndex((cur) => {
      if (cur === next) return cur;
      setPrev(cur);
      return next;
    });
  }, []);

  // Autoplay: advance after each hold; restarts whenever the active image or the running state changes.
  useEffect(() => {
    if (!running) return;
    const t = window.setTimeout(() => goTo((index + 1) % slides.length), interval);
    return () => window.clearTimeout(t);
  }, [running, index, interval, slides.length, goTo]);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const playState = running ? "running" : "paused";

  return (
    <div
      ref={frameRef}
      role="group"
      aria-roledescription="image sequence"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`absolute inset-0 ${className}`}
    >
      {slides.map((s, i) => {
        const active = i === index;
        const outgoing = i === prev && !active;
        const visible = active || outgoing;
        return (
          <div
            key={s.src}
            aria-hidden={active ? undefined : true}
            className="absolute inset-0 overflow-hidden will-change-[opacity]"
            style={{
              opacity: visible ? 1 : 0,
              zIndex: active ? 2 : outgoing ? 1 : 0,
              transition: active && fadeMs ? `opacity ${fadeMs}ms cubic-bezier(0.4,0,0.2,1)` : "none",
            }}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={
                visible && !reduce
                  ? ({
                      animation: `gg-drift ${interval + fadeMs * 2}ms cubic-bezier(0.22,1,0.36,1) forwards`,
                      animationPlayState: playState,
                      "--gg-x": s.drift?.x ?? (i % 2 ? "-1.4%" : "1.4%"),
                      "--gg-y": s.drift?.y ?? "0.6%",
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes={sizes}
                quality={85}
                priority={i === 0}
                className="object-cover"
                style={{ objectPosition: s.position ?? "50% 30%" }}
              />
            </div>
          </div>
        );
      })}

      {/* Depth: restrained navy falloff + a low warm light, so the photographs sit inside the brand palette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-navy/65 via-transparent to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_38%,transparent_45%,rgba(20,38,66,0.28)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 z-10 h-56 w-56 rounded-full bg-gold/20 blur-[80px] mix-blend-soft-light" />

      {/* Indicators double as manual controls */}
      {slides.length > 1 && (
        <div className="absolute inset-x-5 bottom-5 z-20 flex items-center gap-3 sm:inset-x-6 sm:bottom-6">
          <div className="flex flex-1 gap-2" role="group" aria-label="Choose image">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show image ${i + 1} of ${slides.length}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
                className="group relative h-6 flex-1 focus-visible:outline-none"
              >
                <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-white/30 transition-[height] group-hover:h-[3px] group-focus-visible:h-[3px] group-focus-visible:ring-2 group-focus-visible:ring-gold">
                  {i === index && (
                    <span
                      key={index}
                      className="absolute inset-0 origin-left bg-gold"
                      style={
                        reduce
                          ? { transform: "scaleX(1)" }
                          : { animation: `gg-progress ${interval}ms linear forwards`, animationPlayState: playState }
                      }
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
          {!reduce && (
            <button
              type="button"
              onClick={() => setUserPaused((v) => !v)}
              aria-pressed={userPaused}
              aria-label={userPaused ? "Play image transition" : "Pause image transition"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-navy/50 text-white backdrop-blur transition-colors hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {userPaused ? <Play className="h-3.5 w-3.5" aria-hidden="true" /> : <Pause className="h-3.5 w-3.5" aria-hidden="true" />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
