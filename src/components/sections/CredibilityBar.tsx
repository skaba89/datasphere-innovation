"use client";

import * as React from "react";
import { PARTNERS } from "@/lib/constants";

export function CredibilityBar() {
  const partners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="py-8 overflow-hidden border-b border-white/5 bg-[hsl(222,20%,4%)]">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-white/25">
          Technologies de confiance utilisées par nos experts
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(222,20%,4%)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(222,20%,4%)] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track">
            {partners.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center justify-center px-6 py-2 mx-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium text-white/35 hover:text-primary hover:border-primary/20 transition-all duration-200 shrink-0"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
