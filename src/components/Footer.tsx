import { BRAND } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-[var(--color-ink-on-dark)] py-12 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <p className="text-base font-display text-white/90 font-semibold">WealthShield</p>
        <p className="text-sm text-white/75 leading-relaxed max-w-md mx-auto">
          Empowering CPA and financial services firms with turnkey planning solutions.
        </p>
        <div className="pt-4 mt-4 border-t border-white/10 space-y-1 text-xs text-white/60">
          <p>
            Email: <a href={`mailto:${BRAND.email}`} className="hover:text-white/90 transition">{BRAND.email}</a>
            {" · "}
            Phone: <a href={BRAND.phoneHref} className="hover:text-white/90 transition">{BRAND.phoneDisplay}</a>
          </p>
          <p>© {new Date().getFullYear()} WealthShield. All rights reserved.</p>
          <p className="text-white/40 text-[11px] pt-2 max-w-2xl mx-auto">
            Revenue examples (e.g. $40,000–$50,000 per qualified case) reflect historical case economics and are not a promise of future results. Content is for informational purposes only and is not intended as individualized tax, legal, or investment advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
