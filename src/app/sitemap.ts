import type { MetadataRoute } from "next";
import { services } from "@/lib/service-data";
import { blogPosts } from "@/lib/blog-data";

const BASE_URL = "https://datasphereinnovation.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with specific lastModified dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/carrieres`,
      lastModified: new Date("2025-01-05"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-confidentialite`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/conditions-generales`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/plan-du-site`,
      lastModified: new Date("2025-01-10"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date("2025-01-12"),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Blog post pages - use actual publish dates
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
