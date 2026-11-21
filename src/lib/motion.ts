/**
 * Goal Grid motion tokens.
 * One easing family and a small set of durations keep every section moving
 * with the same "weight". Import from here instead of hard-coding curves.
 */
export const EASE_REVEAL = [0.22, 1, 0.36, 1] as const; // settles softly, used for masked lines
export const EASE_SOFT = [0.16, 1, 0.3, 1] as const; // general entrances
export const EASE_INOUT = [0.65, 0, 0.35, 1] as const; // lines, wipes, accordions

export const DUR = {
  fast: 0.3,
  base: 0.7,
  slow: 1.1,
  line: 1.15,
} as const;

/** Viewport config shared by scroll-triggered reveals. */
export const VIEWPORT_ONCE = { once: true, amount: 0.25 } as const;
