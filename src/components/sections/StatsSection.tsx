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
    <section id="stats" className="relative py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <div className="relative p-6 md:p-8 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all duration-500 text-center hover:shadow-lg hover:shadow-primary/5">
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
