"use client";

import * as React from "react";
import Link from "next/link";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Phone, Mail, MapPin, MessageSquareHeart } from "lucide-react";
import { CONTACT_SUBJECTS, COMPANY } from "@/lib/constants";
import { useAnalytics, AnalyticsEvents } from "@/hooks/useAnalytics";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  rgpd: boolean;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  rgpd: false,
};

function validateForm(form: FormState): string | null {
  if (!form.name.trim()) return "Le nom est requis.";
  if (!form.email.trim()) return "L'email est requis.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "L'email n'est pas valide.";
  if (!form.subject) return "Veuillez sélectionner un sujet.";
  if (!form.message.trim()) return "Le message est requis.";
  if (form.message.trim().length < 10) return "Le message doit contenir au moins 10 caractères.";
  if (!form.rgpd) return "Vous devez accepter la politique de confidentialité.";
  return null;
}

export function ContactSection() {
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<FormState>(INITIAL_FORM);
  const [lastSubmit, setLastSubmit] = React.useState(0);
  const { trackEvent } = useAnalytics();

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting: 1 submit per 10 seconds
    const now = Date.now();
    if (now - lastSubmit < 10000) {
      toast.error("Veuillez patienter avant de renvoyer un message.");
      return;
    }

    const error = validateForm(form);
    if (error) {
      toast.error(error);
      return;
    }

    setLoading(true);
    setLastSubmit(now);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(
      "Merci pour votre message ! Nous vous recontacterons sous 24h."
    );
    trackEvent({
      action: "submit",
      category: AnalyticsEvents.CONTACT_FORM,
      label: form.subject,
    });
    setForm(INITIAL_FORM);
    setLoading(false);
  };

  return (
    <section id="contact" role="region" aria-label="Contactez-nous" aria-labelledby="contact-heading" className="section-padding bg-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <div className="mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
              Contact
            </span>
            <h2 id="contact-heading" className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Parlons de votre{" "}
              <span className="gradient-text">projet</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Un projet data ? Une question ? Prenez contact avec nous et
              recevez une réponse sous 24h.
            </p>
            <p className="text-muted-foreground/70 max-w-3xl mt-3 text-sm">
              Que vous ayez besoin d&apos;une <Link href="/services/data-strategy" className="text-primary hover:underline">stratégie data</Link>, de
              <Link href="/services/bi-dashboards" className="text-primary hover:underline"> dashboards BI</Link>, de
              <Link href="/services/ai-solutions" className="text-primary hover:underline"> solutions IA</Link> ou d&apos;une
              <Link href="/services/cloud-modernization" className="text-primary hover:underline"> migration cloud</Link>, notre équipe vous accompagne.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <SectionReveal>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-border/30 bg-card hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-border/30 bg-card hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">
                      Téléphone
                    </h3>
                    <a
                      href={COMPANY.phoneHref}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5 rounded-2xl border border-border/30 bg-card hover:border-primary/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">Adresse</h3>
                    <p className="text-sm text-muted-foreground">
                      {COMPANY.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={0.2}>
            <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl border border-border/30 bg-card">
              <form onSubmit={handleSubmit} className="space-y-4" role="form" aria-label="Formulaire de contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Jean Dupont"
                      required
                      aria-required="true"
                      aria-invalid={form.name.trim() === "" ? "true" : undefined}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="jean@entreprise.fr"
                      required
                      aria-required="true"
                      aria-invalid={form.email.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "true" : undefined}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+33 6 XX XX XX XX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet *</Label>
                  <Select
                    value={form.subject}
                    onValueChange={(value) => updateField("subject", value)}
                    required
                    aria-required="true"
                    aria-invalid={form.subject === "" ? "true" : undefined}
                  >
                    <SelectTrigger id="subject" aria-describedby="subject-desc">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <span id="subject-desc" className="sr-only">Choisissez le sujet de votre demande</span>
                    <SelectContent>
                      {CONTACT_SUBJECTS.map((subject) => (
                        <SelectItem key={subject.value} value={subject.value}>
                          {subject.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={form.message.trim().length > 0 && form.message.trim().length < 10 ? "true" : undefined}
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="rgpd"
                    checked={form.rgpd}
                    onCheckedChange={(checked) =>
                      updateField("rgpd", checked as boolean)
                    }
                    aria-required="true"
                    aria-describedby="rgpd-desc"
                  />
                  <Label htmlFor="rgpd" id="rgpd-desc" className="text-xs text-muted-foreground leading-relaxed font-normal">
                    J&apos;accepte que mes données soient traitées conformément à
                    la{" "}
                    <Link
                      href="/politique-confidentialite"
                      className="text-primary hover:underline"
                    >
                      politique de confidentialité
                    </Link>{" "}
                    de DataSphere Innovation. *
                  </Label>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-ring"
                >
                  {loading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </SectionReveal>
        </div>

        {/* Testimonial Collection CTA */}
        <SectionReveal>
          <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl border border-primary/15 bg-primary/5 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
              <MessageSquareHeart size={28} className="text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-heading font-semibold text-base mb-1">Vous êtes un de nos clients ?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Partagez votre expérience avec DataSphere Innovation. Votre témoignage nous aide à améliorer nos services et guide les futures entreprises dans leur choix.
              </p>
            </div>
            <a
              href={`mailto:temoignages@datasphereinnovation.fr?subject=Mon témoignage DataSphere Innovation`}
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors glow-ring"
            >
              Partager mon témoignage
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
