import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { PAIN_POINTS } from "@/lib/content";

/**
 * Pain section — what's broken at the ICP's firm today.
 * ID: #challenges (SEO-friendly anchor for "CPA firm wealth management" topic)
 */
export function PainSection() {
  return (
    <section
      id="challenges"
      className="bg-[var(--color-surface)] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">The firm problem</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-ink)]">
            Three things quietly draining every CPA firm with high-income
            clients.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Every partner we talk to already knows about these. Most are
            waiting for the right moment to fix them — and the right partner
            to make it realistic.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full bg-white border border-[var(--color-line)] rounded-2xl p-7 hover:border-[var(--color-primary)]/40 hover:shadow-sm transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5">
                  <span className="font-display text-[var(--color-primary)] text-lg font-semibold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-[var(--color-ink)] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem]">
                  {p.body}
                </p>
              </div>
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
