"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { DIFFERENTIATORS } from "@/lib/constants";

export function DifferentiatorsSection() {
  return (
    <section
      id="differentiateurs"
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
            <p className="text-white/50 max-w-2xl text-lg">
              Plus qu&apos;un prestataire, un partenaire engagé dans la réussite de
              vos projets data & IA.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIATORS.map((item, index) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.title} delay={index * 0.1}>
                <div className="h-full group p-6 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
