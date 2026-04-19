import { Navbar } from "@/components/layout/Navbar";
import { Footer, CTABanner } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilityBar } from "@/components/sections/CredibilityBar";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DifferentiatorsSection } from "@/components/sections/DifferentiatorsSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { MultimodalSection } from "@/components/sections/MultimodalSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { GeoToolsSection } from "@/components/sections/GeoToolsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";

export default function HomePage() {
  return (
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <CredibilityBar />
        <StatsSection />
        <ServicesSection />
        <DifferentiatorsSection />
        <UseCasesSection />
        <TestimonialsSection />
        <MethodSection />
        <MultimodalSection />
        <ComparisonSection />
        <GeoToolsSection />
        <InsightsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <PartnersSection />
        <ClientsSection />
        <CTABanner />
        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieConsent />
      </main>
  );
}
