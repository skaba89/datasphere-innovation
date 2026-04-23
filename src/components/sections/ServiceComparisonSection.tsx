"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Check, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

// Comparison matrix for the 6 services
const COMPARISON_CRITERIA = [
  {
    criterion: "Stratégie & gouvernance data",
    description: "Définition de roadmap, gouvernance, data quality",
    services: ["data-strategy", "bi-dashboards"],
  },
  {
    criterion: "Visualisation & BI",
    description: "Dashboards interactifs, reporting, data storytelling",
    services: ["bi-dashboards", "data-strategy"],
  },
  {
    criterion: "Machine Learning & NLP",
    description: "Modèles prédictifs, chatbots, vision par ordinateur",
    services: ["ai-solutions", "data-engineering"],
  },
  {
    criterion: "Pipelines ETL/ELT",
    description: "Data lakes, orchestration, streaming temps réel",
    services: ["data-engineering", "cloud-modernization"],
  },
  {
    criterion: "Automatisation & RPA",
    description: "Workflows automatisés, process mining, digital workers",
    services: ["process-automation", "ai-solutions"],
  },
  {
    criterion: "Migration & infrastructure cloud",
    description: "AWS, Azure, GCP, FinOps, architecture cloud-native",
    services: ["cloud-modernization", "data-engineering"],
  },
  {
    criterion: "Conformité RGPD & sécurité",
    description: "Privacy by Design, anonymisation, chiffrement",
    services: ["data-strategy", "cloud-modernization"],
  },
  {
    criterion: "POC rapide (4-6 semaines)",
    description: "Premiers résultats mesurables en mode agile",
    services: ["ai-solutions", "bi-dashboards", "process-automation"],
  },
  {
    criterion: "Transfert de compétences",
    description: "Formation, documentation, autonomie des équipes",
    services: ["data-strategy", "data-engineering", "cloud-modernization"],
  },
  {
    criterion: "ROI mesuré (3x en moyenne)",
    description: "KPIs définis dès le cadrage, suivi quantifié",
    services: ["data-strategy", "bi-dashboards", "ai-solutions"],
  },
];

export function ServiceComparisonSection() {
  return (
    <section
      id="comparaison-services"
      role="region"
      aria-label="Comparaison de nos services data et IA"
      aria-labelledby="service-comparison-heading"
      className="section-padding bg-secondary/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Comparatif Services
            </span>
            <h2
              id="service-comparison-heading"
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Quel service{" "}
              <span className="gradient-text">vous correspond</span> ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comparez nos six pôles d&apos;expertise pour identifier la solution la plus adaptée à vos enjeux data et IA.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mx-auto mt-3 text-sm">
              Chaque service peut être combiné avec d&apos;autres pour un impact maximal. Par exemple, un projet de{" "}
              <Link href="/services/bi-dashboards" className="text-primary hover:underline">BI &amp; Dashboards</Link> bénéficie souvent d&apos;un volet{" "}
              <Link href="/services/data-engineering" className="text-primary hover:underline">Data Engineering</Link>, et une solution{" "}
              <Link href="/services/ai-solutions" className="text-primary hover:underline">IA</Link> gagne en robustesse avec du{" "}
              <Link href="/services/data-engineering" className="text-primary hover:underline">MLOps</Link>.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse text-sm"
              role="table"
              aria-label="Tableau comparatif des services DataSphere Innovation"
              aria-describedby="service-comparison-caption"
            >
              <caption id="service-comparison-caption" className="sr-only">
                Comparaison des 6 services DataSphere Innovation sur 10 critères : stratégie, BI, IA, data engineering, automatisation et cloud.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left p-3 font-heading font-semibold text-foreground border-b border-border/40 min-w-[200px]"
                  >
                    Critère
                  </th>
                  {SERVICES.map((service) => (
                    <th
                      key={service.slug}
                      scope="col"
                      className="text-center p-3 font-heading font-semibold border-b border-border/40 min-w-[120px]"
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="text-primary hover:underline text-xs"
                      >
                        {service.shortTitle}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_CRITERIA.map((row, index) => (
                  <tr
                    key={row.criterion}
                    className={index % 2 === 0 ? "bg-secondary/20" : "bg-background"}
                  >
                    <td className="p-3 text-foreground border-b border-border/20">
                      <div className="font-medium text-sm">{row.criterion}</div>
                      <div className="text-xs text-muted-foreground/60 mt-0.5">{row.description}</div>
                    </td>
                    {SERVICES.map((service) => {
                      const isRelevant = row.services.includes(service.slug);
                      return (
                        <td key={service.slug} className="p-3 text-center border-b border-border/20">
                          {isRelevant ? (
                            <Check size={16} className="text-primary mx-auto" aria-label="Oui" />
                          ) : (
                            <span className="text-muted-foreground/20">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        {/* Service Quick Links — Dense internal linking */}
        <SectionReveal delay={0.2}>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/30 bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={20} className="text-primary" />
                </div>
                <span className="text-xs font-heading font-semibold group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </span>
                <ArrowRight size={12} className="text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="mt-8 p-4 rounded-xl border border-border/20 bg-secondary/10">
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              <span className="font-semibold text-muted-foreground">Conseil :</span>{" "}
              La plupart de nos clients combinent 2 à 3 services pour maximiser l&apos;impact. Un projet typique associe{" "}
              <Link href="/services/data-strategy" className="text-primary/70 hover:text-primary underline underline-offset-2">Stratégie Data</Link>{" "}
              +{" "}
              <Link href="/services/data-engineering" className="text-primary/70 hover:text-primary underline underline-offset-2">Data Engineering</Link>{" "}
              +{" "}
              <Link href="/services/bi-dashboards" className="text-primary/70 hover:text-primary underline underline-offset-2">BI &amp; Dashboards</Link>{" "}
              pour une transformation data complète.{" "}
              <Link href="/#contact" className="text-primary/70 hover:text-primary underline underline-offset-2">Contactez-nous</Link>{" "}
              pour un diagnostic personnalisé.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
