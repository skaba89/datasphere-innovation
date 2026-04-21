"use client";

import * as React from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";

// Client logo mapping
const CLIENT_LOGOS: { name: string; logo: string }[] = [
  { name: "Interact Software", logo: "/images/clients/interact-software.png" },
  { name: "Michelin", logo: "/images/clients/michelin.png" },
  { name: "Sanofi", logo: "/images/clients/sanofi.png" },
  { name: "TotalEnergies", logo: "/images/clients/totalenergies.png" },
  { name: "Airbus", logo: "/images/clients/airbus.png" },
  { name: "Thales", logo: "/images/clients/thales.png" },
  { name: "L'Oréal", logo: "/images/clients/loreal.png" },
  { name: "Schneider Electric", logo: "/images/clients/schneider-electric.png" },
];

export function ClientsSection() {
  return (
    <section aria-labelledby="clients-heading" className="py-12 bg-[hsl(222,20%,6%)] border-t border-white/5">
      <div className="container mx-auto px-4">
        <SectionReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-medium mb-4">
              Clients
            </span>
            <h2 id="clients-heading" className="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">
              Ils nous font{" "}
              <span className="gradient-text">confiance</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-sm">
              Des leaders de chaque secteur qui ont choisi DataSphere Innovation pour leur transformation data.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center gap-2 h-24 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group p-3"
              >
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    fill
                    className="object-contain transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    sizes="48px"
                  />
                </div>
                <span className="text-[10px] font-medium text-white/70 group-hover:text-primary transition-colors text-center leading-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
