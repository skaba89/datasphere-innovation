import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbSchema, generateWebPageSchema, generateGraphSchema, generateLocalBusinessSchema, JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Contact — DataSphere Innovation",
  description:
    "Contactez DataSphere Innovation : cabinet expert data & IA à Montreuil. Formulaire de contact, téléphone, email. Réponse sous 24h.",
  openGraph: {
    title: "Contact — DataSphere Innovation",
    description:
      "Contactez DataSphere Innovation : formulaire de contact, téléphone, email. Réponse sous 24h.",
    url: "https://datasphereinnovation.fr/contact",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/contact",
  },
};

export default function ContactPage() {
  const contactGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Contact — DataSphere Innovation",
      description:
        "Contactez DataSphere Innovation : cabinet expert data & IA à Montreuil. Formulaire de contact, téléphone, email. Réponse sous 24h.",
      url: "https://datasphereinnovation.fr/contact",
    }),
    {
      "@type": "ContactPage",
      "@id": "https://datasphereinnovation.fr/contact/#contactpage",
      name: "Contact DataSphere Innovation",
      description:
        "Page de contact de DataSphere Innovation — cabinet expert data & IA à Montreuil. Formulaire, téléphone et email.",
      url: "https://datasphereinnovation.fr/contact",
      mainEntity: {
        "@id": "https://datasphereinnovation.fr/#organization",
      },
    },
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Contact", url: "https://datasphereinnovation.fr/contact" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={contactGraph} />
      <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
        <Navbar />

        {/* Breadcrumb Navigation */}
        <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Accueil</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        {/* Contact Section */}
        <ContactSection />

        <Footer />
        <BackToTop />
        <ChatWidget />
        <CookieConsent />
      </main>
    </>
  );
}
