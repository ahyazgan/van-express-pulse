import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SEO_PAGES } from "./registry";
import { SEO_ROUTE_PATHS } from "./seoSlugs";

const indexHtml = readFileSync(resolve(process.cwd(), "index.html"), "utf8");

describe("prerender contract", () => {
  it("keeps the markers scripts/prerender.ts writes between", () => {
    // Without these the build step throws; the failure is easier to read here.
    expect(indexHtml).toContain("<!--PRERENDER-START-->");
    expect(indexHtml).toContain("<!--PRERENDER-END-->");
    expect(indexHtml.indexOf("<!--PRERENDER-START-->")).toBeLessThan(
      indexHtml.indexOf("<!--PRERENDER-END-->")
    );
  });

  it("keeps the head tags the prerender step rewrites per route", () => {
    for (const tag of [
      /<html lang="[^"]*"/,
      /<title>[\s\S]*?<\/title>/,
      /<meta name="description"[^>]*>/,
      /<meta property="og:title"[^>]*>/,
      /<meta name="twitter:title"[^>]*>/,
      /<meta property="og:description"[^>]*>/,
      /<meta name="twitter:description"[^>]*>/,
      /<link rel="canonical"[^>]*>/,
      /<meta property="og:url"[^>]*>/,
    ]) {
      expect(indexHtml, `index.html is missing ${tag}`).toMatch(tag);
    }
  });

  it("links every route from the static homepage so crawlers can reach it", () => {
    // /track and / are linked separately; every SEO route needs an <a href>.
    for (const path of SEO_ROUTE_PATHS) {
      expect(indexHtml, `homepage has no link to ${path}`).toContain(`href="${path}"`);
    }
    expect(indexHtml).toContain('href="/fiyat-hesaplama"');
  });

  it("gives the SPA fallback so unknown paths still reach React Router", () => {
    const redirects = readFileSync(resolve(process.cwd(), "public/_redirects"), "utf8");
    expect(redirects).toMatch(/\/\*\s+\/index\.html\s+200/);
  });

  it("uses slugs that are safe as directory names", () => {
    for (const slug of Object.keys(SEO_PAGES)) {
      // dist/<slug>/index.html — a leading or trailing slash would escape the tree.
      expect(slug, `${slug} is not a clean path`).toMatch(/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/);
      expect(slug.startsWith("/")).toBe(false);
      expect(slug.endsWith("/")).toBe(false);
      expect(slug).not.toContain("..");
    }
  });
});
