import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { TESTIMONIALS } from "@/lib/content";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-paper py-20 lg:py-28 border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Why partner firms choose us</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
            What managing partners say after their first year in the program.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Composite voice-of-customer drawn from active program partners.
            Full partner names and firm identifiers available on request
            during the qualification call.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.org} delay={i * 120}>
              <figure className="h-full bg-[var(--color-surface)] rounded-2xl border border-[var(--color-line)] shadow-sm p-7 relative overflow-hidden flex flex-col">
                {/* Large quote mark (editorial) */}
                <svg
                  className="absolute -top-2 -left-1 w-24 h-24 text-[var(--color-gold)]/10"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10 8v6H6v6H2v-8c0-2 2-4 4-4h4zm16 0v6h-4v6h-4v-8c0-2 2-4 4-4h4z" />
                </svg>

                {/* 5-star row */}
                <div className="relative flex gap-1 mb-4" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-[var(--color-gold)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <blockquote className="relative text-[var(--color-ink)] text-base sm:text-[1.02rem] leading-relaxed font-display italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="relative mt-6 pt-5 border-t border-[var(--color-line)] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-[var(--color-gold-100)] flex items-center justify-center font-display font-semibold text-sm flex-shrink-0">
                    {t.org.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--color-accent)] text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-[var(--color-ink-muted)]">
                      {t.org}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PrimaryCTA />
        </Reveal>
      </div>
    </section>
  );
}
