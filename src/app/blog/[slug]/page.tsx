import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { BlogPostClient } from "./BlogPostClient";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateGraphSchema,
  JsonLd,
} from "@/lib/json-ld";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article non trouvé" };
  }
  return {
    title: `${post.title} — DataSphere Innovation`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — DataSphere Innovation`,
      description: post.excerpt,
      url: `https://datasphereinnovation.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["DataSphere Innovation"],
      tags: [post.category],
    },
    alternates: {
      canonical: `https://datasphereinnovation.fr/blog/${post.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return (
      <main id="main-content" className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-heading font-bold mb-4">
          Article non trouvé
        </h1>
        <Link
          href="/blog"
          className="text-primary hover:underline"
        >
          Retour au blog
        </Link>
      </main>
    );
  }

  const blogGraph = generateGraphSchema([
    generateOrganizationSchema(),
    generateWebPageSchema({
      title: `${post.title} — DataSphere Innovation`,
      description: post.excerpt,
      url: `https://datasphereinnovation.fr/blog/${post.slug}`,
      dateModified: post.dateModified || post.date,
    }),
    generateArticleSchema({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      author: post.author,
      category: post.category,
    }),
    generateBreadcrumbSchema([
      { name: "Accueil", url: "https://datasphereinnovation.fr" },
      { name: "Blog", url: "https://datasphereinnovation.fr/blog" },
      { name: post.title, url: `https://datasphereinnovation.fr/blog/${post.slug}` },
    ]),
  ]);

  return (
    <>
      <JsonLd data={blogGraph} />
      <BlogPostClient post={post} />
    </>
  );
}
