import { BRAND } from "@/lib/content";

type Props = {
  label?: string;
  variant?: "default" | "onDark";
  align?: "center" | "start";
  className?: string;
  href?: string;
  showPhone?: boolean;
};

/**
 * Dual CTA for WealthShield LP — button + phone link side-by-side.
 * Task has has_phone_leads=true, so we always offer the phone as a secondary
 * CTA per style-preferences 2026-04-22.
 *
 * Use align="start" inside a left-aligned split-hero copy column.
 * Use align="center" below a centered content section.
 */
export function PrimaryCTA({
  label = BRAND.primaryCtaLabel,
  variant = "default",
  align = "center",
  className = "",
  href = "#contact",
  showPhone = true,
}: Props) {
  const onDark = variant === "onDark";
  const justify = align === "start" ? "justify-start" : "justify-center";

  return (
    <div
      className={`flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center ${justify} gap-3 mt-8 ${className}`}
    >
      <a
        href={href}
        className={
          onDark
            ? "inline-flex items-center justify-center bg-[var(--color-gold)] hover:bg-[var(--color-gold-hover)] text-[var(--color-accent)] px-7 py-3.5 rounded-lg font-semibold text-base transition shadow-lg shadow-black/30"
            : "inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-7 py-3.5 rounded-lg font-semibold text-base transition shadow-sm"
        }
      >
        {label}
        <svg
          className="ml-2 w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>

      {showPhone && (
        <a
          href={BRAND.phoneHref}
          className={
            onDark
              ? "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base border border-white/25 text-white hover:bg-white/10 transition"
              : "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base border border-[var(--color-accent)]/20 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5 transition"
          }
        >
          <svg
            className="w-4 h-4"
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
      )}
    </div>
  );
}
