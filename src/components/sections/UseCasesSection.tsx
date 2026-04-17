"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { USE_CASES } from "@/lib/constants";

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
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {USE_CASES.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <SectionReveal key={useCase.title} delay={index * 0.1}>
                <div className="h-full group p-6 rounded-2xl border border-border/30 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="pt-3 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {useCase.client}
                      </span>
                      <span className="text-primary font-bold text-sm">
                        {useCase.result}
                      </span>
                    </div>
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
