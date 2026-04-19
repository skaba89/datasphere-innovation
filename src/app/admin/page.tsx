"use client";

import * as React from "react";
import Link from "next/link";
import {
  Users,
  Mail,
  TrendingUp,
  MessageSquare,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

const mockLeads = [
  {
    id: 1,
    name: "Marie Dupont",
    email: "marie.dupont@groupe-industriel.fr",
    company: "Groupe Industriel CAC40",
    subject: "Stratégie Data",
    date: "2025-01-15",
    status: "Nouveau",
  },
  {
    id: 2,
    name: "Pierre Martin",
    email: "p.martin@assurance-leader.fr",
    company: "Assurance Leader",
    subject: "Solutions IA",
    date: "2025-01-14",
    status: "En cours",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    email: "sophie@fintech-innov.fr",
    company: "Fintech Innovante",
    subject: "BI & Dashboards",
    date: "2025-01-13",
    status: "Contacté",
  },
  {
    id: 4,
    name: "Thomas Bernard",
    email: "thomas@scaleup-saas.fr",
    company: "Scale-up SaaS",
    subject: "Cloud & Modernisation",
    date: "2025-01-12",
    status: "Qualifié",
  },
  {
    id: 5,
    name: "Isabelle Moreau",
    email: "i.moreau@pharma-lab.fr",
    company: "Pharma Lab",
    subject: "Data Engineering",
    date: "2025-01-11",
    status: "Nouveau",
  },
];

const mockSubscribers = [
  { id: 1, email: "jean.dupont@email.fr", date: "2025-01-15" },
  { id: 2, email: "marie.laurent@email.fr", date: "2025-01-14" },
  { id: 3, email: "pierre.martin@email.fr", date: "2025-01-13" },
  { id: 4, email: "sophie.bernard@email.fr", date: "2025-01-12" },
  { id: 5, email: "thomas.moreau@email.fr", date: "2025-01-11" },
];

export default function AdminDashboardPage() {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (auth === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    setAuthenticated(false);
    toast.success("Déconnexion réussie");
  };

  if (!authenticated) {
    return (
      <main id="main-content" className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">
            Accès restreint
          </h1>
          <p className="text-muted-foreground mb-6">
            Vous devez être connecté pour accéder au tableau de bord.
          </p>
          <Link
            href="/admin/login"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Se connecter
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-secondary/30 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              Retour au site
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="font-heading font-bold">
              DataSphere <span className="text-primary">Admin</span>
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            <LogOut size={16} />
            Déconnexion
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Leads ce mois",
              value: "12",
              icon: Users,
              color: "primary",
            },
            {
              label: "Emails envoyés",
              value: "48",
              icon: Mail,
              color: "accent",
            },
            {
              label: "Taux de conversion",
              value: "34%",
              icon: TrendingUp,
              color: "primary",
            },
            {
              label: "Abonnés newsletter",
              value: "156",
              icon: MessageSquare,
              color: "accent",
            },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${
                    stat.color === "primary"
                      ? "bg-primary/10"
                      : "bg-accent/10"
                  } flex items-center justify-center`}
                >
                  <Icon
                    size={24}
                    className={
                      stat.color === "primary"
                        ? "text-primary"
                        : "text-accent"
                    }
                  />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leads Table */}
        <div className="glass-card rounded-xl overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-border/50">
            <h2 className="font-heading font-semibold text-lg">
              Derniers leads
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Nom
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Email
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Entreprise
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Sujet
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm font-medium">
                      {lead.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {lead.email}
                    </td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {lead.company}
                    </td>
                    <td className="px-6 py-3 text-sm">{lead.subject}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {lead.date}
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          lead.status === "Nouveau"
                            ? "bg-primary/10 text-primary"
                            : lead.status === "En cours"
                            ? "bg-yellow-500/10 text-yellow-600"
                            : lead.status === "Contacté"
                            ? "bg-accent/10 text-accent"
                            : "bg-green-500/10 text-green-600"
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Newsletter Subscribers */}
        <div className="glass-card rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-border/50">
            <h2 className="font-heading font-semibold text-lg">
              Abonnés newsletter
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Email
                  </th>
                  <th className="text-left text-xs font-medium text-muted-foreground px-6 py-3">
                    Date d&apos;inscription
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockSubscribers.map((sub) => (
                  <tr
                    key={sub.id}
                    className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="px-6 py-3 text-sm">{sub.email}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">
                      {sub.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
