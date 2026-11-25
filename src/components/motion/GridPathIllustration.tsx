"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";

/**
 * Editorial illustration for the GRID Method: four isometric blocks climb diagonally, one per step
 * (G Goal → R Roadmap → I Implementation → D Discipline). A gold path hops from block to block and
 * ends at a flag. It reuses the isometric tile language of the stage markers below it, so the picture and the
 * four steps read as one system.
 *
 * Scroll-linked: the path draws, and each block rises and turns gold as the path reaches it.
 * Reduced motion: the finished composition is shown statically.
 * Decorative for assistive tech (the four steps are fully described in text beside/below it).
 */

const S = 44; // px per grid unit
const C30 = Math.cos(Math.PI / 6);
const OX = 96;
const OY = 392;
const iso = (x: number, y: number, z = 0): [number, number] => [OX + (x - y) * C30 * S, OY + (x + y) * 0.5 * S - z * S];
const pt = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
const poly = (ps: [number, number][]) => ps.map(pt).join(" ");

const W = 1.7; // block footprint
const GAP = 2.0; // step between block origins along the diagonal
const HEIGHTS = [0.7, 1.6, 2.5, 3.4];
const LETTERS = ["G", "R", "I", "D"];

const NAVY_TOP = "rgb(34,57,88)";
const GOLD = "rgb(201,164,92)";

function Block({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const x0 = i * GAP;
  const y0 = -i * GAP;
  const x1 = x0 + W;
  const y1 = y0 + W;
  const h = HEIGHTS[i];
  const t = (i + 0.6) / 4.6; // progress at which the path reaches this block

  const rise = useTransform(progress, [t - 0.2, t], [28, 0]);
  const opacity = useTransform(progress, [t - 0.22, t - 0.06], [0, 1]);
  const topFill = useTransform(progress, [t - 0.02, t + 0.06], [NAVY_TOP, GOLD]);
  const letterFill = useTransform(progress, [t - 0.02, t + 0.06], ["rgb(201,164,92)", "rgb(20,38,66)"]);

  const top = poly([iso(x0, y0, h), iso(x1, y0, h), iso(x1, y1, h), iso(x0, y1, h)]);
  const left = poly([iso(x0, y1, h), iso(x1, y1, h), iso(x1, y1, 0), iso(x0, y1, 0)]);
  const right = poly([iso(x1, y0, h), iso(x1, y1, h), iso(x1, y1, 0), iso(x1, y0, 0)]);
  const shadow = poly([iso(x0 + 0.5, y0 + 0.5, 0), iso(x1 + 0.9, y0 + 0.5, 0), iso(x1 + 0.9, y1 + 0.9, 0), iso(x0 + 0.5, y1 + 0.9, 0)]);
  const [cx, cy] = iso(x0 + W / 2, y0 + W / 2, h);

  return (
    <motion.g style={{ y: rise, opacity }}>
      <polygon points={shadow} fill="rgba(5,12,24,0.35)" />
      <polygon points={left} fill="#1b3354" stroke="rgba(201,164,92,0.45)" strokeWidth="1" strokeLinejoin="round" />
      <polygon points={right} fill="#0f1f38" stroke="rgba(201,164,92,0.45)" strokeWidth="1" strokeLinejoin="round" />
      <motion.polygon points={top} style={{ fill: topFill }} stroke="rgba(201,164,92,0.85)" strokeWidth="1.25" strokeLinejoin="round" />
      {/* Letter lies flat on the top face */}
      <motion.text
        transform={`matrix(${C30 * S} ${0.5 * S} ${-C30 * S} ${0.5 * S} ${cx} ${cy})`}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="1.05"
        fontWeight="700"
        style={{ fill: letterFill, fontFamily: "var(--font-space-grotesk), system-ui, sans-serif" }}
      >
        {LETTERS[i]}
      </motion.text>
    </motion.g>
  );
}

export function GridPathIllustration({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "end 45%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const fixed = useMotionValue(1);
  const progress = reduce ? fixed : smooth;
  const pathLength = useTransform(progress, [0.04, 0.96], [0, 1]);
  const flagOpacity = useTransform(progress, [0.86, 1], [0, 1]);

  // Path: hops from the start mark, over each block's top-face centre, ending at the flag pole.
  const centres = HEIGHTS.map((h, i) => iso(i * GAP + W / 2, -i * GAP + W / 2, h));
  const start = iso(-1.1, 0.9, 0);
  const hop = (a: [number, number], b: [number, number]) => {
    const mx = (a[0] + b[0]) / 2;
    const my = Math.min(a[1], b[1]) - 34;
    return `Q ${mx.toFixed(1)} ${my.toFixed(1)} ${pt(b)}`;
  };
  const d = `M ${pt(start)} ${hop(start, centres[0])} ${centres.slice(1).map((c, i) => hop(centres[i], c)).join(" ")}`;

  const last = centres[3];
  const poleTop: [number, number] = [last[0], last[1] - 2.3 * S];

  // Floor grid
  const floor: React.ReactElement[] = [];
  for (let k = -3; k <= 9; k++) {
    const a = iso(k, -9, 0);
    const b = iso(k, 3, 0);
    floor.push(<line key={`x${k}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />);
    const c = iso(-3, -k, 0);
    const e = iso(9, -k, 0);
    floor.push(<line key={`y${k}`} x1={c[0]} y1={c[1]} x2={e[0]} y2={e[1]} />);
  }

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg viewBox="10 128 620 330" className="h-auto w-full overflow-visible" role="presentation">
        <defs>
          <radialGradient id="gg-floor-fade" cx="52%" cy="62%" r="62%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="gg-floor-mask">
            <rect x="-200" y="-200" width="1040" height="900" fill="url(#gg-floor-fade)" />
          </mask>
        </defs>

        <g mask="url(#gg-floor-mask)" stroke="rgba(255,255,255,0.16)" strokeWidth="1">
          {floor}
        </g>

        {HEIGHTS.map((_, i) => (
          <Block key={i} i={i} progress={progress} />
        ))}

        {/* Path */}
        <motion.path d={d} fill="none" stroke="rgba(201,164,92,0.22)" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <motion.path d={d} fill="none" stroke={GOLD} strokeWidth="2.5" strokeLinecap="round" style={{ pathLength }} />
        <circle cx={start[0]} cy={start[1]} r="5" fill="none" stroke={GOLD} strokeWidth="2" />
        <circle cx={start[0]} cy={start[1]} r="1.8" fill={GOLD} />

        {/* Flag on the final block */}
        <motion.g style={{ opacity: flagOpacity }}>
          <line x1={last[0]} y1={last[1]} x2={poleTop[0]} y2={poleTop[1]} stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinecap="round" />
          <polygon points={`${poleTop[0]},${poleTop[1]} ${poleTop[0] + 46},${poleTop[1] + 15} ${poleTop[0]},${poleTop[1] + 30}`} fill={GOLD} />
        </motion.g>
      </svg>
    </div>
  );
}
