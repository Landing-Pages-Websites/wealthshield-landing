import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { PROCESS_STEPS } from "@/lib/content";

/**
 * 5-phase partnership process — rebrand 2026-05-18.
 * Replaces alternating zig-zag center-spine layout (commit 0db9765) with a
 * left-rail editorial timeline: large phase numerals on the left, content
 * column on the right, hairline dividers between phases.
 * ID: #how-it-works
 */
export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="bg-paper py-20 lg:py-28 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] leading-tight heading-rule">
            A five-phase partnership system, refined over 31 years.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Not a handshake. Not a pitch deck. A structured, phased process
            that protects your tax season, protects the client experience,
            and protects your firm&apos;s brand.
          </p>
        </Reveal>

        <ol className="mt-14 lg:mt-20">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.step} delay={i * 60}>
              <li className="grid grid-cols-[60px_1fr] lg:grid-cols-[140px_1fr] gap-5 lg:gap-12 items-start py-7 lg:py-10 border-t border-[var(--color-line)] first:border-t-0">
                {/* Left rail — large display numeral over an eyebrow */}
                <div className="text-left lg:text-right">
                  <div className="index-numeral !text-[3rem] lg:!text-[4.2rem] text-[var(--color-primary)]/85 leading-none">
                    {String(step.step).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-slate)]">
                    Phase {step.step}
                  </div>
                </div>

                {/* Right rail — content */}
                <div className="pt-1">
                  <h3 className="font-display text-2xl sm:text-[1.8rem] font-semibold text-[var(--color-ink)] leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[var(--color-ink-muted)] leading-relaxed text-[1rem] sm:text-[1.05rem] max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <PrimaryCTA label="Schedule a Strategy Call" />
        </Reveal>
      </div>
    </section>
  );
}
