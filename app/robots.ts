import type { MetadataRoute } from "next";

// Prototype for invited partners only: block all crawlers.
// Replace with a real policy and sitemap before public launch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}
