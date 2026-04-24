"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Landing-page header per landing-page-architect SKILL Rule #3:
 * wordmark logo + phone link + single primary CTA. No nav menu.
 *
 * Brand note 2026-04-24: WealthShield's live site is behind a Manus auth wall
 * so no logo asset is available. We render a text wordmark (Fraunces) with
 * a navy "shield" glyph. Per lp-mistakes 2026-04-24: always verify logo
 * visibility against header bg. Here: navy ink text on warm-paper/white
 * header — high contrast, readable.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--color-surface)]/95 backdrop-blur border-b border-[var(--color-line)] shadow-sm"
          : "bg-[var(--color-surface)]/85 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label={`${BRAND.name} home`}
        >
          {/* Shield glyph (gold stroke on navy fill) */}
          <svg
            className="h-9 sm:h-10 w-auto"
            viewBox="0 0 40 46"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 2 4 8v14c0 10 7 18 16 22 9-4 16-12 16-22V8L20 2z"
              fill="var(--color-primary)"
              stroke="var(--color-gold)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M13 22l5 5 9-10"
              stroke="var(--color-gold)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] sm:text-[1.15rem] font-semibold tracking-tight text-[var(--color-accent)]">
              WealthShield
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold mt-0.5">
              Partnership
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={BRAND.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-primary-hover)] transition"
          >
            <svg
              className="w-4 h-4 text-[var(--color-gold)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {BRAND.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition shadow-sm"
          >
            {BRAND.primaryCtaShort}
          </a>
        </div>
      </div>
    </header>
  );
}
