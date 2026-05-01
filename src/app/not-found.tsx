import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { CookieConsent } from "@/components/ui/CookieConsent";
import {
  Home,
  Briefcase,
  BookOpen,
  MessageSquare,
  Search,
  ArrowRight,
  Database,
  BarChart3,
  BrainCircuit,
  Workflow,
  Bot,
  Cloud,
} from "lucide-react";

const NAV_QUICK_LINKS = [
  { label: "Accueil", href: "/", icon: Home, description: "Retour à la page d'accueil" },
  { label: "Services", href: "/#services", icon: Briefcase, description: "Découvrez nos expertises data & IA" },
  { label: "Blog", href: "/blog", icon: BookOpen, description: "Articles et perspectives de nos experts" },
  { label: "Contact", href: "/#contact", icon: MessageSquare, description: "Parlez à un de nos experts" },
];

const SERVICE_LINKS = [
  { label: "Stratégie Data", href: "/services/data-strategy", icon: Database },
  { label: "BI & Dashboards", href: "/services/bi-dashboards", icon: BarChart3 },
  { label: "Solutions IA", href: "/services/ai-solutions", icon: BrainCircuit },
  { label: "Data Engineering", href: "/services/data-engineering", icon: Workflow },
  { label: "Automatisation", href: "/services/process-automation", icon: Bot },
  { label: "Cloud & Modernisation", href: "/services/cloud-modernization", icon: Cloud },
];

export default function NotFound() {
  return (
    <main id="main-content" aria-label="Page non trouvée" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero 404 Section */}
      <section className="relative flex-1 flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Number */}
            <div className="relative inline-block mb-6">
              <span className="text-[10rem] md:text-[14rem] font-heading font-bold gradient-text leading-none select-none">
                404
              </span>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
              <div className="absolute bottom-4 -left-6 w-6 h-6 rounded-full bg-accent/20 animate-pulse delay-1000" />
              <div className="absolute top-1/2 -right-10 w-4 h-4 rounded-full bg-primary/10 animate-pulse delay-500" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Page non <span className="gradient-text">trouvée</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Oups ! La page que vous recherchez n&apos;existe pas ou a été déplacée.
              Pas d&apos;inquiétude, nos experts data sont là pour vous remettre sur la bonne voie.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold hover:bg-primary/90 transition-all glow-ring"
              >
                <Home size={18} />
                Retour à l&apos;accueil
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/30 text-foreground font-heading font-medium hover:bg-secondary/60 transition-colors"
              >
                <MessageSquare size={18} />
                Nous contacter
              </Link>
            </div>

            {/* Search Suggestion */}
            <div className="glass-card rounded-xl p-6 max-w-md mx-auto mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading font-semibold text-left">
                  Vous cherchez quelque chose ?
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-left leading-relaxed">
                Essayez de naviguer vers une de nos pages principales ou explorez nos services data & IA.
              </p>
              <div className="flex flex-wrap gap-2">
                {["stratégie data", "dashboards BI", "solutions IA", "cloud", "automatisation"].map((term) => (
                  <Link
                    key={term}
                    href="/#services"
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-border bg-secondary/30 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {NAV_QUICK_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="glass-card rounded-xl p-5 text-left hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {link.description}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Services Quick Access */}
            <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
              <h2 className="font-heading font-semibold mb-4 text-left">
                Nos <span className="gradient-text">services</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {SERVICE_LINKS.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-primary/5 transition-colors group/service text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover/service:bg-primary/20 transition-colors">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground group-hover/service:text-primary transition-colors leading-tight">
                        {service.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
      <CookieConsent />
    </main>
  );
}
