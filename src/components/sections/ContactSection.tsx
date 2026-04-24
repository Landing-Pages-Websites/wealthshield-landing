import { FormCard } from "@/components/FormCard";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-accent)] text-white py-20 lg:py-28"
    >
      {/* Ambient glows + pinstripe */}
      <div className="absolute inset-0 -z-0 bg-pinstripe-navy" />
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 -left-32 w-[32rem] h-[32rem] rounded-full bg-[var(--color-primary)]/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[26rem] h-[26rem] rounded-full bg-[var(--color-gold)]/12 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center z-10">
        <Reveal className="space-y-6 lg:max-w-xl">
          <p className="eyebrow eyebrow-on-dark">Start the conversation</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight heading-rule heading-rule-on-dark">
            A 30-minute call with Doug Vincent. No pitch deck. No obligation.
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            {BRAND.shortPositioning} We&apos;ll walk through fit, economics,
            and whether the program makes sense for your firm&apos;s next
            chapter. If the timing isn&apos;t right, we&apos;ll say so.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "30-minute executive conversation, direct with the CEO",
              "Structured qualification — mutual. You evaluate us, we evaluate fit",
              "Custom economics walked through in plain English",
              "No program materials are pushed afterward unless you ask",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-gold)] text-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
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
                <span className="text-base leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          {/* Direct contact row */}
          <div className="pt-4 space-y-1 text-white/75">
            <p className="text-sm">
              Prefer the phone?{" "}
              <a
                href={BRAND.phoneHref}
                className="text-[var(--color-gold-100)] font-semibold underline decoration-[var(--color-gold)]/50 underline-offset-4 hover:text-[var(--color-gold)]"
              >
                {BRAND.phoneDisplay}
              </a>
              {"  "}—{"  "}
              <span className="text-white/60">
                {BRAND.address.street}, {BRAND.address.city},{" "}
                {BRAND.address.state}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-2">
          <FormCard
            variant="hero"
            idSuffix="contact"
            heading="Request the partnership brief"
            subheading="30 minutes, direct with Doug Vincent. You'll leave with a clear read on whether this is the right time, the right program, and the right economics for your firm."
          />
        </Reveal>
      </div>
    </section>
  );
}
