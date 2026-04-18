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
import {
  generateFAQSchema,
  generatePersonSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateGraphSchema,
  JsonLd,
} from "@/lib/json-ld";
import { FAQ_ITEMS } from "@/lib/constants";

export default function HomePage() {
  const homepageGraph = generateGraphSchema([
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: "DataSphere Innovation — Cabinet Expert Data & IA",
      description:
        "Cabinet expert en data, intelligence artificielle, analytics et transformation digitale. 50+ projets, 98% satisfaction, 3x ROI moyen.",
      url: "https://datasphereinnovation.fr",
    }),
    generateFAQSchema(FAQ_ITEMS),
    ...[
      generatePersonSchema({
        name: "Sophie Martin",
        role: "Directrice Data Strategy",
        description:
          "12 ans d'expérience en conseil data et stratégie digitale. Sophie a accompagné plus de 30 entreprises dans la définition de leur roadmap data.",
        url: "https://www.linkedin.com/in/sophie-martin-datasphere",
      }),
      generatePersonSchema({
        name: "Thomas Dubois",
        role: "Lead Data Engineer",
        description:
          "10 ans d'expérience en data engineering et architecture data. Thomas maîtrise l'écosystème complet : dbt, Airflow, Spark, Snowflake.",
        url: "https://www.linkedin.com/in/thomas-dubois-datasphere",
      }),
      generatePersonSchema({
        name: "Léa Chen",
        role: "Head of AI Solutions",
        description:
          "8 ans d'expérience en intelligence artificielle et machine learning. Léa est spécialisée dans le NLP, la vision par ordinateur et le MLOps.",
        url: "https://www.linkedin.com/in/lea-chen-datasphere",
      }),
      generatePersonSchema({
        name: "Marc Petit",
        role: "Cloud & Architecture Lead",
        description:
          "11 ans d'expérience en architecture cloud et infrastructure data. Marc est certifié AWS, Azure et GCP, avec une approche FinOps orientée résultats.",
        url: "https://www.linkedin.com/in/marc-petit-datasphere",
      }),
    ],
  ]);

  return (
    <>
      <JsonLd data={homepageGraph} />
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
    </>
  );
}
