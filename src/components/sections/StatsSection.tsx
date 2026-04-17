"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[hsl(222,25%,8%)] via-[hsl(222,20%,6%)] to-[hsl(222,25%,10%)]">
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
            <p className="text-white/40 text-sm max-w-2xl mx-auto">
              Des résultats concrets confirmés par nos clients. Selon{" "}
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/60 hover:text-primary underline underline-offset-2"
              >
                McKinsey
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
                <p className="text-sm md:text-base text-white/50 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        {/* Source citation */}
        <SectionReveal>
          <div className="text-center mt-8">
            <p className="text-white/25 text-xs">
              Sources :{" "}
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/50 underline underline-offset-2"
              >
                McKinsey Global Institute
              </a>
              {" · "}
              <a
                href="https://www.gartner.com/en/information-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/50 underline underline-offset-2"
              >
                Gartner IT Research
              </a>
              {" · "}
              <a
                href="https://www.forbes.com/sites/forbestechcouncil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/35 hover:text-white/50 underline underline-offset-2"
              >
                Forbes Technology Council
              </a>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
