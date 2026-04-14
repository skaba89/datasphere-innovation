"use client";

import * as React from "react";
import { useInView } from "framer-motion";
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
    <span ref={ref} className="stat-glow">
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="section-padding bg-background relative">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
