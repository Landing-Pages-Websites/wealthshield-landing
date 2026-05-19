import Image from "next/image";
import { BRAND } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-[var(--color-ink-on-dark)] py-14 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid sm:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="WealthShield Partnership logo"
            width={759}
            height={600}
            className="h-12 w-auto brightness-0 invert opacity-90"
          />
          <div className="leading-tight">
            <p className="font-display text-lg text-white/95 font-semibold">
              WealthShield Partnership
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 mt-1">
              By {BRAND.operatingEntity}
            </p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-white/75 leading-relaxed sm:text-right">
          <p>
            <a
              href={`mailto:${BRAND.email}`}
              className="hover:text-white transition"
            >
              {BRAND.email}
            </a>
            <span className="text-white/30 mx-2">·</span>
            <a
              href={BRAND.phoneHref}
              className="hover:text-white transition"
            >
              {BRAND.phoneDisplay}
            </a>
          </p>
          <p className="text-white/55 text-xs">
            {BRAND.address.street}, {BRAND.address.city},{" "}
            {BRAND.address.state} {BRAND.address.zip}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-white/10 space-y-2 text-xs text-white/55">
        <p>© {new Date().getFullYear()} WealthShield Partnership. All rights reserved.</p>
        <p className="text-white/40 text-[11px] max-w-3xl leading-relaxed">
          Revenue examples (e.g. $40,000–$50,000 per qualified case) reflect
          historical case economics and are not a promise of future results.
          Content is for informational purposes only and is not intended as
          individualized tax, legal, or investment advice.
        </p>
      </div>
    </footer>
  );
}
