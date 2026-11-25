import { Fragment } from "react";

/**
 * Tiny inline-emphasis helper: wraps **phrases** in <strong>. Lets copy carry deliberate emphasis
 * (a key phrase, not a whole paragraph) without HTML in the content file.
 */
export function Rich({ text, strongClassName = "font-semibold" }: { text: string; strongClassName?: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={strongClassName}>
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

/** Plain-text version (for aria-labels / metadata). */
export const stripEmphasis = (text: string) => text.replace(/\*\*/g, "");
