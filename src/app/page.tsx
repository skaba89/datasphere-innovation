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
import { InsightsSection } from "@/components/sections/InsightsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { generateFAQSchema, generatePersonSchema, JsonLd } from "@/lib/json-ld";
import { FAQ_ITEMS } from "@/lib/constants";

export default function HomePage() {
  const faqSchema = generateFAQSchema(FAQ_ITEMS);

  const teamPersonSchemas = [
    generatePersonSchema({
      name: "Sophie Martin",
      role: "Directrice Data Strategy",
      description: "12 ans d'expérience en conseil data et stratégie digitale. Sophie a accompagné plus de 30 entreprises dans la définition de leur roadmap data.",
    }),
    generatePersonSchema({
      name: "Thomas Dubois",
      role: "Lead Data Engineer",
      description: "10 ans d'expérience en data engineering et architecture data. Thomas maîtrise l'écosystème complet : dbt, Airflow, Spark, Snowflake.",
    }),
    generatePersonSchema({
      name: "Léa Chen",
      role: "Head of AI Solutions",
      description: "8 ans d'expérience en intelligence artificielle et machine learning. Léa est spécialisée dans le NLP, la vision par ordinateur et le MLOps.",
    }),
    generatePersonSchema({
      name: "Marc Petit",
      role: "Cloud & Architecture Lead",
      description: "11 ans d'expérience en architecture cloud et infrastructure data. Marc est certifié AWS, Azure et GCP, avec une approche FinOps orientée résultats.",
    }),
  ];

  return (
    <>
      <JsonLd data={faqSchema} />
      {teamPersonSchemas.map((schema, i) => (
        <JsonLd key={`person-${i}`} data={schema} />
      ))}
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div role="banner" aria-label="Bannière principale">
          <HeroSection />
        </div>
        <CredibilityBar />
        <div role="region" aria-label="Chiffres clés">
          <StatsSection />
        </div>
        <div role="region" aria-label="Services">
          <ServicesSection />
        </div>
        <div role="region" aria-label="Nos différenciateurs">
          <DifferentiatorsSection />
        </div>
        <div role="region" aria-label="Cas d'usage">
          <UseCasesSection />
        </div>
        <div role="region" aria-label="Témoignages">
          <TestimonialsSection />
        </div>
        <div role="region" aria-label="Notre méthode">
          <MethodSection />
        </div>
        <div role="region" aria-label="Actualités et insights">
          <InsightsSection />
        </div>
        <div role="region" aria-label="À propos">
          <AboutSection />
        </div>
        <div role="region" aria-label="Questions fréquentes">
          <FAQSection />
        </div>
        <div role="region" aria-label="Contact">
          <ContactSection />
        </div>
        <div role="region" aria-label="Nos partenaires">
          <PartnersSection />
        </div>
        <div role="region" aria-label="Nos clients">
          <ClientsSection />
        </div>
        <CTABanner />
        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieConsent />
      </main>
    </>
  );
}
