import { describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SeoPage from "./SeoPage";
import { SEO_PAGES, SEO_ROUTES, LOCALIZED_PAGES } from "@/content/seo/registry";
import { SEO_ROUTE_PATHS } from "@/content/seo/seoSlugs";
import { CHROME } from "@/content/seo/chrome";

const slugs = Object.keys(SEO_PAGES);
const EXPECTED_PAGES = 39;

describe("SEO landing pages", () => {
  it(`registers all ${EXPECTED_PAGES} pages with unique titles and descriptions`, () => {
    expect(slugs).toHaveLength(EXPECTED_PAGES);
    const titles = new Set(Object.values(SEO_PAGES).map((p) => p.title));
    const descriptions = new Set(Object.values(SEO_PAGES).map((p) => p.description));
    expect(titles.size).toBe(EXPECTED_PAGES);
    expect(descriptions.size).toBe(EXPECTED_PAGES);
  });

  it("keeps the App route list in sync with the registry", () => {
    expect([...SEO_ROUTE_PATHS].sort()).toEqual([...SEO_ROUTES].sort());
  });

  it("keeps related links inside the known slug set", () => {
    for (const page of Object.values(SEO_PAGES)) {
      for (const rel of page.related) {
        expect(slugs, `${page.slug} -> ${rel.slug}`).toContain(rel.slug);
        expect(rel.slug).not.toBe(page.slug);
      }
    }
  });

  it("has substantial content on every page (no thin pages)", () => {
    for (const page of Object.values(SEO_PAGES)) {
      const text = [
        ...page.intro,
        ...page.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.list ?? [])]),
        ...page.faq.flatMap((f) => [f.question, f.answer]),
      ].join(" ");
      const words = text.split(/\s+/).filter(Boolean).length;
      expect(words, `${page.slug} word count`).toBeGreaterThanOrEqual(500);
      expect(page.faq.length, `${page.slug} faq`).toBeGreaterThanOrEqual(4);
    }
  });

  it("resolves every price table cell to a real rate", () => {
    for (const page of Object.values(SEO_PAGES)) {
      for (const row of page.priceTable?.rows ?? []) {
        // priceRange() falls back to "Teklif alın" when a city key is misspelled.
        expect(row.price, `${page.slug} -> ${row.route}`).toMatch(/\d/);
      }
    }
  });

  it("never repeats a heading or an FAQ question within a page", () => {
    for (const page of Object.values(SEO_PAGES)) {
      const headings = page.sections.map((s) => s.heading.toLowerCase());
      expect(new Set(headings).size, `${page.slug} headings`).toBe(headings.length);
      const questions = page.faq.map((f) => f.question.toLowerCase());
      expect(new Set(questions).size, `${page.slug} faq`).toBe(questions.length);
    }
  });

  it("keeps localized pages behind a language prefix and links only same-language pages", () => {
    for (const page of LOCALIZED_PAGES) {
      const lang = page.lang;
      expect(lang, `${page.slug} lang`).toBeDefined();
      expect(page.slug.startsWith(`${lang}/`), `${page.slug} prefix`).toBe(true);
      expect(CHROME[lang!], `${page.slug} chrome`).toBeDefined();
      for (const rel of page.related) {
        expect(SEO_PAGES[rel.slug].lang, `${page.slug} -> ${rel.slug}`).toBe(lang);
      }
    }
  });

  it("gives every hreflang group exactly one Turkish x-default", () => {
    const groups = new Map<string, string[]>();
    for (const page of Object.values(SEO_PAGES)) {
      if (!page.hreflangGroup) continue;
      groups.set(page.hreflangGroup, [...(groups.get(page.hreflangGroup) ?? []), page.slug]);
    }
    expect(groups.size).toBeGreaterThan(0);
    for (const [group, members] of groups) {
      const turkish = members.filter((s) => (SEO_PAGES[s].lang ?? "tr") === "tr");
      expect(turkish, `${group} x-default`).toHaveLength(1);
      const langs = members.map((s) => SEO_PAGES[s].lang ?? "tr");
      expect(new Set(langs).size, `${group} duplicate languages`).toBe(langs.length);
    }
  });

  it.each(slugs)("renders /%s with H1, FAQ and canonical", (slug) => {
    const page = SEO_PAGES[slug];
    render(
      <MemoryRouter initialEntries={[`/${slug}`]}>
        <SeoPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.h1);
    expect(screen.getByText(CHROME[page.lang ?? "tr"].faqHeading)).toBeInTheDocument();
    expect(document.title).toBe(page.title);
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    expect(canonical?.href).toBe(`https://routeeu24.com/${slug}`);
    expect(document.documentElement.lang).toBe(page.lang ?? "tr");
    cleanup();
  });
});
