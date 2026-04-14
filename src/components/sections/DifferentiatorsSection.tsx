"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { DIFFERENTIATORS } from "@/lib/constants";

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiateurs"
      className="section-padding bg-secondary/20 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Pourquoi nous
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ce qui nous{" "}
              <span className="gradient-text">distingue</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Plus qu&apos;un prestataire, un partenaire engagé dans la réussite de
              vos projets data & IA.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <GlassCard hover className="h-full group glow-card">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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
