import { describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SeoPage from "./SeoPage";
import { SEO_PAGES } from "@/content/seo/registry";

const slugs = Object.keys(SEO_PAGES);

describe("SEO landing pages", () => {
  it("registers all 22 pages with unique titles and descriptions", () => {
    expect(slugs).toHaveLength(22);
    const titles = new Set(Object.values(SEO_PAGES).map((p) => p.title));
    const descriptions = new Set(Object.values(SEO_PAGES).map((p) => p.description));
    expect(titles.size).toBe(22);
    expect(descriptions.size).toBe(22);
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

  it.each(slugs)("renders /%s with H1, FAQ and canonical", (slug) => {
    const page = SEO_PAGES[slug];
    render(
      <MemoryRouter initialEntries={[`/${slug}`]}>
        <SeoPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(page.h1);
    expect(screen.getByText("Sık Sorulan Sorular")).toBeInTheDocument();
    expect(document.title).toBe(page.title);
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    expect(canonical?.href).toBe(`https://routeeu24.com/${slug}`);
    cleanup();
  });
});
