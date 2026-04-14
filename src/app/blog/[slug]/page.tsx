import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { BlogPostClient } from "./BlogPostClient";

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
      <main className="min-h-screen flex flex-col items-center justify-center">
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
  return <BlogPostClient post={post} />;
}
