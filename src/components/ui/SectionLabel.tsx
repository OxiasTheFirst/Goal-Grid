/**
 * Shared eyebrow: small uppercase label with a gold rule. Bold and emphatic by design (final pass).
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
      className={`flex items-center gap-3 font-body font-bold text-xs sm:text-[13px] uppercase tracking-[0.18em] ${
        emphasis ? "italic" : ""
      } ${tone === "dark" ? "text-gold" : "text-gold-700"}`}
    >
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
