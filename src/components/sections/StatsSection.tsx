"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ExternalLink, Quote } from "lucide-react";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} role="status" aria-live="polite" aria-atomic="true">
      {count}
      {suffix}
    </span>
  );
}

const SOURCES = [
  {
    name: "McKinsey",
    quote: "Les entreprises data-driven ont 23x plus de chances d'acquérir des clients, 6x plus de les retenir et 19x d'être rentables.",
    url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights",
    badge: "McKinsey Global Institute",
    year: "2023",
  },
  {
    name: "Gartner",
    quote: "Plus de 80% des entreprises auront adopté l'IA d'ici 2026, générant une valeur ajoutée estimée à 3 900 milliards de dollars.",
    url: "https://www.gartner.com/en/information-technology",
    badge: "Gartner Research",
    year: "2024",
  },
  {
    name: "Forbes",
    quote: "Le ROI moyen des projets data atteint 13x, avec les entreprises data-driven affichant une croissance 30% supérieure à leurs concurrents.",
    url: "https://www.forbes.com/sites/forbestechcouncil/",
    badge: "Forbes Technology Council",
    year: "2024",
  },
  {
    name: "Harvard Business Review",
    quote: "Les organisations dans le top quartile de l'utilisation des données sont 2,5x plus susceptibles de surpasser leurs concurrents en performance.",
    url: "https://hbr.org/topic/data-science",
    badge: "HBR Research",
    year: "2023",
  },
  {
    name: "IDC",
    quote: "Le marché mondial des données et de l'IA atteindra 500 milliards de dollars en 2025, avec une croissance annuelle de 25%.",
    url: "https://www.idc.com/getdoc.jsp?containerId=prUS51491923",
    badge: "IDC Research",
    year: "2024",
  },
  {
    name: "Deloitte",
    quote: "Les entreprises qui investissent massivement dans l'IA et la data génèrent un ROI moyen de 4.3x et surpassent leurs concurrents de 35% en croissance.",
    url: "https://www2.deloitte.com/global/en/pages/technology/articles/ai-institute.html",
    badge: "Deloitte AI Institute",
    year: "2024",
  },
  {
    name: "Princeton University",
    quote: "L'ajout de citations pertinentes et de données vérifiables dans le contenu augmente de 30 à 40% les chances d'être inclus dans une réponse générée par l'IA.",
    url: "https://arxiv.org/abs/2304.04175",
    badge: "Princeton GEO Study",
    year: "2024",
  },
];

export function StatsSection() {
  return (
    <section id="stats" role="region" aria-labelledby="stats-heading" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[hsl(222,25%,8%)] via-[hsl(222,20%,6%)] to-[hsl(222,25%,10%)]">
      {/* Subtle decorations */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      {/* Top/bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="text-center mb-10">
            <h2 id="stats-heading" className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Nos chiffres <span className="gradient-text">clés</span>
            </h2>
            <p className="text-white/80 text-base max-w-2xl mx-auto">
              Des résultats concrets confirmés par nos clients et mesurés via{" "}
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold underline underline-offset-2 decoration-primary/50"
              >
                Google Search Console
              </a>{" "}
              et{" "}
              <a
                href="https://www.bing.com/webmasters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold underline underline-offset-2 decoration-primary/50"
              >
                Bing Webmaster Tools
              </a>{" "}
              pour garantir une visibilité optimale. Selon{" "}
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold underline underline-offset-2 decoration-primary/50"
              >
                McKinsey Global Institute
              </a>
              , les entreprises data-driven obtiennent un ROI 3 à 5 fois supérieur
              à leurs investissements data. Nos chiffres parlent d&apos;eux-mêmes.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center group"
              >
                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2 stat-glow">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Divider */}
                <div className="w-8 h-0.5 bg-primary/30 mx-auto mb-2 group-hover:w-12 group-hover:bg-primary/60 transition-all duration-500" />

                {/* Label */}
                <p className="text-sm md:text-base text-white/60 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* Source citation - PROMINENT with badges */}
        <SectionReveal>
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-white text-xl font-bold mb-2">Sources et références</p>
              <p className="text-white/80 text-base">Nos chiffres sont appuyés par des études de référence du secteur</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SOURCES.map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300"
                >
                  <Quote size={22} className="text-primary/80 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-base leading-relaxed mb-3">
                      {source.quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-sm font-bold px-3 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/25">
                        {source.badge}
                      </span>
                      <span className="text-xs text-white/40 font-normal">{source.year}</span>
                      <ExternalLink size={14} className="text-primary/60 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
