import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ICP_POINTS } from "@/lib/content";

/**
 * "Who it's for" — ICP qualification, helps self-selection.
 * Section ID: #who-its-for
 */
export function AuthoritySection() {
  return (
    <section
      id="who-its-for"
      className="bg-[var(--color-surface)] py-20 lg:py-28 border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow">Who we partner with</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
              Built for the right firms. Not for everyone.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
              We run a small program on purpose. We&apos;re selective about
              who we onboard because the partnership only works when the firm
              is the right size, in the right market, with the right kind of
              clients. If the shoe fits, you&apos;ll know inside five minutes.
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-0 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {ICP_POINTS.map((point, i) => (
              <div
                key={point.title}
                className="grid grid-cols-[auto_1fr] gap-5 py-6"
              >
                <div className="font-display text-[var(--color-slate-soft)] text-xl font-semibold leading-none tabular-nums pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--color-ink)] leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <PrimaryCTA label="Schedule a Strategy Call" />
        </Reveal>
      </div>
    </section>
  );
}
