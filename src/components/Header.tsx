"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Landing-page header per landing-page-architect SKILL Rule #3:
 * logo + phone link + single primary CTA. No nav menu.
 *
 * Rebrand 2026-05-18: client provided new official WealthShield Partnership
 * logo via the NEW Drive bundle (1GQFy7DyyEWKz0DpnjoT_FheS0XQVGF5G) — pure
 * navy crown emblem (no gold) + wordmark. PNG has transparent bg → sits
 * cleanly on the new cool-slate header. Standing Rule #7: dark logo on
 * light header = high contrast, readable in top + scrolled states.
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
          className="flex items-center gap-3 group"
          aria-label={`${BRAND.name} home`}
        >
          <Image
            src="/images/logo.png"
            alt={`${BRAND.name} logo`}
            width={759}
            height={600}
            priority
            className="h-12 sm:h-14 w-auto"
          />
          <span className="hidden md:flex flex-col leading-tight text-[var(--color-ink)]">
            <span className="font-display text-lg font-semibold tracking-tight">
              WealthShield Partnership
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-slate)]">
              By {BRAND.operatingEntity}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={BRAND.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 border border-[var(--color-line-cool)] bg-white hover:border-[var(--color-primary)]/60 hover:bg-[var(--color-surface-alt)] text-sm font-semibold text-[var(--color-ink)] px-4 py-2 sm:py-2.5 rounded-lg transition shadow-sm"
          >
            <svg
              className="w-4 h-4 text-[var(--color-slate)]"
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
