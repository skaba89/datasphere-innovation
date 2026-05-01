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
  title: "Politique de cookies — DataSphere Innovation",
  description:
    "Politique de cookies de DataSphere Innovation. Informations sur l'utilisation des cookies sur notre site et la gestion de vos préférences.",
  openGraph: {
    title: "Politique de cookies — DataSphere Innovation",
    description: "Politique de cookies de DataSphere Innovation. Informations sur l'utilisation des cookies et la gestion de vos préférences.",
    url: "https://datasphereinnovation.fr/politique-cookies",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/politique-cookies",
  },
};

export default function PolitiqueCookiesPage() {
  const cookiesGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Politique de cookies — DataSphere Innovation",
      description:
        "Politique de cookies de DataSphere Innovation. Informations sur l'utilisation des cookies sur notre site et la gestion de vos préférences.",
      url: "https://datasphereinnovation.fr/politique-cookies",
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Politique de cookies", url: "https://datasphereinnovation.fr/politique-cookies" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={cookiesGraph} />
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
              <BreadcrumbPage>Politique de cookies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <section className="pt-16 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Politique de{" "}
            <span className="gradient-text">cookies</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : Mars 2025
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            {/* Section 1 - Introduction */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                DataSphere Innovation s&apos;engage à garantir la transparence
                quant à l&apos;utilisation des cookies sur son site
                datasphereinnovation.fr. La présente politique de cookies a pour
                objectif de vous informer sur ce que sont les cookies, pourquoi
                nous les utilisons et comment vous pouvez les gérer.
              </p>
              <p className="mt-2">
                Un cookie est un petit fichier texte déposé sur votre terminal
                (ordinateur, tablette, smartphone) lors de votre visite sur un
                site web. Il permet au site de mémoriser des informations
                relatives à votre visite (préférences de langue, identifiant de
                session, etc.) afin d&apos;améliorer votre expérience de
                navigation.
              </p>
              <p className="mt-2">
                Conformément à la directive européenne ePrivacy (directive
                2002/58/CE) et aux recommandations de la CNIL (Commission
                Nationale de l&apos;Informatique et des Libertés), DataSphere
                Innovation respecte votre consentement préalable avant le
                dépôt de cookies non essentiels sur votre terminal.
              </p>
            </div>

            {/* Section 2 - Types de cookies utilisés */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Types de cookies utilisés
              </h2>
              <p>
                DataSphere Innovation utilise trois catégories de cookies sur
                son site :
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  <strong className="text-foreground">Cookies strictement nécessaires</strong>{" "}
                  : indispensables au bon fonctionnement du site (session,
                  sécurité, préférences de consentement). Ils ne nécessitent pas
                  votre consentement.
                </li>
                <li>
                  <strong className="text-foreground">Cookies analytiques</strong>{" "}
                  : utilisés pour mesurer l&apos;audience et comprendre
                  l&apos;utilisation du site (Google Analytics avec IP anonymisée,
                  Vercel Analytics). Ils nécessitent votre consentement.
                </li>
                <li>
                  <strong className="text-foreground">Cookies fonctionnels</strong>{" "}
                  : permettent de mémoriser vos préférences telles que le thème
                  d&apos;affichage (mode clair/sombre via next-themes). Ils
                  nécessitent votre consentement.
                </li>
              </ul>
              <p className="mt-2">
                Pour chaque type de cookie, nous vous indiquons ci-dessous son
                nom, sa finalité, sa durée de conservation et son origine
                (premier parti ou tiers).
              </p>
            </div>

            {/* Section 3 - Cookies strictement nécessaires */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Cookies strictement nécessaires
              </h2>
              <p>
                Ces cookies sont indispensables au fonctionnement du site et ne
                peuvent pas être désactivés. Ils sont déposés en tant que
                cookies premier parti et ne nécessitent pas votre consentement
                conformément à l&apos;article 82 de la loi Informatique et
                Libertés.
              </p>
              <div className="overflow-x-auto mt-4">
                <table
                  className="w-full border-collapse text-sm"
                  role="table"
                  aria-label="Tableau des cookies strictement nécessaires"
                >
                  <thead>
                    <tr>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Nom
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Finalité
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Durée
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Origine
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/20">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        cookie_consent
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Enregistrement du choix de consentement aux cookies
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        13 mois
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Premier parti
                      </td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        next-auth.*
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Gestion de la session utilisateur
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Session
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Premier parti
                      </td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        __Host-next-auth.*
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Protection CSRF (Cross-Site Request Forgery)
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Session
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Premier parti
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4 - Cookies analytiques */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Cookies analytiques
              </h2>
              <p>
                Ces cookies nous permettent de comprendre comment les visiteurs
                interagissent avec notre site en collectant des informations de
                manière anonymisée. Ils nécessitent votre consentement avant
                leur dépôt.
              </p>
              <div className="overflow-x-auto mt-4">
                <table
                  className="w-full border-collapse text-sm"
                  role="table"
                  aria-label="Tableau des cookies analytiques"
                >
                  <thead>
                    <tr>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Nom
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Finalité
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Durée
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Origine
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/20">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        _ga
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Suivi Google Analytics (identifiant unique)
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        2 ans
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Tiers (Google)
                      </td>
                    </tr>
                    <tr className="bg-background">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        _ga_*
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        État de session Google Analytics 4
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        2 ans
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Tiers (Google)
                      </td>
                    </tr>
                    <tr className="bg-secondary/20">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        Vercel analytics
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Mesure des performances et métriques Web Vitals
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Session
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Tiers (Vercel)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                Google Analytics est utilisé avec l&apos;anonymisation IP activée,
                conformément aux recommandations de la CNIL. Pour plus
                d&apos;informations, consultez la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité de Google
                </a>{" "}
                et la{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité de Vercel
                </a>
                .
              </p>
            </div>

            {/* Section 5 - Cookies fonctionnels */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Cookies fonctionnels
              </h2>
              <p>
                Ces cookies permettent de mémoriser vos préférences
                d&apos;affichage pour vous offrir une expérience personnalisée.
                Ils nécessitent votre consentement avant leur dépôt.
              </p>
              <div className="overflow-x-auto mt-4">
                <table
                  className="w-full border-collapse text-sm"
                  role="table"
                  aria-label="Tableau des cookies fonctionnels"
                >
                  <thead>
                    <tr>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Nom
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Finalité
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Durée
                      </th>
                      <th scope="col" className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40">
                        Origine
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-secondary/20">
                      <td className="p-3 text-foreground border-b border-border/20 font-mono text-xs">
                        theme
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Préférence de thème d&apos;affichage (mode clair/sombre) via next-themes
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        1 an
                      </td>
                      <td className="p-3 text-muted-foreground border-b border-border/20">
                        Premier parti
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6 - Gestion des cookies */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                6. Gestion des cookies
              </h2>
              <p>
                Vous disposez de plusieurs moyens pour gérer vos préférences en
                matière de cookies :
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Via la bannière de consentement</strong>{" "}
                : lors de votre première visite sur notre site, une bannière vous
                informe de l&apos;utilisation de cookies et vous permet d&apos;accepter
                ou de refuser les cookies non essentiels. Vous pouvez modifier
                vos préférences à tout moment en cliquant sur le bandeau de
                cookies accessible sur le site.
              </p>
              <p className="mt-2">
                <strong className="text-foreground">Via les paramètres de votre navigateur</strong>{" "}
                : vous pouvez configurer votre navigateur pour refuser les
                cookies ou être averti lors de leur dépôt. Les procédures de
                configuration sont décrites dans les aides de vos navigateurs :
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="mt-2">
                Veuillez noter que le blocage de certains cookies peut affecter
                le fonctionnement et l&apos;affichage du site.
              </p>
            </div>

            {/* Section 7 - Modification de la politique */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                7. Modification de la politique
              </h2>
              <p>
                DataSphere Innovation se réserve le droit de modifier la
                présente politique de cookies à tout moment afin de l&apos;adapter
                aux évolutions réglementaires, techniques ou aux changements
                dans l&apos;utilisation des cookies sur le site. En cas de
                modification substantielle, une nouvelle bannière de
                consentement vous sera présentée lors de votre prochaine visite.
              </p>
              <p className="mt-2">
                Dernière mise à jour : Mars 2025.
              </p>
            </div>

            {/* Section 8 - Contact */}
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                8. Contact
              </h2>
              <p>
                Pour toute question relative à la présente politique de cookies,
                vous pouvez nous contacter :
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
                Téléphone : +33 06 81 82 28 41
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
              <p className="mt-2">
                Pour plus d&apos;informations sur le traitement de vos données
                personnelles, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-auto">
        <Footer />
      </div>
      <BackToTop />
      <ChatWidget />
      <CookieConsent />
    </main>
    </>
  );
}
