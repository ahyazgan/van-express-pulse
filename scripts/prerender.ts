/**
 * Build-time prerender.
 *
 * The app is a client-rendered SPA, so a crawler that does not execute
 * JavaScript sees an empty <div id="root">. Rather than depend on a host that
 * prerenders for verified bots, this script writes a real HTML file for every
 * content route after `vite build`: dist/<slug>.html.
 *
 * Why `<slug>.html` and not `<slug>/index.html`: Cloudflare Pages serves
 * `dist/foo.html` at `/foo` (and 308s `/foo/` -> `/foo`), whereas a directory
 * index is served at `/foo/` with `/foo` redirected. Canonical + sitemap URLs
 * have no trailing slash, so the flat file keeps the served URL identical.
 *
 * All SEO page content is plain data (SeoPageData), so no React is involved —
 * we render the same markup the crawler needs, then the SPA mounts over it and
 * replaces the block between the PRERENDER markers.
 *
 * Run: vite-node scripts/prerender.ts   (wired into `npm run build`)
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { SEO_PAGES } from "../src/content/seo/registry";
import { CHROME, HREFLANG, withYear } from "../src/content/seo/chrome";
import { CONTACT, PHONE_DISPLAY, TEL_HREF, pageWaHref, rowWaHref } from "../src/content/seo/contact";
import { KEY_FACTS, hasKeyFacts, keyFacts } from "../src/content/seo/keyFacts";
import {
  CALC_DESCRIPTION,
  CALC_FAQ,
  CALC_H1,
  CALC_INTRO,
  CALC_TITLE,
} from "../src/content/priceCalculatorMeta";
import type { PageLang, SeoPageData } from "../src/content/seo/seoData";

const ORIGIN = "https://routeeu24.com";
const DIST = resolve(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const START = "<!--PRERENDER-START-->";
const END = "<!--PRERENDER-END-->";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Replaces a meta/link attribute value in the built template. */
const setAttr = (html: string, selector: RegExp, value: string) =>
  html.replace(selector, (m) => m.replace(/(content|href)="[^"]*"/, `$1="${esc(value)}"`));

const jsonLd = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

/**
 * Two- or three-column table. The optional third cell is trusted HTML (a
 * pre-built link) and is NOT escaped; the first two are always escaped text.
 */
const table = (
  caption: string,
  cols: [string, string] | [string, string, string],
  rows: ([string, string] | [string, string, string])[],
  opts: { rawLastCell?: boolean } = {}
) => `
        <h2>${esc(caption)}</h2>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead><tr>${cols.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>${rows
            .map((r) => {
              const cells = r.map((cell, i) =>
                i === 2 && opts.rawLastCell ? cell : esc(cell)
              );
              return `<tr>${cells.map((c) => `<td>${c}</td>`).join("")}</tr>`;
            })
            .join("")}</tbody>
        </table>`;

const faqBlock = (heading: string, faq: { question: string; answer: string }[]) => `
        <h2>${esc(heading)}</h2>
        ${faq
          .map((f) => `<h3>${esc(f.question)}</h3>\n        <p>${esc(f.answer)}</p>`)
          .join("\n        ")}`;

const keyFactsBlock = (page: SeoPageData): string => {
  const lang: PageLang = page.lang ?? "tr";
  const k = KEY_FACTS[lang];
  const f = keyFacts(page);
  const rows: [string, string][] = [];
  if (f.fastest) rows.push([k.fastest, `${f.fastest.route}: ${f.fastest.time}`]);
  if (f.cheapest) rows.push([k.cheapest, `${f.cheapest.route}: ${f.cheapest.price}`]);
  rows.push([k.capacity, f.capacity]);
  return `<section aria-label="${esc(k.heading)}"><h2>${esc(k.heading)}</h2><dl>${rows
    .map(([dt, dd]) => `<dt>${esc(dt)}</dt><dd>${esc(dd)}</dd>`)
    .join("")}</dl></section>`;
};

/** The crawlable body for one SEO landing page. */
const seoBody = (page: SeoPageData): string => {
  const lang: PageLang = page.lang ?? "tr";
  const t = CHROME[lang];
  const c = CONTACT[lang];
  const parts: string[] = [
    `<nav><a href="/">${esc(t.home)}</a> / ${esc(page.h1)}</nav>`,
    `<h1>${esc(page.h1)}</h1>`,
    // Same contact strip SeoPage renders under the H1, so the crawled page and
    // the hydrated page agree on how to reach us.
    `<p><a href="${pageWaHref(lang, page.h1)}">${esc(c.waLabel)}</a> · ` +
      `<a href="${TEL_HREF}">${esc(c.callLabel)}: ${esc(PHONE_DISPLAY)}</a><br>${esc(c.afterYouWrite)}</p>`,
    // "At a glance": the numbers a reader or an answer engine wants first,
    // derived from the tables below so they can never disagree with them.
    ...(hasKeyFacts(page) ? [keyFactsBlock(page)] : []),
    ...page.intro.map((p) => `<p>${esc(p)}</p>`),
  ];

  if (page.transitTable) {
    parts.push(
      table(
        page.transitTable.caption,
        [t.routeCol, t.timeCol],
        page.transitTable.rows.map((r) => [r.destination, r.time] as [string, string])
      )
    );
  }
  if (page.priceTable) {
    parts.push(
      table(
        page.priceTable.caption,
        [t.routeCol, t.priceCol, ""],
        page.priceTable.rows.map(
          (r) =>
            [
              r.route,
              r.price,
              `<a href="${rowWaHref(lang, r.route, r.price)}">${esc(c.rowLink)}</a>`,
            ] as [string, string, string]
        ),
        { rawLastCell: true }
      ),
      `<p>${esc(page.priceTable.disclaimer)}</p>`
    );
    // The calculator turns a price band into a number for the reader's own volume,
    // and it was reachable from nothing: zero internal links pointed at it. Only
    // Turkish pages link to it — it exists in Turkish only, and sending a German
    // reader to a Turkish tool is the CTA leak we are trying to stop elsewhere.
    if (lang === "tr") {
      parts.push(
        `<p><a href="/fiyat-hesaplama">Kendi hacminize göre tahmini fiyat hesaplayın</a></p>`
      );
    }
  }

  for (const s of page.sections) {
    parts.push(`<h2>${esc(s.heading)}</h2>`);
    parts.push(...s.paragraphs.map((p) => `<p>${esc(p)}</p>`));
    if (s.list?.length) {
      parts.push(`<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
    }
  }

  if (page.faq.length) parts.push(faqBlock(t.faqHeading, page.faq));

  if (page.related.length) {
    parts.push(
      `<h2>${esc(t.relatedHeading)}</h2>`,
      `<ul>${page.related
        .map((r) => `<li><a href="/${r.slug}">${esc(r.label)}</a></li>`)
        .join("")}</ul>`
    );
  }

  // Same-language sitewide links so a crawler can reach every page from any page.
  const siblings = Object.values(SEO_PAGES).filter(
    (p) => (p.lang ?? "tr") === lang && p.slug !== page.slug
  );
  parts.push(
    `<ul>${siblings.map((p) => `<li><a href="/${p.slug}">${esc(p.h1)}</a></li>`).join("")}</ul>`,
    `<p><a href="/">${esc(t.footerQuote)}</a> · <a href="/track">${esc(t.footerTracking)}</a></p>`
  );

  return parts.join("\n        ");
};

const calculatorBody = (): string => {
  const t = CHROME.tr;
  const siblings = Object.values(SEO_PAGES).filter((p) => (p.lang ?? "tr") === "tr");
  return [
    `<nav><a href="/">${esc(t.home)}</a> / ${esc(CALC_H1)}</nav>`,
    `<h1>${esc(CALC_H1)}</h1>`,
    `<p>${esc(CALC_INTRO)}</p>`,
    faqBlock(t.faqHeading, CALC_FAQ),
    `<ul>${siblings.map((p) => `<li><a href="/${p.slug}">${esc(p.h1)}</a></li>`).join("")}</ul>`,
  ].join("\n        ");
};

/** Rewrites the built index.html into a standalone page for one route. */
const render = (
  template: string,
  opts: {
    slug: string;
    lang: PageLang;
    title: string;
    description: string;
    body: string;
    structuredData: unknown[];
    alternates?: { hreflang: string; slug: string }[];
  }
) => {
  const url = `${ORIGIN}/${opts.slug}`;
  let html = template;

  html = html.replace(/<html lang="[^"]*"/, `<html lang="${HREFLANG[opts.lang]}"`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(opts.title)}</title>`);
  html = setAttr(html, /<meta name="description"[^>]*>/, opts.description);
  html = setAttr(html, /<meta property="og:title"[^>]*>/, opts.title);
  html = setAttr(html, /<meta name="twitter:title"[^>]*>/, opts.title);
  html = setAttr(html, /<meta property="og:description"[^>]*>/, opts.description);
  html = setAttr(html, /<meta name="twitter:description"[^>]*>/, opts.description);
  html = setAttr(html, /<link rel="canonical"[^>]*>/, url);
  html = setAttr(html, /<meta property="og:url"[^>]*>/, url);

  const head =
    (opts.alternates ?? [])
      .map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${ORIGIN}/${a.slug}" />`)
      .join("\n    ") + opts.structuredData.map(jsonLd).join("");
  html = html.replace("</head>", `    ${head}\n  </head>`);

  const from = html.indexOf(START);
  const to = html.indexOf(END);
  if (from < 0 || to < 0) throw new Error("PRERENDER markers missing from index.html");
  html = html.slice(0, from + START.length) + "\n        " + opts.body + "\n      " + html.slice(to);

  const file = join(DIST, `${opts.slug}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html, "utf8");
};

const template = readFileSync(join(DIST, "index.html"), "utf8");
if (!template.includes(START)) throw new Error("dist/index.html has no PRERENDER markers");

let count = 0;
for (const page of Object.values(SEO_PAGES)) {
  const lang: PageLang = page.lang ?? "tr";
  const group = page.hreflangGroup
    ? Object.values(SEO_PAGES).filter((p) => p.hreflangGroup === page.hreflangGroup)
    : [];
  const alternates = group.map((p) => ({
    hreflang: HREFLANG[p.lang ?? "tr"],
    slug: p.slug,
  }));
  // x-default is what a searcher whose language matches no alternate gets. That
  // was the Turkish page, so a Polish or Italian searcher landed on 2.000 words
  // of Turkish. English is the only member they have a chance of reading; Turkish
  // stays the fallback for groups that have no English version yet.
  const fallback =
    group.find((p) => p.lang === "en") ?? group.find((p) => (p.lang ?? "tr") === "tr");
  if (fallback) alternates.push({ hreflang: "x-default", slug: fallback.slug });

  render(template, {
    slug: page.slug,
    lang,
    title: withYear(page.title),
    description: withYear(page.description),
    body: seoBody(page),
    alternates,
    structuredData: [
      ...(page.faq.length
        ? [
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: CHROME[lang].home, item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: page.h1, item: `${ORIGIN}/${page.slug}` },
        ],
      },
    ],
  });
  count++;
}

render(template, {
  slug: "fiyat-hesaplama",
  lang: "tr",
  title: CALC_TITLE,
  description: CALC_DESCRIPTION,
  body: calculatorBody(),
  structuredData: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: CALC_FAQ.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ],
});
count++;

console.log(`prerender: ${count} sayfa yazıldı (dist/<slug>.html)`);
