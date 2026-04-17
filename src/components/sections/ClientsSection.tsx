"use client";

import * as React from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { CLIENTS } from "@/lib/constants";

export function ClientsSection() {
  return (
    <section className="py-12 bg-[hsl(222,20%,6%)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Clients
            </span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">
              Ils nous font{" "}
              <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-sm">
              Des leaders de chaque secteur qui ont choisi DataSphere Innovation pour leur transformation data.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-xl bg-white/5 border border-white/5 text-sm font-semibold text-white/40 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-200"
              >
                {client}
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
