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
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
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
    }, 150);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="text-primary-foreground font-bold text-lg font-heading">D</span>
          </div>
          <span className="font-heading font-bold text-lg text-foreground">
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
                    className={`relative flex items-center gap-1 text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                      activeDropdown === dropdownKey || isActive
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
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
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 ${
                          dropdownKey === "Services"
                            ? "w-[640px]"
                            : "w-[360px]"
                        }`}
                      >
                        <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-xl shadow-black/5 overflow-hidden">
                          {dropdownKey === "Services" ? (
                            // Services Mega Menu — 2 column grid
                            <div className="p-3">
                              <div className="grid grid-cols-2 gap-1">
                                {items.map((item) => {
                                  const Icon = item.icon;
                                  return (
                                    <Link
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group/item"
                                    >
                                      {Icon && (
                                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                                          <Icon size={18} className="text-primary" />
                                        </div>
                                      )}
                                      <div className="min-w-0">
                                        <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                                          {item.label}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                              <div className="mt-2 pt-2 border-t border-border/40">
                                <Link
                                  href="/#services"
                                  className="flex items-center justify-center gap-2 p-2.5 rounded-lg text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
                                >
                                  Voir tous les services
                                  <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          ) : (
                            // Simple Dropdown — single column
                            <div className="p-2">
                              {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group/item"
                                  >
                                    {Icon && (
                                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary/15 transition-colors">
                                        <Icon size={16} className="text-primary" />
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
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
                className={`relative text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="relative w-9 h-9 rounded-lg border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
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
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          )}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-200 glow-ring"
          >
            Parler à un expert
            <ArrowRight size={14} className="hidden xl:inline" />
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg border border-border bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all"
              aria-label="Changer de thème"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
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
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => {
                const dropdownKey = DROPDOWN_KEYS.find((k) => k === link.label);

                if (dropdownKey) {
                  const items = NAV_DROPDOWNS[dropdownKey];
                  const isExpanded = mobileExpanded === dropdownKey;

                  return (
                    <div key={dropdownKey}>
                      <button
                        onClick={() => toggleMobileExpand(dropdownKey)}
                        className="flex items-center justify-between w-full text-foreground font-heading text-lg py-2.5 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          size={18}
                          className={`text-muted-foreground transition-transform duration-200 ${
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
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-2 space-y-1">
                              {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                                  >
                                    {Icon && (
                                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <Icon size={16} className="text-primary" />
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-sm font-medium text-foreground">
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
                    className="text-foreground font-heading text-lg py-2.5 px-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <div className="mt-3 pt-3 border-t border-border/40">
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm"
                >
                  Parler à un expert
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
