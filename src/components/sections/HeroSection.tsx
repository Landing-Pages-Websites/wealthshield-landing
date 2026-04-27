"use client";

import { FormCard } from "@/components/FormCard";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

/**
 * Hero per landing-page-architect Hard Rule #7 (split layout, form right) +
 * Rule #8 (min-h-screen) + Rule #8b (CTA directly under headline, above fold).
 * Has phone leads → DualCTA (button + phone) left-aligned under the headline.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24 min-h-[calc(100vh-0.5rem)] flex items-center bg-pinstripe-navy"
    >
      {/* Ambient gradient glows — navy + warm gold wash */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 right-0 w-[28rem] h-[28rem] rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      {/* Fine gold rule at the very top (editorial mark) */}
      <div className="absolute top-20 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center z-10">
        <Reveal className="space-y-6 lg:max-w-2xl text-white">
          <p className="eyebrow eyebrow-on-dark">
            For CPA &amp; Financial Services Firms
          </p>

          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.6rem] xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Deepen your firm&apos;s{" "}
            <span className="italic text-[var(--color-gold-100)]">
              financial planning.
            </span>
            <br className="hidden sm:inline" /> Without hiring a soul.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 max-w-prose leading-relaxed">
            {BRAND.positioning}
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-white/75">
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[var(--color-gold-100)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              31 years in financial services
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[var(--color-gold-100)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              129+ yrs combined team expertise
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-[var(--color-gold-100)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              OneAmerica Securities · FINRA / SIPC
            </span>
          </div>

          {/* Hero CTA — under the headline, above the fold */}
          <PrimaryCTA variant="onDark" align="start" className="mt-4" />
        </Reveal>

        <Reveal delay={120} className="lg:pl-2 relative">
          <div className="relative">
            {/* Tiny gold chip above form for editorial framing */}
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-block bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow-md">
                Executive Partnership Program
              </span>
            </div>
            <FormCard variant="hero" idSuffix="hero" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
