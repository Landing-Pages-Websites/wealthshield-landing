import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PainSection } from "@/components/sections/PainSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "The Executive Partnership Program for CPA firms — WealthShield Partnership",
  description:
    "Deliver full-service retirement, tax-strategy, and wealth planning to your high-income CPA clients — without hiring, licensing, or disrupting tax season. Backed by 31 years of Greater Washington Retirement Income Solutions experience.",
  openGraph: {
    title: "WealthShield Partnership — Executive Partnership Program",
    description:
      "A turnkey financial-planning partnership for CPA firms. Keep the client. Add the revenue. Skip the build-out.",
    url: "https://partner.wealthshieldpartnership.com",
    siteName: "WealthShield Partnership",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <PainSection />
        <ProcessSection />
        <AuthoritySection />
        <ServicesSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
