"use client";

import * as React from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { PARTNER_LOGOS } from "@/lib/constants";

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-heading" className="py-16 bg-[hsl(222,20%,4%)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Partenaires
            </span>
            <h2 id="partners-heading" className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">
              Nos partenaires{" "}
              <span className="gradient-text">technologiques</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Nous collaborons avec les leaders du marché pour vous offrir les meilleures solutions data et cloud.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {PARTNER_LOGOS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group p-3"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    sizes="48px"
                  />
                </div>
                <span className="text-[10px] font-medium text-white/70 group-hover:text-primary transition-colors text-center leading-tight">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
