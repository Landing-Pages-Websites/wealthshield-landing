import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { PAIN_POINTS } from "@/lib/content";

/**
 * Pain section — rebrand 2026-05-18: editorial 3-up with oversized display
 * numerals at top-left, narrow rule, large heading. Departure from the
 * card-grid + navy-badge treatment in commit 0db9765.
 * ID: #challenges
 */
export function PainSection() {
  return (
    <section
      id="challenges"
      className="bg-[var(--color-surface)] py-20 lg:py-28 relative"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The firm problem</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-ink)] heading-rule">
            Three things quietly draining every CPA firm with high-income
            clients.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Every partner we talk to already knows about these. Most are
            waiting for the right moment to fix them — and the right partner
            to make it realistic.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="relative pl-0 pr-2 pt-6 border-t border-[var(--color-line)]">
                <div className="absolute -top-1 left-0 index-numeral text-[var(--color-slate-soft)] opacity-70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-16">
                  <h3 className="font-display text-xl sm:text-[1.45rem] font-semibold text-[var(--color-ink)] leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem]">
                    {p.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PrimaryCTA variant="default" label="Schedule a Strategy Call" />
        </Reveal>
      </div>
    </section>
  );
}
