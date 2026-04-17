"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { USE_CASES } from "@/lib/constants";

const USE_CASE_LINKS: { label: string; href: string }[][] = [
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Solutions IA", href: "/services/ai-solutions" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  ],
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Automatisation", href: "/services/process-automation" },
  ],
  [
    { label: "Solutions IA", href: "/services/ai-solutions" },
    { label: "Automatisation", href: "/services/process-automation" },
  ],
  [
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
    { label: "Solutions IA", href: "/services/ai-solutions" },
  ],
];

export function UseCasesSection() {
  return (
    <section id="cas-usage" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Cas d&apos;usage
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Des résultats concrets,{" "}
              <span className="gradient-text">sector par secteur</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Découvrez comment nous aidons les leaders de chaque secteur à
              transformer leurs données en avantage compétitif.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mt-3 text-base">
              De l&apos;industrie 4.0 à la finance, en passant par la santé et le retail,
              nos <Link href="/#services" className="text-primary hover:underline">services</Link> s&apos;adaptent aux enjeux spécifiques de chaque secteur
              pour délivrer un impact mesurable.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((useCase, index) => {
            const Icon = useCase.icon;
            const links = USE_CASE_LINKS[index];
            return (
              <SectionReveal key={useCase.title} delay={index * 0.1}>
                <div className="h-full group p-6 rounded-2xl border border-border/30 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {useCase.description}
                  </p>
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-muted-foreground">
                        {useCase.client}
                      </span>
                      <span className="text-primary font-bold text-sm">
                        {useCase.result}
                      </span>
                    </div>
                    {/* Links to relevant services */}
                    {links && links.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {links.map((link) => (
                          <Link
                            key={link.href + link.label}
                            href={link.href}
                            className="text-xs px-2 py-0.5 rounded-full bg-primary/5 text-primary/70 border border-primary/10 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
