"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Play, Shield } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      aria-label="Bannière principale"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="DataSphere Innovation — Cabinet expert Data et Intelligence Artificielle, transformation digitale"
          fill
          className="object-cover"
          priority
        />
        {/* Keyrus-inspired: dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,25%,6%)]/90 via-[hsl(222,25%,6%)]/80 to-[hsl(222,25%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,25%,6%)]/85 via-transparent to-transparent" />
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Glow effects */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/8 blur-3xl animate-float" />
      <div
        className="absolute bottom-32 left-20 w-48 h-48 rounded-full bg-primary/8 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="container mx-auto px-4 relative z-10 pt-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-semibold text-primary">
              Cabinet expert Data & Intelligence Artificielle
            </span>
          </motion.div>

          {/* Hero title — Keyrus-style bold left-aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.08] tracking-tight mb-6 text-white"
          >
            Transformez vos données en{" "}
            <span className="gradient-text">avantage compétitif</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          >
            Nous accompagnons les entreprises ambitieuses dans l&apos;exploitation
            stratégique de leurs données — pour des décisions plus rapides, des
            processus automatisés et une croissance mesurable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link
              href="/#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-heading font-bold text-base hover:bg-primary/90 transition-all duration-300 glow-ring overflow-hidden shadow-lg shadow-primary/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Parler à un expert
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link
              href="/#services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-heading font-medium text-base hover:bg-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
            >
              <Play size={16} className="text-primary" />
              Découvrir nos services
            </Link>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "50+", label: "Projets délivrés" },
              { value: "98%", label: "Satisfaction" },
              { value: "3x", label: "ROI moyen" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary stat-glow">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 mt-0.5 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mt-6"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
              <Shield size={12} className="text-primary/70" />
              <span>RGPD conforme</span>
            </div>
            <a
              href="https://www.mckinsey.com/capabilities/quantumblack/our-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white/80 hover:border-primary/20 transition-colors"
            >
              <span>Référencé par McKinsey</span>
            </a>
            <a
              href="https://www.gartner.com/en/information-technology"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white/80 hover:border-primary/20 transition-colors"
            >
              <span>Cité par Gartner</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link href="/#services" aria-label="Défiler vers le bas">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Scroll</span>
            <ChevronDown
              size={20}
              className="text-white/30 animate-bounce"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
