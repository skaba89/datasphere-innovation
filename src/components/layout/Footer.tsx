"use client";

import * as React from "react";
import Link from "next/link";
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
      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      {Icon && (
        <Icon
          size={14}
          className="shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200"
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
    <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/80 mb-4">
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
    <footer className="relative bg-secondary/20 border-t border-border/40 overflow-hidden">
      {/* Subtle gradient decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Newsletter — 3 columns */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-105 shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg font-heading">D</span>
              </div>
              <span className="font-heading font-bold text-lg text-foreground">
                DataSphere<span className="text-primary"> Innovation</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {COMPANY.tagline}. Nous accompagnons les entreprises ambitieuses dans leur transformation data.
            </p>

            {/* Newsletter */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground/70 uppercase tracking-wider">
                Newsletter
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background/80 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                  required
                  aria-label="Email pour la newsletter"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                  aria-label="S'inscrire à la newsletter"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </motion.button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-primary"
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
                  className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services — 3 columns */}
          <div className="lg:col-span-3">
            <SectionHeading>Services</SectionHeading>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((service) => {
                const slug = service.href.split("/").pop() || "";
                const Icon = SERVICE_ICONS[slug];
                return (
                  <li key={service.href}>
                    <FooterLink href={service.href} icon={Icon}>
                      {service.label}
                    </FooterLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation — 2 columns */}
          <div className="lg:col-span-2">
            <SectionHeading>Navigation</SectionHeading>
            <ul className="space-y-3">
              {FOOTER_NAVIGATION.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} icon={ChevronRight}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources + Légal — 2 columns */}
          <div className="lg:col-span-2">
            <SectionHeading>Ressources</SectionHeading>
            <ul className="space-y-3">
              {FOOTER_RESOURCES.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} icon={ChevronRight}>
                    {link.label}
                  </FooterLink>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <SectionHeading>Légal</SectionHeading>
              <ul className="space-y-3">
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

          {/* Contact — 2 columns */}
          <div className="lg:col-span-2">
            <SectionHeading>Contact</SectionHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Mail size={14} className="text-primary" />
                  </div>
                  <span className="pt-1">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Phone size={14} className="text-primary" />
                  </div>
                  <span className="pt-1">{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={14} className="text-primary" />
                  </div>
                  <span className="pt-1">{COMPANY.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground/70">
              &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {LEGAL_LINKS.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && (
                    <span className="text-muted-foreground/30">|</span>
                  )}
                  <Link
                    href={link.href}
                    className="text-xs text-muted-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
              <span className="text-muted-foreground/30">|</span>
              <Link
                href="/plan-du-site"
                className="text-xs text-muted-foreground/70 hover:text-primary transition-colors duration-200"
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
