"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const COMPARISON_DATA = [
  {
    feature: "Expertise data & IA dédiée",
    datasphere: true,
    generalist: false,
    diy: false,
  },
  {
    feature: "ROI mesuré dès le 1er projet",
    datasphere: true,
    generalist: false,
    diy: false,
  },
  {
    feature: "Équipe senior certifiée (AWS, Azure, GCP)",
    datasphere: true,
    generalist: false,
    diy: false,
  },
  {
    feature: "Méthodologie agile en 4 phases",
    datasphere: true,
    generalist: true,
    diy: false,
  },
  {
    feature: "Conformité RGPD native (Privacy by Design)",
    datasphere: true,
    generalist: false,
    diy: false,
  },
  {
    feature: "Transfert de compétences inclus",
    datasphere: true,
    generalist: false,
    diy: false,
  },
  {
    feature: "Premiers résultats en 4-6 semaines",
    datasphere: true,
    generalist: false,
    diy: true,
  },
  {
    feature: "Architecture scalable et pérenne",
    datasphere: true,
    generalist: true,
    diy: false,
  },
  {
    feature: "Support et maintenance post-projet",
    datasphere: true,
    generalist: true,
    diy: false,
  },
  {
    feature: "Coût prévisible et transparent",
    datasphere: true,
    generalist: false,
    diy: true,
  },
];

export function ComparisonSection() {
  return (
    <section
      id="comparaison"
      role="region"
      aria-label="Comparaison DataSphere Innovation avec les alternatives"
      aria-labelledby="comparison-heading"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Comparaison
            </span>
            <h2
              id="comparison-heading"
              className="text-3xl md:text-5xl font-heading font-bold mb-4"
            >
              Pourquoi choisir{" "}
              <span className="gradient-text">DataSphere Innovation</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Une comparaison transparente entre notre approche experte, les cabinets généralistes et le faire soi-même.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table
              className="w-full border-collapse"
              role="table"
              aria-label="Tableau comparatif des approches data"
              aria-describedby="comparison-caption"
            >
              <caption id="comparison-caption" className="sr-only">
                Comparaison entre DataSphere Innovation (expert Data & IA), un cabinet généraliste et le faire soi-même, sur 10 critères incluant l'expertise, le ROI, la conformité RGPD et le transfert de compétences.
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="text-left p-4 font-heading font-semibold text-foreground border-b border-border/40"
                  >
                    Critère
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 font-heading font-semibold text-primary border-b border-border/40 bg-primary/5"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm">DataSphere Innovation</span>
                      <span className="text-[10px] text-primary/60 font-normal">Expert Data & IA</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 font-heading font-semibold text-muted-foreground border-b border-border/40"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm">Cabinet Généraliste</span>
                      <span className="text-[10px] text-muted-foreground/60 font-normal">Multi-domaines</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="text-center p-4 font-heading font-semibold text-muted-foreground border-b border-border/40"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm">Faire soi-même</span>
                      <span className="text-[10px] text-muted-foreground/60 font-normal">Équipe interne</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_DATA.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-secondary/20" : "bg-background"}
                  >
                    <td className="p-4 text-sm text-foreground border-b border-border/20">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center border-b border-border/20 bg-primary/5">
                      {row.datasphere ? (
                        <Check size={18} className="text-primary mx-auto" aria-label="Oui" />
                      ) : (
                        <X size={18} className="text-muted-foreground/40 mx-auto" aria-label="Non" />
                      )}
                    </td>
                    <td className="p-4 text-center border-b border-border/20">
                      {row.generalist ? (
                        <Check size={18} className="text-green-600 mx-auto" aria-label="Oui" />
                      ) : (
                        <X size={18} className="text-muted-foreground/40 mx-auto" aria-label="Non" />
                      )}
                    </td>
                    <td className="p-4 text-center border-b border-border/20">
                      {row.diy ? (
                        <Check size={18} className="text-green-600 mx-auto" aria-label="Oui" />
                      ) : (
                        <X size={18} className="text-muted-foreground/40 mx-auto" aria-label="Non" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-primary/20 bg-primary/5">
              <h3 className="font-heading font-semibold text-sm mb-2 text-primary">DataSphere Innovation</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Expertise ciblée data & IA, ROI mesuré, conformité RGPD native, transfert de compétences et premiers résultats en 4-6 semaines. 98% de satisfaction client.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-card">
              <h3 className="font-heading font-semibold text-sm mb-2">Cabinet Généraliste</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Expertise diluée sur de multiples domaines, moins de certifications spécifiques data & IA, délais plus longs et ROI moins prévisible.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-card">
              <h3 className="font-heading font-semibold text-sm mb-2">Faire soi-même</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Coûts cachés élevés (recrutement, formation, outils), risques de sécurité, pas de garantie de résultat, délais souvent 3x plus longs.
              </p>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.35}>
          <div className="max-w-4xl mx-auto mt-6 p-4 rounded-xl border border-border/20 bg-secondary/10">
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              <span className="font-semibold text-muted-foreground">Sources :</span>{" "}
              Selon <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary underline underline-offset-2">McKinsey (2023)</a>, les projets data internes sans accompagnement expert ont un taux d'échec 3x supérieur.{" "}
              <a href="https://www.gartner.com/en/information-technology" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary underline underline-offset-2">Gartner (2024)</a> estime que seulement 20% des projets IA atteignent la production sans MLOps dédié.{" "}
              <a href="https://www.idc.com/getdoc.jsp?containerId=prUS51491923" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary underline underline-offset-2">IDC (2024)</a> rapporte que les coûts cachés des projets DIY dépassent souvent le budget initial de 50 à 200%.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 glow-ring shadow-lg shadow-primary/20"
            >
              Comparez avec votre situation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
