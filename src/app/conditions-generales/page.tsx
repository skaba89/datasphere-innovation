import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions générales de vente — DataSphere Innovation",
  description:
    "Conditions générales de vente de DataSphere Innovation. Consultez nos termes et conditions pour nos services de consulting data et IA.",
  openGraph: {
    title: "Conditions générales de vente — DataSphere Innovation",
    description: "Conditions générales de vente de DataSphere Innovation.",
    url: "https://datasphereinnovation.fr/conditions-generales",
  },
  alternates: {
    canonical: "https://datasphereinnovation.fr/conditions-generales",
  },
};

export default function ConditionsGeneralesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Conditions générales de{" "}
            <span className="gradient-text">vente</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Dernière mise à jour : 1er janvier 2025
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                1. Objet
              </h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les
                relations contractuelles entre DataSphere Innovation, SAS au
                capital de 10 000 euros, dont le siège social est situé au 17 rue
                Gaston Monmousseau, 93100 Montreuil, immatriculée au RCS de
                Bobigny, et tout client (ci-après dénommé le &quot;Client&quot;)
                souhaitant faire appel aux services de consulting data et
                intelligence artificielle proposés par DataSphere Innovation
                (ci-après dénommée le &quot;Prestataire&quot;).
              </p>
              <p className="mt-2">
                Toute commande de services implique l&apos;acceptation sans
                réserve des présentes CGV par le Client. Les conditions
                particulières du Client, si elles existent, ne prévalent sur les
                présentes CGV que si elles ont été expressément acceptées par
                écrit par le Prestataire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                2. Services proposés
              </h2>
              <p>
                DataSphere Innovation propose des services de conseil, d&apos;expertise
                et d&apos;accompagnement dans les domaines suivants :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Stratégie data et gouvernance des données</li>
                <li>Business Intelligence et création de tableaux de bord</li>
                <li>Solutions d&apos;intelligence artificielle (Machine Learning, NLP, vision par ordinateur)</li>
                <li>Data Engineering (pipelines ETL/ELT, data lakes, data warehouses)</li>
                <li>Automatisation des processus (RPA, orchestration de workflows)</li>
                <li>Cloud et modernisation d&apos;infrastructure (migration, FinOps, architecture cloud-native)</li>
                <li>Formation et transfert de compétences</li>
              </ul>
              <p className="mt-2">
                Le périmètre précis des prestations est défini dans chaque
                proposition commerciale ou contrat spécifique remis au Client
                avant le début de la mission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                3. Devis et proposition commerciale
              </h2>
              <p>
                Toute prestation fait l&apos;objet d&apos;un devis ou d&apos;une proposition
                commerciale détaillée envoyée par le Prestataire au Client. Ce
                document précise notamment l&apos;objet de la mission, les
                livrables attendus, le planning prévisionnel, les conditions
                financières et les modalités de paiement.
              </p>
              <p className="mt-2">
                Le devis est valable pendant une durée de 30 jours à compter de
                son émission. Au-delà de ce délai, le Prestataire se réserve le
                droit de modifier les conditions financières. La commande est
                réputée acceptée à la signature du devis ou du contrat par le
                Client, ou à la réception d&apos;un bon de commande.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                4. Tarifs et modalités de paiement
              </h2>
              <p>
                Les tarifs sont exprimés en euros hors taxes (HT). La TVA est
                appliquée au taux en vigueur au jour de la facturation. Les
                tarifs peuvent être révisés chaque année en fonction de
                l&apos;évolution des coûts de personnel et des charges sociales.
              </p>
              <p className="mt-2">
                Les modalités de paiement sont les suivantes :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Pour les missions au forfait : un acompte de 30% à la commande, le solde à la livraison ou selon l&apos;échéancier prévu au contrat.</li>
                <li>Pour les missions en régie : facturation mensuelle sur la base des jours effectivement travaillés.</li>
                <li>Les factures sont payables à 30 jours fin de mois par virement bancaire.</li>
              </ul>
              <p className="mt-2">
                En cas de retard de paiement, le Prestataire appliquera des
                pénalités de retard calculées sur la base de trois fois le taux
                d&apos;intérêt légal en vigueur, ainsi qu&apos;une indemnité forfaitaire
                de recouvrement de 40 euros par facture impayée, conformément
                aux articles L441-6 et D441-5 du Code de commerce.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                5. Exécution des prestations
              </h2>
              <p>
                Le Prestataire s&apos;engage à fournir les services avec diligence
                et selon les règles de l&apos;art, en conformité avec les standards
                professionnels en vigueur dans le secteur du consulting data et
                IA. Les délais indicatifs mentionnés dans le devis ou le contrat
                sont donnés à titre informatif et ne constituent pas un engagement
                ferme, sauf stipulation contraire expresse.
              </p>
              <p className="mt-2">
                Le Prestataire s&apos;engage à allouer des consultants qualifiés et
                expérimentés à la réalisation de la mission. En cas de
                changement de consultant en cours de mission, le Prestataire
                veillera à assurer une transition sans impact sur la continuité
                de la prestation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                6. Obligations du Client
              </h2>
              <p>
                Le Client s&apos;engage à :
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Fournir au Prestataire toutes les informations et données nécessaires à la bonne exécution de la mission, dans les délais convenus.</li>
                <li>Désigner un interlocuteur principal habilité à valider les choix et les livrables.</li>
                <li>Mettre à disposition les accès nécessaires aux systèmes d&apos;information, dans le respect des politiques de sécurité.</li>
                <li>Respecter les délais de validation et de feedback sur les livrables intermédiaires.</li>
                <li>Assurer les conditions de travail nécessaires au bon déroulement de la mission (espaces, outils, accès).</li>
              </ul>
              <p className="mt-2">
                Tout retard ou manquement du Client dans la fourniture des
                éléments nécessaires pourra entraîner un report des délais
                d&apos;exécution et une facturation complémentaire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                7. Propriété intellectuelle
              </h2>
              <p>
                Les livrables produits dans le cadre de la mission sont la
                propriété du Client après paiement intégral des factures
                correspondantes. Le Prestataire conserve la propriété de ses
                méthodologies, frameworks, outils génériques et savoir-faire
                préexistants utilisés lors de la mission.
              </p>
              <p className="mt-2">
                Le Prestataire se réserve le droit d&apos;utiliser l&apos;image du Client
                à des fins de référence commerciale, sauf opposition écrite de
                celui-ci. Les outils, bibliothèques ou composants open source
                intégrés aux livrables restent soumis à leurs licences
                respectives.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                8. Confidentialité
              </h2>
              <p>
                Chaque partie s&apos;engage à maintenir confidentielles toutes les
                informations de nature confidentielle dont elle aurait pu prendre
                connaissance au cours de la mission. Cette obligation de
                confidentialité perdure pendant la durée de la mission et pendant
                5 ans après sa fin.
              </p>
              <p className="mt-2">
                Sont considérées comme confidentielles les informations
                techniques, commerciales, financières, stratégiques ou
                personnelles communiquées par l&apos;une ou l&apos;autre partie, ainsi que
                les données traitées dans le cadre des prestations de data et IA.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                9. Protection des données personnelles
              </h2>
              <p>
                Le traitement des données personnelles dans le cadre de la
                mission est effectué conformément au Règlement Général sur la
                Protection des Données (RGPD) et à la loi Informatique et
                Libertés. Le Prestataire met en oeuvre toutes les mesures
                techniques et organisationnelles nécessaires pour garantir la
                sécurité et la confidentialité des données personnelles traitées.
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
                10. Responsabilité et garantie
              </h2>
              <p>
                Le Prestataire s&apos;engage à fournir ses services avec soin et
                compétence. Toutefois, sa responsabilité ne pourra être engagée
                que pour les dommages directs et prévisibles résultant d&apos;une
                faute prouvée dans l&apos;exécution de la mission.
              </p>
              <p className="mt-2">
                Le Prestataire ne saurait être tenu responsable des dommages
                indirects, des pertes de profit, de chiffre d&apos;affaires ou
                d&apos;opportunité. En tout état de cause, le montant total de
                l&apos;indemnisation due par le Prestataire ne pourra excéder le
                montant HT des prestations facturées au titre de la mission
                concernée.
              </p>
              <p className="mt-2">
                Les garanties sur les livrables sont d&apos;une durée de 3 mois à
                compter de la livraison, pendant laquelle le Prestataire corrigera
                les anomalies éventuelles sans frais supplémentaire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                11. Rétractation et annulation
              </h2>
              <p>
                Les prestations de conseil étant des services entièrement
                personnalisés, le droit de rétractation prévu par le Code de la
                consommation ne s&apos;applique pas (article L221-28 du Code de la
                consommation).
              </p>
              <p className="mt-2">
                En cas d&apos;annulation de la mission par le Client avant le début
                de l&apos;exécution, l&apos;acompte versé reste acquis au Prestataire à
                titre d&apos;indemnité. En cas d&apos;annulation en cours de mission, le
                Client sera facturé pour les prestations effectivement réalisées
                ainsi que pour les engagements irréversibles pris par le
                Prestataire.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                12. Résiliation
              </h2>
              <p>
                Chaque partie peut résilier le contrat en cas de manquement
                grave de l&apos;autre partie à ses obligations contractuelles, après
                mise en demeure restée sans effet pendant un délai de 15 jours.
                La résiliation prend effet à la date de notification de la
                résiliation.
              </p>
              <p className="mt-2">
                En cas de résiliation à l&apos;initiative du Client, celui-ci sera
                facturé pour les prestations réalisées jusqu&apos;à la date de prise
                d&apos;effet de la résiliation, ainsi que pour les frais
                complémentaires liés à l&apos;arrêt anticipé de la mission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                13. Force majeure
              </h2>
              <p>
                Aucune des parties ne sera tenue responsable d&apos;un retard ou
                d&apos;une défaillance dans l&apos;exécution de ses obligations si ce
                retard ou cette défaillance résulte d&apos;un cas de force majeure
                tel que défini par l&apos;article 1218 du Code civil. La partie
                touchée par un cas de force majeure devra en informer
                l&apos;autre partie dans les plus brefs délais.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                14. Droit applicable et juridiction compétente
              </h2>
              <p>
                Les présentes CGV sont régies par le droit français. En cas de
                litige relatif à l&apos;interprétation ou à l&apos;exécution des
                présentes, les parties s&apos;efforceront de trouver une solution
                amiable. À défaut, le Tribunal de Commerce de Bobigny sera seul
                compétent pour connaître du litige.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                15. Contact
              </h2>
              <p>
                Pour toute question relative aux présentes conditions générales
                de vente, vous pouvez nous contacter :
              </p>
              <ul className="mt-2 space-y-1">
                <li>Email :{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-primary hover:underline"
                  >
                    {COMPANY.email}
                  </a>
                </li>
                <li>Téléphone : {COMPANY.phone}</li>
                <li>Adresse : {COMPANY.address}</li>
              </ul>
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
  );
}
