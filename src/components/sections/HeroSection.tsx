"use client";

import Image from "next/image";
import { FormCard } from "@/components/FormCard";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

/**
 * Rebrand 2026-05-18 hero. Departure from the May-15 (commit 0db9765) build:
 *   - Light cool-slate surface instead of navy pinstripe.
 *   - Three-track layout: founder credential rail + headline + form.
 *   - Operating entity ("Greater Washington Retirement Income Solutions")
 *     surfaced as a small-caps lockup under the logo wordmark.
 *   - Stat strip pulled into the hero so the economics show above the fold.
 *
 * Has phone leads → DualCTA (button + phone) left-aligned under the headline.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-headline"
      className="relative pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-20 bg-[var(--color-surface)]"
    >
      {/* Top brand rule */}
      <div className="absolute top-20 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-slate-soft)]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_460px] gap-10 lg:gap-14 items-start">
        {/* LEFT: editorial column */}
        <Reveal className="space-y-7">
          {/* Operating-entity lockup */}
          <div className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-slate)]">
            <span className="inline-block w-7 h-px bg-[var(--color-slate-soft)]" />
            By {BRAND.operatingEntity}
          </div>

          <h1
            id="hero-headline"
            className="font-display text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem] font-semibold leading-[1.02] tracking-tight text-[var(--color-ink)]"
          >
            A licensed referral partnership built for the firms{" "}
            <span className="text-[var(--color-slate-strong)] italic">
              already serving high-tax clients.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-ink-muted)] leading-relaxed max-w-2xl">
            The Executive Partnership Program turns the CPAs you already
            employ into licensed referral partners.{" "}
            <span className="text-[var(--color-ink)] font-medium">
              Every qualifying client pays your firm $40,000–$50,000 per tax
              case
            </span>{" "}
            — without hiring planners, building a wealth arm, or disrupting
            tax season.
          </p>

          {/* Trust row — checks replaced with thin slate rules */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 pt-2 text-sm text-[var(--color-ink-muted)] border-y border-[var(--color-line)] py-5">
            <li>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Tenure
              </div>
              <div className="mt-1 text-[var(--color-ink)] font-medium">
                31 years in financial services
              </div>
            </li>
            <li>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Documented results
              </div>
              <div className="mt-1 text-[var(--color-ink)] font-medium">
                $26k–$312k saved per client*
              </div>
            </li>
            <li>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
                Operating mode
              </div>
              <div className="mt-1 text-[var(--color-ink)] font-medium">
                Turnkey · Licensed · Co-branded
              </div>
            </li>
          </ul>

          {/* Hero CTA */}
          <PrimaryCTA variant="default" align="start" className="!mt-2" />

          {/* Founder credential rail — new on rebrand, replaces generic stock vibe */}
          <Reveal delay={140}>
            <figure className="mt-2 flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-line)] bg-white max-w-xl">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-1 ring-[var(--color-line-cool)] flex-shrink-0">
                <Image
                  src="/images/team-doug-vincent.jpg"
                  alt="W. Doug Vincent, President & CEO"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption className="text-sm leading-tight">
                <div className="font-display text-[1.05rem] font-semibold text-[var(--color-ink)]">
                  W. Doug Vincent
                </div>
                <div className="text-[var(--color-ink-muted)]">
                  President &amp; CEO, {BRAND.operatingEntity}
                </div>
                <div className="text-[var(--color-slate)] text-xs mt-1 font-semibold uppercase tracking-[0.16em]">
                  31 years · Architect of the Partnership Program
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </Reveal>

        {/* RIGHT: form column */}
        <Reveal delay={120} className="relative lg:sticky lg:top-28">
          <div className="relative">
            {/* Section tag */}
            <div className="absolute -top-3 left-5 z-10">
              <span className="inline-block bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-[0.22em] px-3 py-1 rounded-full shadow-md">
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
