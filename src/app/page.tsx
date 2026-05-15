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
import { CaseResultsSection } from "@/components/sections/CaseResultsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title:
    "Earn $40k–$50k Per Tax Case as a Licensed Referral Partner — WealthShield Partnership",
  description:
    "The Executive Partnership Program for CPA firms. Get licensed, refer your high-tax clients, and earn $40,000–$50,000 per qualifying case. Led by W. Doug Vincent, President & CEO.",
  openGraph: {
    title:
      "WealthShield Partnership — $40k–$50k Per Qualifying Tax Case",
    description:
      "Get licensed. Refer your high-tax clients. Earn $40k–$50k per case. WealthShield runs the planning, compliance, and delivery.",
    url: "https://book.wealthshieldpartnership.com",
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
        <CaseResultsSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
