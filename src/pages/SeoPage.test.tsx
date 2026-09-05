import { describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SeoPage from "./SeoPage";
import { SEO_PAGES, SEO_ROUTES, LOCALIZED_PAGES } from "@/content/seo/registry";
import { SEO_ROUTE_PATHS } from "@/content/seo/seoSlugs";
import { CHROME, withYear } from "@/content/seo/chrome";

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

  it("keeps titles and descriptions inside what a SERP actually shows", () => {
    // 21 of 39 titles used to run past this and got truncated mid-phrase, which
    // wastes the one line a searcher reads before deciding. Lengths are checked
    // after {{yil}} expands, because that is what ships.
    for (const page of Object.values(SEO_PAGES)) {
      const title = withYear(page.title);
      const description = withYear(page.description);
      expect(title.length, `${page.slug} title (${title.length}): ${title}`).toBeLessThanOrEqual(60);
      expect(
        description.length,
        `${page.slug} description (${description.length})`
      ).toBeLessThanOrEqual(160);
      expect(description.length, `${page.slug} description too short`).toBeGreaterThan(70);
    }
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

  it("gives every hreflang group one unambiguous x-default target", () => {
    // x-default is served to searchers whose language matches no alternate. Both
    // generators (scripts/prerender.ts, SeoPage.tsx) pick the English member and
    // fall back to Turkish, so each group needs exactly one of each to make that
    // choice deterministic. Pointing x-default at Turkish, as it once did, drops
    // a Polish or Italian searcher into 2.000 words they cannot read.
    const groups = new Map<string, string[]>();
    for (const page of Object.values(SEO_PAGES)) {
      if (!page.hreflangGroup) continue;
      groups.set(page.hreflangGroup, [...(groups.get(page.hreflangGroup) ?? []), page.slug]);
    }
    expect(groups.size).toBeGreaterThan(0);
    for (const [group, members] of groups) {
      const byLang = (lang: string) =>
        members.filter((s) => (SEO_PAGES[s].lang ?? "tr") === lang);
      expect(byLang("tr"), `${group} Turkish fallback`).toHaveLength(1);
      expect(byLang("en"), `${group} x-default`).toHaveLength(1);
      const langs = members.map((s) => SEO_PAGES[s].lang ?? "tr");
      expect(new Set(langs).size, `${group} duplicate languages`).toBe(langs.length);
    }
  });

  it("quotes one consistent transit time per route across every page and language", () => {
    // Aynı şehir dile göre farklı yazılıyor; karşılaştırmadan önce tek isme indiriyoruz.
    const alias: Record<string, string> = {
      istanbul: "İstanbul",
      münih: "Münih", münchen: "Münih", munich: "Münih",
      köln: "Köln", cologne: "Köln",
      viyana: "Viyana", wien: "Viyana", vienna: "Viyana", wenen: "Viyana",
      brüksel: "Brüksel", brussels: "Brüksel", bruxelles: "Brüksel", brüssel: "Brüksel",
      anvers: "Anvers", antwerp: "Anvers", antwerpen: "Anvers",
      varşova: "Varşova", warsaw: "Varşova", warschau: "Varşova",
      milano: "Milano", milan: "Milano",
      zürih: "Zürih", zurich: "Zürih",
      kopenhag: "Kopenhag", copenhagen: "Kopenhag",
      strazburg: "Strazburg", strasbourg: "Strazburg",
      marsilya: "Marsilya", marseille: "Marsilya",
      lahey: "Lahey", "den haag": "Lahey",
    };
    const norm = (raw: string) => alias[raw.trim().toLowerCase()] ?? raw.trim();

    const byPair = new Map<string, { range: string; page: string; label: string }[]>();
    for (const page of Object.values(SEO_PAGES)) {
      for (const row of page.transitTable?.rows ?? []) {
        const ends = row.destination.split(/→|->/).map((s) => s.trim());
        const span = row.time.match(/(\d+)\s*[-–]\s*(\d+)/);
        if (ends.length !== 2 || !span) continue; // "Genel Avrupa" gibi serbest satırlar
        // Yön simetrik: Berlin→İstanbul ile İstanbul→Berlin aynı mesafe, aynı süre.
        const key = [norm(ends[0]), norm(ends[1])].sort().join(" <-> ");
        byPair.set(key, [
          ...(byPair.get(key) ?? []),
          { range: `${span[1]}-${span[2]}`, page: page.slug, label: row.destination },
        ]);
      }
    }

    for (const [pair, claims] of byPair) {
      const ranges = new Set(claims.map((c) => c.range));
      const detail = claims.map((c) => `${c.range} (${c.page}: "${c.label}")`).join(", ");
      expect(ranges.size, `${pair} farklı süreler veriyor -> ${detail}`).toBe(1);
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
    expect(document.title).toBe(withYear(page.title));
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    expect(canonical?.href).toBe(`https://routeeu24.com/${slug}`);
    expect(document.documentElement.lang).toBe(page.lang ?? "tr");
    cleanup();
  });
});
