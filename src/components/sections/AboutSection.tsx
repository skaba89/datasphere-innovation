"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Globe, Handshake, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="apropos" className="section-padding bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Un cabinet né de la{" "}
              <span className="gradient-text">passion data</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fondé par des experts passionnés par la data et l&apos;intelligence
              artificielle, DataSphere Innovation est né d&apos;un constat simple :
              trop d&apos;entreprises sous-exploitent le potentiel de leurs données.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Notre mission est de rendre la data et l&apos;IA accessibles, utiles et
              performantes pour chaque organisation, qu&apos;elle soit startup en
              croissance ou grand groupe établi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Basés à Montreuil, au cœur de l&apos;écosystème tech francilien, nous
              combinons expertise technique de pointe et compréhension fine des
              enjeux métier pour créer de la valeur durable.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard hover className="text-center glow-card">
                <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-1">Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Consultants senior avec 8+ ans d&apos;expérience en moyenne
                </p>
              </GlassCard>
              <GlassCard hover className="text-center glow-card">
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-1">National</h3>
                <p className="text-sm text-muted-foreground">
                  Interventions partout en France et en Europe
                </p>
              </GlassCard>
              <GlassCard hover className="text-center glow-card">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Veille technologique permanente et adoption précoce
                </p>
              </GlassCard>
              <GlassCard hover className="text-center sm:col-span-2 glow-card">
                <Handshake className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold mb-1">Partenariat</h3>
                <p className="text-sm text-muted-foreground">
                  Plus qu&apos;un prestataire, un partenaire engagé dans la réussite
                  de vos projets sur le long terme
                </p>
              </GlassCard>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
