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
  Star,
  Award,
  type LucideIcon,
} from "lucide-react";
import {
  COMPANY,
  FOOTER_SERVICES,
  FOOTER_NAVIGATION,
  FOOTER_RESOURCES,
  LEGAL_LINKS,
} from "@/lib/constants";
import { EditorialNotice } from "@/components/ui/EditorialNotice";
import { useAnalytics, AnalyticsEvents } from "@/hooks/useAnalytics";

// ─── Service icon mapping ──────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "data-strategy": Database,
  "bi-dashboards": BarChart3,
  "ai-solutions": BrainCircuit,
  "data-engineering": Workflow,
  "process-automation": Bot,
  "cloud-modernization": Cloud,
};

// ─── CTA Banner (Keyrus-style pre-footer) ──────────────────────────────────

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-accent py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Prêt à transformer vos données en avantage compétitif ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
          >
            Contactez nos experts et recevez une proposition adaptée à vos enjeux sous 24h.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary font-heading font-bold text-base hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Sparkles size={18} />
              Parler à un expert
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 text-white font-heading font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Phone size={18} />
              {COMPANY.phone}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer Component (Keyrus-inspired dark footer) ───────────────────────

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { trackEvent } = useAnalytics();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setLoading(false);
      trackEvent({
        action: "subscribe",
        category: AnalyticsEvents.NEWSLETTER,
        label: email,
      });
      setTimeout(() => setSubscribed(false), 4000);
    }, 800);
  };

  return (
    <footer className="relative overflow-hidden bg-[hsl(222,25%,6%)] dark:bg-[hsl(222,20%,3%)]" role="contentinfo">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 grid-bg opacity-[0.02]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/2 blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand & Newsletter — 4 columns */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-lg shadow-primary/30">
                <Image
                  src="/images/logo-datasphere.png"
                  alt="DataSphere Innovation"
                  width={44}
                  height={44}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                DataSphere<span className="text-primary"> Innovation</span>
              </span>
            </Link>
            <p className="text-sm text-white/70 mb-6 leading-relaxed max-w-sm">
              {COMPANY.tagline}. Nous accompagnons les entreprises ambitieuses dans leur transformation data et IA.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-white/60 uppercase tracking-[0.15em] flex items-center gap-2">
                <Send size={12} className="text-primary" />
                Newsletter
              </p>
              <form onSubmit={handleNewsletter} className="relative" aria-label="Inscription newsletter">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email professionnel"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all placeholder:text-white/50"
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
            <div className="flex items-center gap-2 mt-6" aria-label="Liens sociaux">
              {[
                { href: COMPANY.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: COMPANY.twitter, icon: Twitter, label: "Twitter" },
                { href: COMPANY.trustpilot, icon: Star, label: "Trustpilot" },
                { href: COMPANY.clutch, icon: Award, label: "Clutch" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services — 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-white/60 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary" />
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((service) => {
                const slug = service.href.split("/").pop() || "";
                const Icon = SERVICE_ICONS[slug];
                return (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-3 py-1.5 rounded-lg hover:bg-white/5 -mx-1.5 px-1.5 transition-all duration-200"
                    >
                      {Icon && (
                        <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                          <Icon size={13} className="text-primary" />
                        </div>
                      )}
                      <span className="text-sm text-white/70 group-hover:text-primary transition-colors duration-200 relative">
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
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-white/60 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary" />
              Navigation
            </h3>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    <ChevronRight
                      size={13}
                      className="shrink-0 text-white/20 group-hover:text-primary transition-colors duration-300"
                    />
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Contact — 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-white/60 mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <Mail size={15} className="text-primary" />
                  </div>
                  <span className="pt-1.5 text-xs break-all">{COMPANY.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.phoneHref}
                  aria-label={`Appeler au ${COMPANY.phone}`}
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-primary transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                    <Phone size={15} className="text-primary" />
                  </div>
                  <span className="pt-1.5">{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center shrink-0">
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
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-xs hover:bg-primary/90 transition-all duration-300"
              >
                <Sparkles size={13} />
                Parlons de votre projet
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Resources */}
            <div className="mt-8">
              <h3 className="font-heading font-bold text-xs uppercase tracking-[0.15em] text-white/60 mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                Ressources
              </h3>
              <ul className="space-y-2">
                {FOOTER_RESOURCES.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors duration-300"
                    >
                      <ChevronRight
                        size={13}
                        className="shrink-0 text-white/20 group-hover:text-primary transition-colors duration-300"
                      />
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10">
          <div className="[&_*]:!text-white/40 [&_a]:!text-primary/70 [&_a:hover]:!text-primary">
            <EditorialNotice
              datePublished="2021-01-01"
              dateModified={new Date().toISOString().split("T")[0]}
              author="DataSphere Innovation"
              reviewer="Sophie Martin, Directrice Data Strategy"
              sources={[
                { name: "McKinsey", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights" },
                { name: "Gartner", url: "https://www.gartner.com/en/information-technology" },
                { name: "Forbes", url: "https://www.forbes.com/sites/forbestechcouncil/" },
              ]}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/55">
              &copy; {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
            </p>
            <div className="flex items-center gap-3 flex-wrap justify-center">
              {LEGAL_LINKS.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && (
                    <span className="text-white/30">|</span>
                  )}
                  <Link
                    href={link.href}
                    className="text-xs text-white/55 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
              <span className="text-white/30">|</span>
              <Link
                href="/plan-du-site"
                className="text-xs text-white/55 hover:text-primary transition-colors duration-300"
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
