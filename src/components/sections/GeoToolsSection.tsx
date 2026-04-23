"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight, ExternalLink, LineChart, Shield, Gauge, Target } from "lucide-react";

const GEO_TOOLS = [
  {
    name: "Google Search Console",
    logo: "/images/tools/google-search-console.png",
    description: "Outil gratuit de Google pour surveiller, maintenir et dépanner la présence de votre site dans les résultats de recherche Google. Indispensable pour le suivi du référencement organique et la détection d'erreurs d'indexation.",
    url: "https://search.google.com/search-console",
    kpis: ["Impressions", "Clics", "Position moyenne", "CTR"],
  },
  {
    name: "Bing Webmaster Tools",
    logo: "/images/tools/bing-webmaster-tools.png",
    description: "Plateforme de Microsoft pour le suivi de la présence de votre site dans les résultats de recherche Bing. Complémentaire à Google Search Console, elle offre des insights sur le second moteur de recherche mondial.",
    url: "https://www.bing.com/webmasters",
    kpis: ["Pages indexées", "Requêtes de recherche", "Backlinks", "Erreurs d'exploration"],
  },
  {
    name: "Google Analytics 4",
    logo: "/images/tools/google-analytics-4.png",
    description: "Solution d'analyse web de Google intégrée à notre site pour comprendre le comportement des utilisateurs, mesurer les conversions et optimiser les parcours. Configuré avec anonymisation IP et consentement cookies.",
    url: "https://analytics.google.com/",
    kpis: ["Sessions", "Taux de conversion", "Pages par session", "Citations IA"],
  },
];

const GEO_KPIS = [
  {
    icon: Gauge,
    name: "Taux d'indexation",
    description: "Pourcentage de pages indexées par les moteurs de recherche par rapport au nombre total de pages du site. Un taux supérieur à 90% indique une excellente couverture.",
    target: "> 90%",
  },
  {
    icon: Target,
    name: "Positionnement SERP",
    description: "Position moyenne de vos pages dans les résultats de recherche pour les requêtes cibles. L'objectif est d'atteindre le top 3 pour les requêtes stratégiques data & IA.",
    target: "Top 3",
  },
  {
    icon: LineChart,
    name: "Trafic organique",
    description: "Volume de visiteurs provenant des résultats de recherche non sponsorisés. Un indicateur clé de la visibilité et de l'autorité de votre contenu dans les moteurs de recherche.",
    target: "+50% / an",
  },
  {
    icon: Shield,
    name: "Score de santé technique",
    description: "Score global de santé technique du site basé sur la vitesse de chargement, l'accessibilité, les Core Web Vitals et l'absence d'erreurs d'indexation.",
    target: "> 95/100",
  },
];

export function GeoToolsSection() {
  return (
    <section
      id="geo-outils"
      role="region"
      aria-label="Outils de mesure et KPIs GEO"
      aria-labelledby="geotools-heading"
      className="section-padding bg-background relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Outils & Mesure
            </span>
            <h2
              id="geotools-heading"
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Mesurez votre{" "}
              <span className="gradient-text">performance GEO</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Les outils essentiels et les KPIs clés pour suivre et optimiser la visibilité de votre site dans les moteurs de recherche et les réponses IA.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mx-auto mt-3 text-sm">
              Chez DataSphere Innovation, nous utilisons ces outils pour mesurer l&apos;impact de nos stratégies GEO (Generative Engine Optimization)
              et garantir des résultats mesurables. Nous configurons Google Search Console, Bing Webmaster Tools et Google Analytics 4
              pour tous nos clients afin d&apos;assurer un suivi transparent et data-driven.
            </p>
          </div>
        </SectionReveal>

        {/* Tools Grid */}
        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {GEO_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="group p-6 rounded-2xl border border-border/30 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors overflow-hidden">
                    <Image
                      src={tool.logo}
                      alt={`Logo ${tool.name}`}
                      fill
                      className="object-contain p-1.5"
                      sizes="48px"
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-base">{tool.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {tool.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground/80 mb-2">KPIs suivis :</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tool.kpis.map((kpi) => (
                      <span
                        key={kpi}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary/80 border border-primary/15"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  Accéder à l&apos;outil <ExternalLink size={10} />
                </a>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* KPIs Grid */}
        <SectionReveal>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold mb-2">
                KPIs GEO <span className="gradient-text">essentiels</span>
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                Les indicateurs clés que nous suivons pour mesurer l&apos;efficacité de votre stratégie de visibilité en ligne et dans les moteurs de recherche génératifs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {GEO_KPIS.map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div
                    key={kpi.name}
                    className="group p-5 rounded-xl border border-border/30 bg-card hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={18} className="text-primary" />
                      <h4 className="font-heading font-semibold text-sm">{kpi.name}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {kpi.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-foreground/70">Objectif :</span>
                      <span className="text-sm font-bold text-primary">{kpi.target}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 glow-ring shadow-lg shadow-primary/20"
            >
              Audit GEO de votre site
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
