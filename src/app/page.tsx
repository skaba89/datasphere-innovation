import Link from "next/link";
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
import { ServiceComparisonSection } from "@/components/sections/ServiceComparisonSection";
import { GeoToolsSection } from "@/components/sections/GeoToolsSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateGraphSchema,
  JsonLd,
} from "@/lib/json-ld";
import { FAQ_ITEMS } from "@/lib/constants";

export default function HomePage() {
  // Page-level JSON-LD with FAQPage and BreadcrumbList for explicit SERP rich results
  const pageGraph = generateGraphSchema([
    generateFAQSchema(FAQ_ITEMS),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={pageGraph} />
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col" itemScope itemType="https://schema.org/Article">
      <meta itemProp="headline" content="DataSphere Innovation — Cabinet Expert Data & IA" />
      <meta itemProp="datePublished" content="2021-01-01" />
      <meta itemProp="dateModified" content="2026-04-23" />
      <meta itemProp="inLanguage" content="fr" />
      <meta itemProp="articleSection" content="Consulting Data & IA" />
      <span itemProp="author" itemScope itemType="https://schema.org/Person" className="sr-only">
        <span itemProp="name">Sophie Martin</span>
        <span itemProp="jobTitle">Directrice Data Strategy</span>
        <span itemProp="url">https://datasphereinnovation.fr/equipe/sophie-martin</span>
      </span>
      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization" className="sr-only">
        <span itemProp="name">DataSphere Innovation</span>
        <span itemProp="url">https://datasphereinnovation.fr</span>
      </span>
        <Navbar />

        {/* Breadcrumb Navigation + Visible Date */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50 flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Accueil</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-3 text-xs text-muted-foreground/60">
            <Link href="/a-propos" className="hover:text-primary transition-colors">À propos</Link>
            <span aria-hidden="true">·</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span aria-hidden="true">·</span>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-04-23" className="flex items-center gap-1">
              Mis à jour le 23 avril 2026
            </time>
          </div>
        </nav>
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
        <ServiceComparisonSection />
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
    </>
  );
}
