import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbSchema, generateWebPageSchema, generateGraphSchema, JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Politique de confidentialité — DataSphere Innovation",
  description:
    "Politique de confidentialité de DataSphere Innovation. Informations sur le traitement de vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  const privacyGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Politique de confidentialité — DataSphere Innovation",
      description:
        "Politique de confidentialité de DataSphere Innovation. Informations sur le traitement de vos données personnelles.",
      url: "https://datasphereinnovation.fr/politique-confidentialite",
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Politique de confidentialité", url: "https://datasphereinnovation.fr/politique-confidentialite" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={privacyGraph} />
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
              <BreadcrumbPage>Politique de confidentialité</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Politique de{" "}
            <span className="gradient-text">confidentialité</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Dernière mise à jour : Janvier 2025
              </p>
              <p>
                DataSphere Innovation s&apos;engage à protéger la vie privée de ses
                utilisateurs. Cette politique de confidentialité explique
                comment nous collectons, utilisons et protégeons vos données
                personnelles conformément au Règlement Général sur la Protection
                des Données (RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Données collectées
              </h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Nom et prénom (via le formulaire de contact)</li>
                <li>Adresse email (formulaire de contact et newsletter)</li>
                <li>Numéro de téléphone (formulaire de contact, optionnel)</li>
                <li>Nom de l&apos;entreprise (formulaire de contact, optionnel)</li>
                <li>Message et sujet de la demande (formulaire de contact)</li>
                <li>
                  Données de navigation (cookies, pages visitées, durée de
                  visite)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Finalités du traitement
              </h2>
              <p>
                Vos données sont traitées pour les finalités suivantes :
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Répondre à vos demandes de contact</li>
                <li>Envoi de la newsletter (avec votre consentement)</li>
                <li>Amélioration de nos services et de notre site</li>
                <li>Analyse statistique de la fréquentation (anonymisée)</li>
                <li>
                  Respect de nos obligations légales et réglementaires
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Base légale
              </h2>
              <p>
                Le traitement de vos données repose sur : votre consentement
                (newsletter, cookies non essentiels), l&apos;exécution de mesures
                précontractuelles (demande de contact), notre intérêt légitime
                (analyse de fréquentation anonymisée), et nos obligations
                légales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Durée de conservation
              </h2>
              <ul className="list-disc ml-6 space-y-1">
                <li>
                  Données de contact : 3 ans à compter du dernier contact
                </li>
                <li>
                  Données newsletter : jusqu&apos;à désinscription
                </li>
                <li>
                  Données de navigation : 13 mois maximum
                </li>
                <li>
                  Données de facturation : 10 ans (obligation légale)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Destinataires des données
              </h2>
              <p>
                Vos données sont traitées uniquement par les services internes
                de DataSphere Innovation. Elles ne sont ni vendues, ni louées,
                ni partagées avec des tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                6. Vos droits
              </h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Droit d&apos;accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@datasphereinnovation.fr"
                  className="text-primary hover:underline"
                >
                  contact@datasphereinnovation.fr
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                7. Sécurité
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles
                appropriées pour protéger vos données contre tout accès non
                autorisé, toute modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                8. Cookies
              </h2>
              <p>
                Notre site utilise des cookies pour assurer son bon
                fonctionnement et améliorer votre expérience. Vous pouvez
                gérer vos préférences de cookies via la bannière de consentement
                ou les paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                9. Contact
              </h2>
              <p>
                Pour toute question relative à cette politique de
                confidentialité :
              </p>
              <p className="mt-2">
                DataSphere Innovation
                <br />
                17 rue Gaston Monmousseau, 93100 Montreuil
                <br />
                Email :{" "}
                <a
                  href="mailto:contact@datasphereinnovation.fr"
                  className="text-primary hover:underline"
                >
                  contact@datasphereinnovation.fr
                </a>
                <br />
                Téléphone : +33 6 81 82 28 40
              </p>
              <p className="mt-2">
                Vous pouvez également introduire une réclamation auprès de la
                CNIL :{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.cnil.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
      <ChatWidget />
      <CookieConsent />
    </main>
    </>
  );
}
