import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/content";

/**
 * Stats band — rebrand 2026-05-18: editorial table-of-numbers replacing the
 * 4-card warm-paper grid in commit 0db9765. Cool slate paper, large display
 * numerals, slate hairlines instead of gold accent stripes.
 * ID: #opportunity
 */
export function StatsSection() {
  return (
    <section
      id="opportunity"
      aria-label="By the numbers"
      className="relative bg-paper border-y border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <Reveal className="max-w-2xl mb-12 lg:mb-16">
          <p className="eyebrow">The economics</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[var(--color-ink)] leading-tight">
            Your clients are already paying someone for planning. The numbers
            are bigger than you think.
          </h2>
        </Reveal>

        <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 70}>
              <div className="grid grid-cols-[auto_1fr_2fr] lg:grid-cols-[64px_360px_1fr] gap-4 lg:gap-10 items-baseline py-6 lg:py-8">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate-soft)] pt-2">
                  0{i + 1}
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-[2.8rem] font-semibold text-[var(--color-ink)] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="text-[var(--color-ink-muted)] text-base lg:text-lg leading-snug">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-xs text-[var(--color-ink-muted)] italic max-w-3xl">
            * Per-case revenue and annual tax-savings figures reflect
            historical engagements documented in the active partner book and
            are not a promise of future results. Partnership economics vary by
            firm and are disclosed during qualification.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
