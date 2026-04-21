"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Play, BarChart3, ArrowRight, ExternalLink } from "lucide-react";

// Infographic data items — each has a text description for accessibility
const INFOGRAPHIC_ITEMS = [
  {
    value: "50+",
    label: "Projets délivrés",
    description: "Plus de 50 projets data & IA délivrés avec succès pour des entreprises de toutes tailles, du POC en 4 semaines à la transformation data complète sur 12 mois.",
  },
  {
    value: "98%",
    label: "Satisfaction client",
    description: "98% de nos clients sont satisfaits ou très satisfaits de notre accompagnement. Ce taux est mesuré via des enquêtes post-projet systématiques.",
  },
  {
    value: "3x",
    label: "ROI moyen",
    description: "Le retour sur investissement moyen de nos projets est de 3x, mesuré sur l'ensemble des projets livrés avec des KPIs définis dès la phase de cadrage.",
  },
  {
    value: "70%",
    label: "Réduction du time-to-insight",
    description: "Nos clients constatent en moyenne une réduction de 70% du temps d'accès aux insights stratégiques grâce à nos solutions BI et data engineering.",
  },
  {
    value: "4-6",
    label: "Semaines pour les premiers résultats",
    description: "Notre méthodologie agile permet de livrer les premiers résultats concrets en 4 à 6 semaines, avec des itérations régulières pour maximiser la valeur.",
  },
  {
    value: "85%",
    label: "Taux de fraude détectée",
    description: "Nos solutions IA de détection de fraude atteignent un taux de détection de 85% en temps réel, dépassant les approches traditionnelles basées sur des règles.",
  },
];

export function MultimodalSection() {
  return (
    <section
      id="ressources-multimodales"
      role="region"
      aria-label="Ressources multimodales — vidéos et infographies"
      aria-labelledby="multimodal-heading"
      className="section-padding bg-secondary/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Ressources
            </span>
            <h2
              id="multimodal-heading"
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Explorez notre{" "}
              <span className="gradient-text">expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Vidéos, infographies et données clés pour comprendre notre approche et nos résultats.
            </p>
          </div>
        </SectionReveal>

        {/* Video Section */}
        <SectionReveal>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video Embed Placeholder */}
              <div
                id="video-presentation"
                className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 bg-card group"
                role="figure"
                aria-label="Vidéo de présentation DataSphere Innovation — votre partenaire Data et IA"
              >
                {/* Video thumbnail / placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-accent/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                      <Play size={28} className="text-primary ml-1" />
                    </div>
                    <p className="text-sm font-heading font-semibold text-foreground">DataSphere Innovation</p>
                    <p className="text-xs text-muted-foreground mt-1">Votre partenaire Data & IA</p>
                  </div>
                </div>
                {/* Video description for screen readers and crawlers */}
                <div className="sr-only">
                  <p>
                    Vidéo de présentation de DataSphere Innovation. Cette vidéo présente notre cabinet expert en data et intelligence artificielle,
                    notre méthodologie en 4 phases (Diagnostic & Cadrage, Architecture & Conception, Implémentation & Déploiement, Suivi & Optimisation),
                    nos 6 pôles de services (Stratégie Data, BI & Dashboards, Solutions IA, Data Engineering, Automatisation, Cloud & Modernisation),
                    ainsi que nos résultats : 50+ projets délivrés, 98% de satisfaction client et un ROI moyen de 3x.
                    Nos experts certifiés AWS, Azure et GCP accompagnent les entreprises de toutes tailles dans leur transformation data et IA.
                  </p>
                </div>
              </div>

              {/* Video Description */}
              <div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  Découvrez notre approche en vidéo
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cette vidéo de présentation détaillée vous permet de comprendre notre méthodologie
                  complète en 4 phases, nos pôles d&apos;expertise et les résultats concrets que nous
                  délivrons à nos clients. De la stratégie data à la mise en production de modèles IA,
                  en passant par la BI et le data engineering, nous couvrons l&apos;ensemble de la chaîne
                  de valeur data.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    "Diagnostic & Cadrage : analyse de l'existant et identification des quick wins",
                    "Architecture & Conception : design de la solution et choix technologiques",
                    "Implémentation & Déploiement : développement agile et mise en production",
                    "Suivi & Optimisation : monitoring, ajustements et amélioration continue",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full mt-0.5">
                        0{i + 1}
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/#methode"
                  className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:underline"
                >
                  Voir notre méthodologie complète
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Infographic Section */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-heading font-bold mb-2">
                Nos résultats en <span className="gradient-text">chiffres</span>
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                Infographie présentant les indicateurs clés de performance de nos projets data et IA. Chaque métrique est mesurée et vérifiable.
              </p>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              role="figure"
              aria-label="Infographie des résultats DataSphere Innovation : 50+ projets, 98% satisfaction, 3x ROI moyen, 70% réduction time-to-insight, résultats en 4-6 semaines, 85% taux de fraude détectée"
            >
              {INFOGRAPHIC_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="group p-6 rounded-2xl border border-border/30 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <BarChart3 size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-heading font-bold text-primary">{item.value}</p>
                    </div>
                  </div>
                  <h4 className="font-heading font-semibold text-sm mb-2">{item.label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Text description of infographic for accessibility and AI crawlers */}
            <div className="sr-only" aria-hidden="false">
              <p>
                Infographie DataSphere Innovation résumant nos résultats : nous avons délivré plus de 50 projets data et IA
                avec 98% de satisfaction client. Le ROI moyen est de 3x. Nos clients constatent une réduction de 70% du
                time-to-insight. Les premiers résultats sont visibles en 4 à 6 semaines. Nos solutions de détection de fraude
                atteignent un taux de détection de 85% en temps réel. Ces chiffres sont basés sur l&apos;ensemble des projets
                réalisés depuis 2021 pour des clients dans les secteurs industrie, finance, santé, retail et énergie.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* External references for credibility */}
        <SectionReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl border border-primary/15 bg-primary/5">
            <h3 className="font-heading font-semibold text-base mb-3">Sources et références</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Nos résultats sont cohérents avec les études de référence du secteur. Selon McKinsey, les entreprises data-driven
              sont 23 fois plus susceptibles d&apos;acquérir des clients. Selon Gartner, plus de 80% des entreprises auront adopté
              l&apos;IA d&apos;ici 2026. Ces analyses confirment l&apos;importance d&apos;une stratégie data structurée et accompagnée par des experts.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                McKinsey QuantumBlack <ExternalLink size={10} />
              </a>
              <a
                href="https://www.gartner.com/en/information-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Gartner IT Research <ExternalLink size={10} />
              </a>
              <a
                href="https://www.forbes.com/sites/forbestechcouncil/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Forbes Tech Council <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
