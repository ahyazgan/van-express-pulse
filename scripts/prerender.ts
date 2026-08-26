/**
 * Build-time prerender.
 *
 * The app is a client-rendered SPA, so a crawler that does not execute
 * JavaScript sees an empty <div id="root">. Rather than depend on a host that
 * prerenders for verified bots, this script writes a real HTML file for every
 * content route after `vite build`: dist/<slug>/index.html.
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
import { CHROME, HREFLANG } from "../src/content/seo/chrome";
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

const table = (caption: string, cols: [string, string], rows: [string, string][]) => `
        <h2>${esc(caption)}</h2>
        <table border="1" cellpadding="6" cellspacing="0">
          <thead><tr><th>${esc(cols[0])}</th><th>${esc(cols[1])}</th></tr></thead>
          <tbody>${rows
            .map((r) => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`)
            .join("")}</tbody>
        </table>`;

const faqBlock = (heading: string, faq: { question: string; answer: string }[]) => `
        <h2>${esc(heading)}</h2>
        ${faq
          .map((f) => `<h3>${esc(f.question)}</h3>\n        <p>${esc(f.answer)}</p>`)
          .join("\n        ")}`;

/** The crawlable body for one SEO landing page. */
const seoBody = (page: SeoPageData): string => {
  const lang: PageLang = page.lang ?? "tr";
  const t = CHROME[lang];
  const parts: string[] = [
    `<nav><a href="/">${esc(t.home)}</a> / ${esc(page.h1)}</nav>`,
    `<h1>${esc(page.h1)}</h1>`,
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
        [t.routeCol, t.priceCol],
        page.priceTable.rows.map((r) => [r.route, r.price] as [string, string])
      ),
      `<p>${esc(page.priceTable.disclaimer)}</p>`
    );
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

  const dir = join(DIST, opts.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");
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
  const turkish = group.find((p) => (p.lang ?? "tr") === "tr");
  if (turkish) alternates.push({ hreflang: "x-default", slug: turkish.slug });

  render(template, {
    slug: page.slug,
    lang,
    title: page.title,
    description: page.description,
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

console.log(`prerender: ${count} sayfa yazıldı (dist/<slug>/index.html)`);
