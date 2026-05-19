import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { QueryParamPersistence } from "@/components/QueryParamPersistence";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://book.wealthshieldpartnership.com"),
  title: {
    default:
      "WealthShield Partnership — Earn $40k–$50k Per Tax Case as a Licensed Referral Partner",
    template: "%s | WealthShield Partnership",
  },
  description:
    "Get licensed, refer your high-tax clients, and earn $40,000–$50,000 per qualifying case. WealthShield Partnership runs the planning, compliance, and delivery. 31 years in financial services. Led by W. Doug Vincent.",
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
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        {/* CTM — account 572388 (MEGA shared, same on all LPs) */}
        <script src="https://572388.tctm.co/t.js" async />
        {/* Meta Pixel 1756334995333487 (refresh 2026-05-15: new pixel from task spec) */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1756334995333487');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1756334995333487&ev=PageView&noscript=1" alt="" /></noscript>
        {/*
          GTM — customer-specific container GTM-KQMNSK6Q (added 2026-05-19 per Peter).
          Loaded head-injection + body-noscript per GTM standard.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KQMNSK6Q');`,
          }}
        />
        {/*
          MegaTag — siteKey/siteId + Meta Pixel 1756334995333487 + customer GTM-KQMNSK6Q.
        */}
        <meta name="mega-site-id" content="f8adeefa-6517-4242-b129-686bc3237567" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_mod24ieb_l0palnvddqm",siteId:"f8adeefa-6517-4242-b129-686bc3237567",gtmId:"GTM-KQMNSK6Q",pixelId:"1756334995333487"};`,
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
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KQMNSK6Q"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <QueryParamPersistence />
        {children}
      </body>
    </html>
  );
}
