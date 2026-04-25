import { BRAND } from "@/lib/content";

/**
 * Legal-only footer per landing-page-architect Rule #4.
 * Financial services compliance text required (OneAmerica Securities disclosure).
 * No nav, no social, no outbound links.
 */
export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-[var(--color-ink-on-dark)] py-12 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <p className="text-sm text-white/90 font-display">
          © {new Date().getFullYear()} {BRAND.fullName}
        </p>
        <p className="text-xs text-white/75 leading-relaxed">
          {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.state}{" "}
          {BRAND.address.zip} · {BRAND.phoneDisplay} · {BRAND.email}
        </p>

        {/* Compliance disclosure (mandatory for financial services) */}
        <div className="max-w-3xl mx-auto pt-4 mt-4 border-t border-white/10 space-y-3 text-[11px] text-white/55 leading-relaxed">
          <p>
            Securities offered through OneAmerica Securities, Inc., a
            Registered Investment Advisor, Member FINRA, SIPC. Greater Washington
            Retirement Income Solutions is not an affiliate of OneAmerica
            Securities or the companies of OneAmerica Financial and is not a
            broker-dealer or Registered Investment Advisor.
          </p>
          <p>
            Greater Washington Retirement Income Solutions may conduct life insurance
            and securities business in Maryland and may be licensed in other
            states. Financial professionals cannot conduct life insurance or
            securities business in states in which they are not licensed.
            Content is for informational purposes only and is not intended to
            be relied upon as individualized tax, legal, fiduciary, or
            investment advice.
          </p>
          <p>
            Investing involves risk including potential loss of principal.
            Guarantees are subject to the claims-paying ability of the issuing
            insurance company. Revenue examples shown (e.g. $40,000–$50,000
            per qualified case) reflect historical case economics and are not
            a promise of future results. Partnership economics are custom and
            disclosed during the qualification process.
          </p>
        </div>
      </div>
    </footer>
  );
}
