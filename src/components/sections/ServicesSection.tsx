import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { SERVICES } from "@/lib/content";

/**
 * Per Anthony 2026-04-21 + orchestrator rule 5: each service gets its OWN
 * <section> with a unique descriptive kebab-case anchor + H2 + 80-150 words
 * of real body copy + CTA.
 *
 * Four offerings: Retirement, Tax Strategy, Life & Protection, Estate & Wealth.
 * Each alternates navy/paper to break visual rhythm.
 */
export function ServicesSection() {
  return (
    <>
      {/* Section intro */}
      <section
        id="services-intro"
        aria-labelledby="services-intro-heading"
        className="bg-paper pt-20 lg:pt-28 pb-8 lg:pb-10 border-t border-[var(--color-line)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">What your firm can deliver</p>
            <h2
              id="services-intro-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule"
            >
              Four disciplines your clients will ask for. All delivered under
              your firm&apos;s brand.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
              These are the four planning lines your high-income clients are
              already using somewhere else. Partner with us and they use them
              at your firm, with your partners leading the relationship.
            </p>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, idx) => {
        const flip = idx % 2 === 1;
        const dark = idx % 2 === 1;
        return (
          <section
            key={service.slug}
            id={service.anchorId}
            aria-labelledby={`${service.anchorId}-heading`}
            className={
              dark
                ? "bg-[var(--color-accent)] text-white py-16 lg:py-24 relative overflow-hidden"
                : "bg-paper py-16 lg:py-24 border-b border-[var(--color-line)]"
            }
          >
            {dark && (
              <div className="pointer-events-none absolute inset-0 -z-0">
                <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[var(--color-primary)]/25 blur-[120px]" />
              </div>
            )}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
              <div
                className={`grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start ${
                  flip ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="space-y-5">
                  <p
                    className={`eyebrow ${dark ? "eyebrow-on-dark" : ""}`}
                  >
                    {service.label}
                  </p>
                  <h3
                    id={`${service.anchorId}-heading`}
                    className={`font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight ${
                      dark ? "text-white" : "text-[var(--color-accent)]"
                    }`}
                  >
                    {service.heading}
                  </h3>
                  <p
                    className={`text-lg leading-relaxed max-w-prose ${
                      dark ? "text-white/80" : "text-[var(--color-ink-muted)]"
                    }`}
                  >
                    {service.body}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {service.outcomes.map((o) => (
                      <li
                        key={o}
                        className={`flex items-start gap-3 ${
                          dark ? "text-white/90" : "text-[var(--color-ink)]"
                        }`}
                      >
                        <span
                          className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            dark
                              ? "bg-[var(--color-gold)] text-[var(--color-accent)]"
                              : "bg-[var(--color-primary)] text-white"
                          }`}
                        >
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-base leading-snug">{o}</span>
                      </li>
                    ))}
                  </ul>

                  <PrimaryCTA
                    variant={dark ? "onDark" : "default"}
                    label="Schedule a Strategy Call"
                    align="start"
                    className="mt-8"
                  />
                </Reveal>

                {/* Right column — editorial "card" listing what the engagement delivers */}
                <Reveal delay={120}>
                  <div
                    className={`rounded-2xl p-7 lg:p-8 border ${
                      dark
                        ? "bg-white/[0.04] border-white/15 backdrop-blur"
                        : "bg-[var(--color-surface)] border-[var(--color-line)] shadow-lg shadow-[var(--color-accent)]/5"
                    }`}
                  >
                    <p
                      className={`eyebrow ${
                        dark ? "eyebrow-on-dark" : ""
                      } text-[var(--color-gold)]`}
                    >
                      Engagement includes
                    </p>
                    <ul
                      className={`mt-4 space-y-3.5 ${
                        dark ? "text-white/85" : "text-[var(--color-ink)]"
                      }`}
                    >
                      {getEngagementInclusions(service.slug).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[0.95rem] leading-snug"
                        >
                          <span
                            className={`mt-0.5 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              dark ? "bg-[var(--color-gold-100)]" : "bg-[var(--color-gold)]"
                            }`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className={`mt-6 pt-5 border-t text-xs leading-relaxed ${
                        dark
                          ? "border-white/15 text-white/60"
                          : "border-[var(--color-line)] text-[var(--color-ink-muted)]"
                      }`}
                    >
                      Delivered by the WealthShield planning team under
                      OneAmerica Securities (Member FINRA/SIPC), co-branded
                      with your firm.
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

// Engagement inclusions by slug — keeps content.ts clean, co-located with section.
function getEngagementInclusions(slug: string): string[] {
  switch (slug) {
    case "retirement-planning":
      return [
        "Full retirement income plan with withdrawal sequencing",
        "Social Security & pension optimization",
        "Roth conversion ladders + tax-efficient drawdown",
        "Long-term care + longevity modeling",
        "Annual review and plan refresh included",
      ];
    case "tax-strategy":
      return [
        "Entity structure and owner-comp review",
        "Cash Balance / DB / Solo 401(k) design",
        "Qualified Opportunity Zone + charitable structures",
        "Multi-year projections coordinated with your firm",
        "Implementation coordinated with your tax team",
      ];
    case "life-protection":
      return [
        "Buy-sell and key-person funding design",
        "Tax-advantaged cash-value strategies",
        "Estate-liquidity instruments",
        "Policy review and in-force optimization",
        "Carrier-agnostic, illustration-first",
      ];
    case "estate-wealth":
      return [
        "Trust structure design (SLATs, ILITs, CRTs)",
        "Gifting ladder + annual exclusion strategy",
        "Asset-titling and beneficiary audit",
        "Coordination with client's estate attorney",
        "Generational transfer roadmap",
      ];
    default:
      return [];
  }
}
