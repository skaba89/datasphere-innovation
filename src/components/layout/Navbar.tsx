"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  ArrowRight,
  Database,
  BarChart3,
  BrainCircuit,
  Workflow,
  Bot,
  Cloud,
  BookOpen,
  Users,
  Briefcase,
  Sparkles,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

// ─── Service icon mapping ──────────────────────────────────────────────────

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "data-strategy": Database,
  "bi-dashboards": BarChart3,
  "ai-solutions": BrainCircuit,
  "data-engineering": Workflow,
  "process-automation": Bot,
  "cloud-modernization": Cloud,
};

// ─── Dropdown menu item type ───────────────────────────────────────────────

interface DropdownItem {
  label: string;
  href: string;
  description: string;
  icon?: LucideIcon;
}

// ─── Navigation structure with dropdowns ───────────────────────────────────

const NAV_DROPDOWNS: Record<string, DropdownItem[]> = {
  Services: SERVICES.map((s) => ({
    label: s.shortTitle,
    href: `/services/${s.slug}`,
    description: s.description,
    icon: SERVICE_ICONS[s.slug],
  })),
  Entreprise: [
    {
      label: "À propos",
      href: "/a-propos",
      description: "Notre histoire, nos valeurs, notre équipe",
      icon: Users,
    },
    {
      label: "Carrières",
      href: "/carrieres",
      description: "Rejoignez l'aventure DataSphere",
      icon: Briefcase,
    },
    {
      label: "Blog & Insights",
      href: "/blog",
      description: "Articles et perspectives de nos experts",
      icon: BookOpen,
    },
  ],
};

const DROPDOWN_KEYS = Object.keys(NAV_DROPDOWNS);

// ─── Nexus Logo SVG ────────────────────────────────────────────────────────

function NexusLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon ring */}
      <path
        d="M24 4L42 14V34L24 44L6 34V14L24 4Z"
        stroke="url(#logoGrad)"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner data node connections */}
      <path
        d="M24 12L34 18V30L24 36L14 30V18L24 12Z"
        stroke="url(#logoGrad)"
        strokeWidth="1.5"
        fill="url(#logoFill)"
        fillOpacity="0.15"
      />
      {/* Center nexus point */}
      <circle cx="24" cy="24" r="4" fill="url(#logoGrad)" />
      {/* Connection lines radiating from center */}
      <line x1="24" y1="24" x2="24" y2="12" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="24" x2="34" y2="18" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="24" x2="34" y2="30" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="24" x2="24" y2="36" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="24" x2="14" y2="30" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      <line x1="24" y1="24" x2="14" y2="18" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
      {/* Node dots at vertices */}
      <circle cx="24" cy="12" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <circle cx="34" cy="18" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <circle cx="34" cy="30" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <circle cx="24" cy="36" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <circle cx="14" cy="30" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <circle cx="14" cy="18" r="2" fill="url(#logoGrad)" opacity="0.8" />
      <defs>
        <linearGradient id="logoGrad" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(195, 100%, 45%)" />
          <stop offset="1" stopColor="hsl(25, 95%, 53%)" />
        </linearGradient>
        <linearGradient id="logoFill" x1="14" y1="12" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(195, 100%, 45%)" />
          <stop offset="1" stopColor="hsl(25, 95%, 53%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── Navbar Component ──────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const sectionIds = NAV_LINKS.map((l) => l.href.replace("/#", ""));
  const activeId = useScrollSpy(sectionIds);

  React.useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on route change
  React.useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileExpand = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  // Check if a nav link is active
  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return activeId === href.replace("/#", "");
    }
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Top gradient line when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />
      )}

      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg">
            <NexusLogo className="w-full h-full" />
          </div>
          <span className={`font-heading font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}>
            DataSphere<span className="text-primary"> Innovation</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => {
            // Check if this link has a dropdown
            const dropdownKey = DROPDOWN_KEYS.find((k) => k === link.label);
            const isActive = isLinkActive(link.href);

            if (dropdownKey) {
              const items = NAV_DROPDOWNS[dropdownKey];
              return (
                <div
                  key={dropdownKey}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(dropdownKey)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`relative flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeDropdown === dropdownKey || isActive
                        ? "text-primary font-medium bg-primary/5"
                        : scrolled
                          ? "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === dropdownKey ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === dropdownKey && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${
                          dropdownKey === "Services"
                            ? "w-[640px]"
                            : "w-[360px]"
                        }`}
                      >
                        <div className="relative bg-background/95 backdrop-blur-2xl border border-border/40 rounded-2xl shadow-2xl shadow-black/10 overflow-hidden">
                          {/* Top gradient line */}
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

                          {dropdownKey === "Services" ? (
                            // Services Mega Menu — 3 column grid, icons only
                            <div className="p-3">
                              <div className="grid grid-cols-3 gap-1">
                                {items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-primary/5 transition-all duration-200 group/item text-center"
                                    >
                                      {Icon && (
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center shrink-0 group-hover/item:from-primary/20 group-hover/item:to-accent/15 group-hover/item:shadow-sm group-hover/item:shadow-primary/10 transition-all">
                                          <Icon size={20} className="text-primary" />
                                        </div>
                                      )}
                                      <p className="text-xs font-semibold text-foreground group-hover/item:text-primary transition-colors leading-tight">
                                        {item.label}
                                      </p>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/30">
                                <Link
                                  href="/#services"
                                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                                >
                                  Voir tous les services
                                  <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          ) : (
                            // Simple Dropdown — single column with icons
                            <div className="p-2">
                              {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200 group/item"
                                  >
                                    {Icon && (
                                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center shrink-0 group-hover/item:from-primary/20 group-hover/item:to-accent/15 transition-all">
                                        <Icon size={18} className="text-primary" />
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-muted-foreground mt-0.5">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Regular link (no dropdown)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "text-primary font-medium bg-primary/5"
                    : scrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-2">
          {/* Phone number */}
          <a
            href={COMPANY.phoneHref}
            className={`flex items-center gap-1.5 text-xs transition-colors px-2 ${scrolled ? "text-muted-foreground hover:text-primary" : "text-white/60 hover:text-white"}`}
          >
            <Phone size={13} />
            <span className="hidden xl:inline">{COMPANY.phone}</span>
          </a>

          {mounted && (
            <button
              onClick={toggleTheme}
              className={`relative w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-secondary/60"
                  : "border-white/20 bg-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/20"
              }`}
              aria-label={
                theme === "dark"
                  ? "Passer en mode clair"
                  : "Passer en mode sombre"
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 overflow-hidden shadow-lg shadow-primary/20"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} className="hidden xl:inline" />
              Parler à un expert
              <ArrowRight size={14} className="hidden xl:inline group-hover:translate-x-0.5 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                scrolled
                  ? "border-border/50 bg-secondary/30 text-muted-foreground hover:text-foreground"
                  : "border-white/20 bg-white/10 text-white/60 hover:text-white"
              }`}
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-lg transition-colors ${scrolled ? "text-foreground hover:bg-secondary/50" : "text-white hover:bg-white/10"}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-b border-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
              {NAV_LINKS.map((link) => {
                const dropdownKey = DROPDOWN_KEYS.find((k) => k === link.label);

                if (dropdownKey) {
                  const items = NAV_DROPDOWNS[dropdownKey];
                  const isExpanded = mobileExpanded === dropdownKey;

                  return (
                    <div key={dropdownKey}>
                      <button
                        onClick={() => toggleMobileExpand(dropdownKey)}
                        className="flex items-center justify-between w-full text-foreground font-heading text-lg py-2.5 px-3 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {dropdownKey === "Services" ? (
                              // Services mobile — 2-column grid with icons
                              <div className="grid grid-cols-2 gap-1 p-2">
                                {items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl hover:bg-primary/5 transition-colors group/mobile text-center"
                                    >
                                      {Icon && (
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                          <Icon size={18} className="text-primary" />
                                        </div>
                                      )}
                                      <p className="text-xs font-semibold text-foreground group-hover/mobile:text-primary transition-colors leading-tight">
                                        {item.label}
                                      </p>
                                    </Link>
                                  );
                                })}
                              </div>
                            ) : (
                              // Other dropdowns — list with icons
                              <div className="pl-3 pb-2 space-y-1">
                                {items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-primary/5 transition-colors group/mobile"
                                    >
                                      {Icon && (
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                          <Icon size={18} className="text-primary" />
                                        </div>
                                      )}
                                      <div>
                                        <p className="text-sm font-semibold text-foreground group-hover/mobile:text-primary transition-colors">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground line-clamp-1">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular mobile link
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-foreground font-heading text-lg py-2.5 px-3 rounded-xl hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm"
                >
                  <Sparkles size={16} />
                  Parler à un expert
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 mt-2 rounded-xl border border-border bg-secondary/30 text-foreground font-heading font-medium text-sm"
                >
                  <Phone size={14} />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
