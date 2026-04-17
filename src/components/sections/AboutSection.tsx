"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Globe, Handshake, Sparkles, Database, Workflow, BrainCircuit, Cloud, ArrowRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Sophie Martin",
    role: "Directrice Data Strategy",
    experience: "12 ans d'expérience",
    description:
      "12 ans d'expérience en conseil data et stratégie digitale. Sophie a accompagné plus de 30 entreprises dans la définition de leur roadmap data.",
    icon: Database,
  },
  {
    name: "Thomas Dubois",
    role: "Lead Data Engineer",
    experience: "10 ans d'expérience",
    description:
      "10 ans d'expérience en data engineering et architecture data. Thomas maîtrise l'écosystème complet : dbt, Airflow, Spark, Snowflake.",
    icon: Workflow,
  },
  {
    name: "Léa Chen",
    role: "Head of AI Solutions",
    experience: "8 ans d'expérience",
    description:
      "8 ans d'expérience en intelligence artificielle et machine learning. Léa est spécialisée dans le NLP, la vision par ordinateur et le MLOps.",
    icon: BrainCircuit,
  },
  {
    name: "Marc Petit",
    role: "Cloud & Architecture Lead",
    experience: "11 ans d'expérience",
    description:
      "11 ans d'expérience en architecture cloud et infrastructure data. Marc est certifié AWS, Azure et GCP, avec une approche FinOps orientée résultats.",
    icon: Cloud,
  },
];

export const ABOUT_TEAM_MEMBERS = TEAM_MEMBERS;

export function AboutSection() {
  return (
    <section id="apropos" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              À propos
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
              Un cabinet né de la{" "}
              <span className="gradient-text">passion data</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-base">
              DataSphere Innovation est un cabinet expert en data et intelligence artificielle, fondé pour aider les entreprises à exploiter pleinement le potentiel de leurs données et à accélérer leur transformation digitale.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fondé par des experts passionnés par la data et l&apos;intelligence
              artificielle, DataSphere Innovation est né d&apos;un constat simple :
              trop d&apos;entreprises sous-exploitent le potentiel de leurs données.
              Notre mission est de rendre la data et l&apos;IA accessibles, utiles et
              performantes pour chaque organisation.
            </p>
            <Link
              href="/a-propos"
              className="group inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline"
            >
              Découvrir notre histoire
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard hover className="text-center glow-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Consultants senior avec 8+ ans d&apos;expérience en moyenne
                </p>
              </GlassCard>
              <GlassCard hover className="text-center glow-card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-1">National</h3>
                <p className="text-sm text-muted-foreground">
                  Interventions partout en France et en Europe
                </p>
              </GlassCard>
              <GlassCard hover className="text-center glow-card p-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Veille technologique permanente et adoption précoce
                </p>
              </GlassCard>
              <GlassCard hover className="text-center glow-card p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-1">Partenariat</h3>
                <p className="text-sm text-muted-foreground">
                  Plus qu&apos;un prestataire, un partenaire engagé dans la réussite
                  de vos projets sur le long terme
                </p>
              </GlassCard>
            </div>
          </SectionReveal>
        </div>

        {/* Team Members Section */}
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Notre Équipe
            </span>
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-3">
              Des experts <span className="gradient-text">passionnés</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos leaders possèdent en moyenne plus de 10 ans d&apos;expérience dans
              leur domaine d&apos;expertise, issus des meilleures écoles et entreprises tech.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM_MEMBERS.map((member, index) => {
            const Icon = member.icon;
            return (
              <SectionReveal key={member.name} delay={index * 0.1}>
                <GlassCard hover className="text-center p-6 glow-card">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold text-base mb-0.5">
                    {member.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground/70 font-medium mb-2">
                    {member.experience}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </GlassCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
