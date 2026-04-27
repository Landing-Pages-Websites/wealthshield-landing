import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { PROCESS_STEPS } from "@/lib/content";

/**
 * 5-phase partnership process — the spine of the program.
 * ID: #how-it-works
 */
export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[var(--color-surface-alt)] py-20 lg:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
            A five-phase partnership system, refined over 31 years.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            Not a handshake. Not a pitch deck. A structured, phased process
            that protects your tax season, protects the client experience,
            and protects your firm&apos;s brand.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Center connector rule (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[var(--color-gold)]/30 via-[var(--color-gold)]/50 to-[var(--color-gold)]/30" />

          <ol className="space-y-5 lg:space-y-10">
            {PROCESS_STEPS.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={step.step} delay={i * 70}>
                  <li
                    className={`grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-10 items-center ${
                      flip ? "" : ""
                    }`}
                  >
                    {/* Left cell */}
                    <div className={`${flip ? "lg:text-right lg:order-3" : "lg:text-right"}`}>
                      {!flip && (
                        <div className="bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-2xl p-6 lg:p-7 shadow-sm">
                          <p className="eyebrow text-[var(--color-gold)]">
                            Phase {step.step}
                          </p>
                          <h3 className="mt-2 font-display text-2xl sm:text-[1.6rem] font-semibold text-[var(--color-accent)] leading-tight">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem]">
                            {step.body}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center marker */}
                    <div className="hidden lg:flex flex-col items-center lg:order-2">
                      <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] text-white font-display font-semibold text-xl flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/30 ring-4 ring-[var(--color-surface)]">
                        {step.step}
                      </div>
                    </div>

                    {/* Right cell */}
                    <div className={`${flip ? "lg:text-left" : "lg:text-left lg:order-3"}`}>
                      {flip && (
                        <div className="bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-2xl p-6 lg:p-7 shadow-sm">
                          <p className="eyebrow text-[var(--color-gold)]">
                            Phase {step.step}
                          </p>
                          <h3 className="mt-2 font-display text-2xl sm:text-[1.6rem] font-semibold text-[var(--color-accent)] leading-tight">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem]">
                            {step.body}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile card (single column, always) */}
                    <div className="lg:hidden col-span-1">
                      <div className="bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-display font-semibold flex items-center justify-center">
                            {step.step}
                          </div>
                          <p className="eyebrow text-[var(--color-gold)] m-0">
                            Phase {step.step}
                          </p>
                        </div>
                        <h3 className="font-display text-xl font-semibold text-[var(--color-accent)] leading-tight">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed text-[0.95rem]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal>
          <PrimaryCTA label="Schedule a Strategy Call" />
        </Reveal>
      </div>
    </section>
  );
}
