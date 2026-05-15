import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { CASE_RESULTS } from "@/lib/content";

/**
 * Real planning-case results — documented annual tax savings per client
 * across the partner book. Source: 100600-team_credentials_research.md
 * ($26k–$312k annual tax savings range, documented across active partners).
 *
 * Section ID: #case-results — anchor in array on task close.
 */
export function CaseResultsSection() {
  return (
    <section
      id="case-results"
      className="bg-[var(--color-surface)] py-20 lg:py-28 border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Real closed cases</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
            What a qualifying tax case actually looks like.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Documented engagements from the partner book. Each one started
            with a referral from a CPA firm that didn&apos;t have planning
            capacity in-house and is now booking $40,000–$50,000 in planning
            revenue per case while the client stayed with their firm.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASE_RESULTS.map((c, i) => (
            <Reveal key={c.client} delay={i * 120}>
              <article className="h-full bg-[var(--color-surface-alt)] rounded-2xl border border-[var(--color-line)] shadow-sm p-7 flex flex-col">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
                  Case
                </div>

                <p className="text-sm text-[var(--color-ink-muted)] font-semibold uppercase tracking-wider">
                  {c.client}
                </p>

                <p className="mt-3 font-display text-3xl sm:text-[2rem] font-semibold text-[var(--color-primary)] leading-tight">
                  {c.result}
                </p>

                <p className="mt-5 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem] flex-1">
                  {c.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-xs text-[var(--color-ink-muted)] text-center max-w-3xl mx-auto leading-relaxed">
            * Annual tax-savings figures reflect documented results from active
            partner-firm engagements. Individual outcomes vary by client income,
            entity structure, and applicable tax law. Past results are not a
            guarantee of future outcomes.
          </p>
        </Reveal>

        <Reveal>
          <PrimaryCTA label="See what your client book is worth" />
        </Reveal>
      </div>
    </section>
  );
}
