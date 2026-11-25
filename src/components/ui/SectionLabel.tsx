/**
 * Shared eyebrow: uppercase editorial section label with a gold rule.
 * Final pass: ~2× larger and bold (17px mobile → 20px sm → 24px lg), rule lengthened to stay balanced.
 * `emphasis` adds italic for the one label the client asked to be bold + italic.
 */
export function SectionLabel({
  children,
  tone = "light",
  emphasis = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  emphasis?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 sm:gap-4 font-body font-bold text-[17px] leading-tight sm:text-xl lg:text-2xl uppercase tracking-[0.12em] sm:tracking-[0.14em] ${
        emphasis ? "italic" : ""
      } ${tone === "dark" ? "text-gold" : "text-gold-700"}`}
    >
      <span className="h-[2px] w-8 flex-shrink-0 bg-gold sm:w-12 lg:w-16" aria-hidden="true" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}
