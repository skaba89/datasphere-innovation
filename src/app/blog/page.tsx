import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ChatWidget } from "@/components/chatbot/ChatWidget";
import { Clock, ArrowRight, Tag, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbSchema, generateWebPageSchema, generateGraphSchema, JsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Blog — DataSphere Innovation",
  description:
    "Articles et insights sur la data, l'intelligence artificielle et la transformation digitale par les experts DataSphere Innovation.",
};

export default function BlogPage() {
  const blogListGraph = generateGraphSchema([
    generateWebPageSchema({
      title: "Blog — DataSphere Innovation",
      description:
        "Articles et insights sur la data, l'intelligence artificielle et la transformation digitale par les experts DataSphere Innovation.",
      url: "https://datasphereinnovation.fr/blog",
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Blog", url: "https://datasphereinnovation.fr/blog" },
    ]),
  ]);

  return (
    <>
      <JsonLd data={blogListGraph} />
    <main id="main-content" aria-label="Contenu principal" className="min-h-screen flex flex-col">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-24 pb-2 relative z-50">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Accueil</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <section className="relative pt-16 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Blog & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Articles, analyses et perspectives de nos experts sur la data,
            l&apos;intelligence artificielle et la transformation digitale.
          </p>
          <p className="text-muted-foreground/70 max-w-2xl mt-2 text-sm">
            Nos experts partagent leur vision sur la
            <Link href="/services/data-strategy" className="text-primary hover:underline ml-1">stratégie data</Link>,
            le <Link href="/services/ai-solutions" className="text-primary hover:underline">machine learning</Link>,
            le <Link href="/services/data-engineering" className="text-primary hover:underline">data engineering</Link> et la
            <Link href="/services/cloud-modernization" className="text-primary hover:underline"> migration cloud</Link>.
            Retrouvez aussi nos
            <Link href="/equipe" className="text-primary hover:underline ml-1"> profils d&apos;experts</Link>.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background" role="region" aria-label="Liste des articles">
        <div className="container mx-auto px-4" data-section-summary>
          <p className="sr-only">Blog DataSphere Innovation : articles d'experts sur la stratégie data, l'intelligence artificielle, le data engineering et le cloud. Par Sophie Martin, Thomas Dubois, Léa Chen et Marc Petit.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl opacity-50">📊</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        <Tag size={10} />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock size={10} />
                        {post.readingTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        <span>•</span>
                        <span>{post.author}</span>
                      </div>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Lire
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <ChatWidget />
    </main>
    </>
  );
}
