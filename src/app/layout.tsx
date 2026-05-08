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
      "WealthShield Partnership — Financial Planning for Your CPA Firm's Clients",
    template: "%s | WealthShield Partnership",
  },
  description:
    "A turnkey financial-planning partnership for CPA firms. Deliver retirement, tax-strategy, and wealth planning to your high-income clients — without hiring, licensing a team, or disrupting tax season. ",
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
        {/* Meta Pixel 1337283098129033 */}
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1337283098129033');fbq('track','PageView');` }} />
        <noscript><img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=1337283098129033&ev=PageView&noscript=1" alt="" /></noscript>
        {/* MegaTag — GTM-5WWZNV5 (MEGA shared), Pixel 1337283098129033 */}
        <meta name="mega-site-id" content="f8adeefa-6517-4242-b129-686bc3237567" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_mod24ieb_l0palnvddqm",siteId:"f8adeefa-6517-4242-b129-686bc3237567",gtmId:"GTM-5WWZNV5",pixelId:"1337283098129033"};`,
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
