"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { DIFFERENTIATORS } from "@/lib/constants";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";

const DIFFERENTIATOR_LINKS: { label: string; href: string }[][] = [
  [
    { label: "Stratégie Data", href: "/services/data-strategy" },
    { label: "BI & Dashboards", href: "/services/bi-dashboards" },
  ],
  [
    { label: "Nos services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
  [
    { label: "Cloud & Modernisation", href: "/services/cloud-modernization" },
    { label: "Contact", href: "/#contact" },
  ],
  [
    { label: "Data Engineering", href: "/services/data-engineering" },
    { label: "Solutions IA", href: "/services/ai-solutions" },
  ],
  [
    { label: "Automatisation", href: "/services/process-automation" },
    { label: "Contact", href: "/#contact" },
  ],
  [
    { label: "Tous nos services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],
];

const DIFFERENTIATOR_SOURCES = [
  {
    name: "McKinsey",
    quote: "Les entreprises data-driven sont 23 fois plus susceptibles d'acquérir des clients, 6x plus de les retenir et 19x plus d'être rentables.",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    badge: "McKinsey Global Institute",
  },
  {
    name: "Gartner",
    quote: "Plus de 80% des entreprises auront adopté l'IA d'ici 2026, faisant de l'intelligence artificielle un impératif stratégique.",
    url: "https://www.gartner.com/en/information-technology",
    badge: "Gartner Research",
  },
  {
    name: "Harvard Business Review",
    quote: "L'avantage concurrentiel des données est le facteur de différenciation n°1 des entreprises performantes.",
    url: "https://hbr.org/topic/data-science",
    badge: "HBR Research",
  },
  {
    name: "World Economic Forum",
    quote: "L'IA et les données pourraient générer plus de 3 900 milliards de dollars de valeur ajoutée pour l'économie mondiale d'ici 2026.",
    url: "https://www.weforum.org/communities/artificial-intelligence-and-robotics/",
    badge: "WEF Insight",
  },
  {
    name: "Forrester",
    quote: "Les entreprises qui investissent dans l'IA générative constatent une amélioration de 50% de la productivité et un avantage compétitif mesurable en moins de 12 mois.",
    url: "https://www.forrester.com/blogs/the-state-of-generative-ai/",
    badge: "Forrester Research",
  },
  {
    name: "IDC",
    quote: "D'ici 2026, 65% des organisations auront adopté une stratégie data-first, générant un ROI 3x supérieur à celles qui ne l'ont pas fait.",
    url: "https://www.idc.com/getdoc.jsp?containerId=prUS51491923",
    badge: "IDC Research",
  },
];

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiateurs"
      aria-label="Nos différenciateurs"
      className="section-padding bg-[hsl(222,20%,4%)] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.02]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Pourquoi nous
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
              Ce qui nous{" "}
              <span className="gradient-text">distingue</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-lg">
              Plus qu&apos;un prestataire, un partenaire engagé dans la réussite de
              vos projets data & IA.
            </p>
            <p className="text-white/50 max-w-3xl mt-3 text-base">
              Notre différenciation repose sur une expertise ciblée, un impact mesurable et une approche sur mesure.
              Selon <a href="https://www.mckinsey.com/capabilities/quantumblack/our-insights" target="_blank" rel="noopener noreferrer" className="text-accent/80 hover:text-accent underline underline-offset-2">McKinsey</a>, les entreprises
              data-driven sont 23 fois plus susceptibles d&apos;acquérir des clients. Selon
              <a href="https://www.gartner.com/en/information-technology" target="_blank" rel="noopener noreferrer" className="text-accent/80 hover:text-accent underline underline-offset-2"> Gartner</a>, plus de 80% des entreprises
              auront adopté l&apos;IA d&apos;ici 2026 — nous les accompagnons pour que cette adoption soit un succès.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon;
            const links = DIFFERENTIATOR_LINKS[index];
            return (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <div className="h-full group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500 flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  {/* CTA links to services and contact */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {links.map((link) => (
                      <Link
                        key={link.href + link.label}
                        href={link.href}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent/5 text-accent/60 border border-accent/10 hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Sources et références - PROMINENT with badges */}
        <SectionReveal delay={0.5}>
          <div className="mt-14">
            <div className="text-center mb-6">
              <p className="text-white/80 text-base font-semibold mb-1">Sources et références</p>
              <p className="text-white/60 text-sm">Notre approche est soutenue par les analyses les plus reconnues</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {DIFFERENTIATOR_SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-accent/30 transition-all duration-300"
                >
                  <Quote size={20} className="text-accent/70 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white/85 text-sm leading-relaxed mb-3">
                      {source.quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/20">
                        {source.badge}
                      </span>
                      <ExternalLink size={12} className="text-accent/50 group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Bottom CTA */}
        <SectionReveal delay={0.6}>
          <div className="text-center mt-12">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all duration-300 glow-ring shadow-lg shadow-primary/20"
            >
              Découvrez notre approche
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
