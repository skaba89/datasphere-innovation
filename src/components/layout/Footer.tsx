"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Linkedin,
  Twitter,
  Database,
  BarChart3,
  BrainCircuit,
  Workflow,
  Bot,
  Cloud,
  ChevronRight,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  COMPANY,
  FOOTER_SERVICES,
  FOOTER_NAVIGATION,
  FOOTER_RESOURCES,
  LEGAL_LINKS,
} from "@/lib/constants";

// ─── Service icon mapping ──────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "data-strategy": Database,
  "bi-dashboards": BarChart3,
  "ai-solutions": BrainCircuit,
  "data-engineering": Workflow,
  "process-automation": Bot,
  "cloud-modernization": Cloud,
};

// ─── Service image mapping ──────────────────────────────────────────────────

const SERVICE_IMAGES: Record<string, string> = {
  "data-strategy": "/images/services/data-strategy.png",
  "bi-dashboards": "/images/services/bi-dashboards.png",
  "ai-solutions": "/images/services/ai-solutions.png",
  "data-engineering": "/images/services/data-engineering.png",
  "process-automation": "/images/services/process-automation.png",
  "cloud-modernization": "/images/services/cloud-modernization.png",
};

// ─── Animated Link Component ───────────────────────────────────────────────

function FooterLink({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
    >
      {Icon && (
        <Icon
          size={13}
          className="shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300"
        />
      )}
      <span className="relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}

// ─── Section heading component ─────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-foreground/60 mb-5 flex items-center gap-2">
      <span className="w-4 h-px bg-primary/50" />
      {children}
    </h3>
  );
}

// ─── Footer Component ──────────────────────────────────────────────────────

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setLoading(false);
      setTimeout(() => setSubscribed(false), 4000);
    }, 800);
  };

  return (
    <footer className="relative bg-secondary/10 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/2 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/2 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-[0.03]" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Newsletter — 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/20">
                <Image
                  src="/images/logo-datasphere.png"
                  alt="DataSphere Innovation"
                  width={44}
                  height={44}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                DataSphere<span className="text-primary"> Innovation</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
              {COMPANY.tagline}. Nous accompagnons les entreprises ambitieuses dans leur transformation data et IA.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-[0.15em] flex items-center gap-2">
                <Send size={12} className="text-primary" />
                Newsletter
              </p>
              <form onSubmit={handleNewsletter} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-border/50 bg-background/60 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all placeholder:text-muted-foreground/40"
                  required
                  aria-label="Email pour la newsletter"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center"
                  aria-label="S'inscrire à la newsletter"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <ArrowRight size={14} />
                  )}
                </motion.button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary font-medium"
                >
                  Merci pour votre inscription !
                </motion.p>
              )}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-6">
              {[
                { href: COMPANY.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: COMPANY.twitter, icon: Twitter, label: "Twitter" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary/40 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services with thumbnails — 3 columns */}
          <div className="lg:col-span-3">
            <SectionHeading>Services</SectionHeading>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => {
                const slug = service.href.split("/").pop() || "";
                const Icon = SERVICE_ICONS[slug];
                const imageUrl = SERVICE_IMAGES[slug];
                return (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 py-1.5 rounded-lg hover:bg-primary/5 -mx-1.5 px-1.5 transition-all duration-200"
                    >
                      {/* Service thumbnail */}
                      {imageUrl && (
                        <div className="relative w-8 h-8 rounded-md overflow-hidden shrink-0 border border-border/30 group-hover:border-primary/20 transition-colors">
                          <Image
                            src={imageUrl}
                            alt={service.label}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="32px"
                          />
                          <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
                        </div>
                      )}
                      {!imageUrl && Icon && (
                        <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                          <Icon size={14} className="text-primary" />
                        </div>
                      )}
                      <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-200 relative">
                        {service.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation — 2 columns */}
          <div className="lg:col-span-2">
            <SectionHeading>Navigation</SectionHeading>
            <ul className="space-y-2.5">
              {FOOTER_NAVIGATION.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} icon={ChevronRight}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Legal — 1.5 columns */}
          <div className="lg:col-span-1.5">
            <SectionHeading>Ressources</SectionHeading>
            <ul className="space-y-2.5">
              {FOOTER_RESOURCES.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} icon={ChevronRight}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <SectionHeading>Legal</SectionHeading>
              <ul className="space-y-2.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} icon={ChevronRight}>
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact — 1.5 columns */}
          <div className="lg:col-span-1.5">
            <SectionHeading>Contact</SectionHeading>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:border-primary/20 transition-all duration-300">
                    <Mail size={15} className="text-primary" />
                  </div>
                  <span className="pt-1.5 text-xs break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 group-hover:border-primary/20 transition-all duration-300">
                    <Phone size={15} className="text-primary" />
                  </div>
                  <span className="pt-1.5">{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-9 h-9 rounded-xl bg-primary/8 border border-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={15} className="text-primary" />
                  </div>
                  <span className="pt-1.5 text-xs leading-relaxed">{COMPANY.address}</span>
                </div>
              </li>
            </ul>

            {/* Quick CTA */}
            <div className="mt-6">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-xs hover:bg-primary/90 transition-all duration-300"
              >
                <Sparkles size={13} />
                Parlons de votre projet
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/50">
              &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {LEGAL_LINKS.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && (
                    <span className="text-muted-foreground/20">|</span>
                  )}
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
              <span className="text-muted-foreground/20">|</span>
              <Link
                href="/plan-du-site"
                className="text-xs text-muted-foreground/50 hover:text-primary transition-colors duration-300"
              >
                Plan du site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
