import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";

export const metadata: Metadata = {
  title: "Mentions légales — DataSphere Innovation",
  description: "Mentions légales du site DataSphere Innovation.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            Mentions <span className="gradient-text">légales</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Éditeur du site
              </h2>
              <p>
                DataSphere Innovation
                <br />
                SAS au capital de 10 000 €
                <br />
                Siège social : 17 rue Gaston Monmousseau, 93100 Montreuil
                <br />
                RCS : Bobigny B XXX XXX XXX
                <br />
                SIRET : XXX XXX XXX XXXXX
                <br />
                N° TVA intracommunautaire : FR XX XXX XXX XXX
                <br />
                Téléphone : +33 6 81 82 28 40
                <br />
                Email : contact@datasphereinnovation.fr
                <br />
                Directeur de la publication : [Nom du directeur]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé par :
                <br />
                [Nom de l&apos;hébergeur]
                <br />
                [Adresse de l&apos;hébergeur]
                <br />
                [Téléphone de l&apos;hébergeur]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu du site datasphereinnovation.fr (textes,
                images, graphismes, logo, icônes, etc.) est la propriété
                exclusive de DataSphere Innovation ou de ses partenaires et est
                protégé par les lois françaises et internationales relatives à
                la propriété intellectuelle.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication
                ou adaptation de tout ou partie des éléments du site est
                interdite, quel que soit le moyen ou le procédé utilisé.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Données personnelles
              </h2>
              <p>
                Les informations collectées sur ce site sont enregistrées dans
                un fichier informatisé par DataSphere Innovation pour répondre
                à vos demandes. Conformément au Règlement Général sur la
                Protection des Données (RGPD), vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression et de portabilité de
                vos données.
              </p>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@datasphereinnovation.fr"
                  className="text-primary hover:underline"
                >
                  contact@datasphereinnovation.fr
                </a>
              </p>
              <p className="mt-2">
                Pour plus d&apos;informations, consultez notre{" "}
                <Link
                  href="/politique-confidentialite"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Cookies
              </h2>
              <p>
                Le site utilise des cookies pour améliorer l&apos;expérience
                utilisateur. Vous pouvez paramétrer vos préférences de cookies
                lors de votre première visite ou à tout moment via les
                paramètres de votre navigateur.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                6. Responsabilité
              </h2>
              <p>
                DataSphere Innovation s&apos;efforce d&apos;assurer au mieux l&apos;exactitude
                et la mise à jour des informations diffusées sur son site.
                Toutefois, DataSphere Innovation ne peut garantir l&apos;exactitude,
                la précision ou l&apos;exhaustivité des informations mises à
                disposition sur le site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit
                français. En cas de litige, les tribunaux français seront
                seuls compétents.
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
  );
}
