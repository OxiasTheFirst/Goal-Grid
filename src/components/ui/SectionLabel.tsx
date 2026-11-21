export function SectionLabel({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`flex items-center gap-3 font-body font-medium text-[11px] sm:text-xs uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-gold" : "text-gold-700"
      }`}
    >
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}
