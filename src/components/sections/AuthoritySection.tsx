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
      className="bg-paper py-20 lg:py-28 border-b border-[var(--color-line)]"
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

          <Reveal delay={120} className="space-y-4">
            {ICP_POINTS.map((point, i) => (
              <div
                key={point.title}
                className="relative pl-16 pr-6 py-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-line)] shadow-sm hover:shadow-md hover:border-[var(--color-gold)]/40 transition"
              >
                <div className="absolute left-5 top-6 w-8 h-8 rounded-full bg-[var(--color-primary)] text-[var(--color-gold-100)] flex items-center justify-center font-display font-semibold text-base ring-4 ring-[var(--color-surface)]">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--color-accent)] leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <PrimaryCTA label="See if my firm fits" />
        </Reveal>
      </div>
    </section>
  );
}
