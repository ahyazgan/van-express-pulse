import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { SEO_PAGES } from "./registry";
import { SEO_ROUTE_PATHS } from "./seoSlugs";
import { hasKeyFacts, keyFacts } from "./keyFacts";

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

  it("keeps public/sitemap.xml in sync with the routes we actually serve", () => {
    // seoSlugs.ts carries a "Keep in sync with public/sitemap.xml" comment but
    // nothing enforced it, so the sitemap drifted: it advertised /track, which is
    // not prerendered and answers with a byte-for-byte copy of the homepage.
    // Google reports that as a duplicate. Assert the contract instead of hoping.
    const sitemap = readFileSync(resolve(process.cwd(), "public/sitemap.xml"), "utf8");
    const listed = [...sitemap.matchAll(/<loc>https:\/\/routeeu24\.com(\/[^<]*)?<\/loc>/g)]
      .map((m) => (m[1] ?? "/").replace(/\/$/, "") || "/");
    const expected = ["/", ...SEO_ROUTE_PATHS, "/fiyat-hesaplama"].sort();

    expect([...listed].sort()).toEqual(expected);
    expect(new Set(listed).size, "sitemap has duplicate <loc> entries").toBe(listed.length);
  });

  it("derives the at-a-glance box from the page's own tables", () => {
    // The box must never say something the tables below it do not: the fastest
    // route is a real transit row, the best price a real price row, and pages
    // with no tables get no box rather than three lines of filler.
    for (const page of Object.values(SEO_PAGES)) {
      const f = keyFacts(page);
      if (f.fastest) {
        const row = page.transitTable!.rows.find((r) => r.destination === f.fastest!.route);
        expect(row?.time, `${page.slug} fastest`).toBe(f.fastest.time);
        const lower = (t: string) => Number(t.match(/\d+/)![0]);
        for (const r of page.transitTable!.rows) {
          if (/\d/.test(r.time)) expect(lower(r.time)).toBeGreaterThanOrEqual(lower(f.fastest.time));
        }
      }
      if (f.cheapest) {
        const row = page.priceTable!.rows.find((r) => r.route === f.cheapest!.route);
        expect(row?.price, `${page.slug} cheapest`).toBe(f.cheapest.price);
        expect(f.cheapest.price, `${page.slug} unpriced row picked`).toMatch(/\d/);
        const first = (t: string) => Number(t.replace(/[.,\s ](?=\d{3})/g, "").match(/\d+/)![0]);
        for (const r of page.priceTable!.rows) {
          if (/\d/.test(r.price)) expect(first(r.price)).toBeGreaterThanOrEqual(first(f.cheapest.price));
        }
      }
      expect(hasKeyFacts(page)).toBe(Boolean(f.fastest || f.cheapest));
    }
  });

  it("gives the SPA fallback so unknown paths still reach React Router", () => {
    const redirects = readFileSync(resolve(process.cwd(), "public/_redirects"), "utf8");
    expect(redirects).toMatch(/\/\*\s+\/index\.html\s+200/);
  });

  it("uses slugs that are safe as directory names", () => {
    for (const slug of Object.keys(SEO_PAGES)) {
      // dist/<slug>.html — a leading or trailing slash would escape the tree.
      expect(slug, `${slug} is not a clean path`).toMatch(/^[a-z0-9]+(?:[-/][a-z0-9]+)*$/);
      expect(slug.startsWith("/")).toBe(false);
      expect(slug.endsWith("/")).toBe(false);
      expect(slug).not.toContain("..");
    }
  });
});
