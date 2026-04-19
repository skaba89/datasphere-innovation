import type { MetadataRoute } from "next";
import { services } from "@/lib/service-data";
import { blogPosts } from "@/lib/blog-data";
import { AUTHORS } from "@/lib/author-data";

const BASE_URL = "https://datasphereinnovation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages — lastModified uses REAL modification dates only (no future dates)
  const today = new Date();
  const safeDate = (d: string) => {
    const date = new Date(d);
    return date > today ? today : date;
  };

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: safeDate("2025-04-10"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: safeDate("2025-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/equipe`,
      lastModified: safeDate("2025-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/carrieres`,
      lastModified: safeDate("2025-02-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: safeDate("2025-04-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: safeDate("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: safeDate("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/conditions-generales`,
      lastModified: safeDate("2025-01-15"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/plan-du-site`,
      lastModified: safeDate("2025-03-20"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Author pages
  const authorPages: MetadataRoute.Sitemap = AUTHORS.map((author) => ({
    url: `${BASE_URL}/equipe/${author.slug}`,
    lastModified: safeDate("2025-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service pages — use actual content update dates
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: safeDate("2025-03-01"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Blog post pages — use dateModified when available, fallback to date
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: safeDate(post.dateModified || post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...authorPages, ...servicePages, ...blogPages];
}
