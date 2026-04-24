import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://partner.wealthshieldpartnership.com"),
  title: {
    default:
      "WealthShield Partnership — Financial Planning for Your CPA Firm's Clients",
    template: "%s | WealthShield Partnership",
  },
  description:
    "A turnkey financial-planning partnership for CPA firms. Deliver retirement, tax-strategy, and wealth planning to your high-income clients — without hiring, licensing a team, or disrupting tax season. 31 years of Greater Washington Financial Services expertise.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* CTM call-tracking: has_phone_leads=true on task. CTM account ID TBD —
            omit script until Anthony provides tctm-id. Phone CTAs still work via tel:. */}
        {/* MegaTag config + optimizer — site registered in Mega Admin 2026-04-24.
            GTM + Meta Pixel still TBD (left as empty strings). */}
        <meta name="mega-site-id" content="f8adeefa-6517-4242-b129-686bc3237567" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_mod24ieb_l0palnvddqm",siteId:"f8adeefa-6517-4242-b129-686bc3237567",gtmId:"",pixelId:""};`,
          }}
        />
        <script
          id="optimizer-script"
          src="https://cdn.gomega.ai/scripts/optimizer.min.js"
          data-site-id="f8adeefa-6517-4242-b129-686bc3237567"
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)]">
        <QueryParamPersistence />
        {children}
      </body>
    </html>
  );
}
