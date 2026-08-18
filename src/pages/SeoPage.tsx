import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, MapPin, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import RouteEULogo from "@/components/RouteEULogo";
import usePageMeta from "@/hooks/usePageMeta";
import { SEO_PAGES } from "@/content/seo/registry";
import NotFound from "./NotFound";
import type { SeoPageData } from "@/content/seo/seoData";

const ORIGIN = "https://routeeu24.com";

/** Injects FAQPage + BreadcrumbList JSON-LD for the current landing page. */
const useStructuredData = (page: SeoPageData | undefined) => {
  useEffect(() => {
    if (!page) return;
    const scripts: HTMLScriptElement[] = [];
    const add = (data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };

    if (page.faq.length > 0) {
      add({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }
    add({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: ORIGIN + "/" },
        { "@type": "ListItem", position: 2, name: page.h1, item: `${ORIGIN}/${page.slug}` },
      ],
    });

    return () => scripts.forEach((s) => s.remove());
  }, [page]);
};

const SeoPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const page = SEO_PAGES[slug];

  usePageMeta({
    title: page?.title ?? "RouteEU Express",
    description: page?.description,
    canonicalPath: `/${slug}`,
  });
  useStructuredData(page);

  // Scroll to top when navigating between landing pages.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-card/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-5">
          <Link to="/" aria-label="RouteEU Express ana sayfa">
            <RouteEULogo />
          </Link>
          <Button asChild size="sm" className="btn-primary-glow rounded-xl font-bold">
            <Link to="/">
              Hemen Fiyat Al
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-16">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="pt-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground hover:underline">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{page.h1}</span>
        </nav>

        <article>
          <h1 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{page.h1}</h1>

          {page.intro.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          {/* Trust markers */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: MapPin, label: "7/24 Canlı GPS Takip" },
              { icon: Zap, label: "Kapıdan Kapıya Ekspres" },
              { icon: Shield, label: "Sigortalı Taşıma" },
            ].map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card p-4 text-center shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{m.label}</span>
              </div>
            ))}
          </div>

          {page.transitTable && (
            <section className="mt-8">
              <h2 className="text-xl font-bold">{page.transitTable.caption}</h2>
              <div className="mt-3 overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Güzergah</th>
                      <th className="px-4 py-3 font-semibold">Tahmini Süre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.transitTable.rows.map((r) => (
                      <tr key={r.destination} className="border-t border-border/60">
                        <td className="px-4 py-3">{r.destination}</td>
                        <td className="px-4 py-3 font-medium">{r.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {page.priceTable && (
            <section className="mt-8">
              <h2 className="text-xl font-bold">{page.priceTable.caption}</h2>
              <div className="mt-3 overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full text-left text-sm">
                  <thead className="bg-secondary text-secondary-foreground">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Güzergah</th>
                      <th className="px-4 py-3 font-semibold">Fiyat Aralığı</th>
                    </tr>
                  </thead>
                  <tbody>
                    {page.priceTable.rows.map((r) => (
                      <tr key={r.route} className="border-t border-border/60">
                        <td className="px-4 py-3">{r.route}</td>
                        <td className="px-4 py-3 font-medium">{r.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{page.priceTable.disclaimer}</p>
            </section>
          )}

          {page.sections.map((s) => (
            <section key={s.heading} className="mt-8">
              <h2 className="text-xl font-bold">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {page.faq.length > 0 && (
            <section className="mt-8">
              <h2 className="text-xl font-bold">Sık Sorulan Sorular</h2>
              <div className="mt-3 space-y-2">
                {page.faq.map((f) => (
                  <details
                    key={f.question}
                    className="group rounded-2xl border border-border/60 bg-card p-4 shadow-sm"
                  >
                    <summary className="cursor-pointer list-none font-semibold [&::-webkit-details-marker]:hidden">
                      {f.question}
                    </summary>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <h2 className="text-xl font-black">Yükünüz İçin Hemen Fiyat Alın</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Kalkış ve varış noktanızı seçin, saniyeler içinde tahmini fiyatınızı görün. Talebiniz
              sonrası ekibimiz aynı gün sizinle iletişime geçer.
            </p>
            <Button asChild size="lg" className="btn-primary-glow mt-4 rounded-xl text-base font-bold">
              <Link to="/">
                Ücretsiz Teklif Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>

          {/* Related pages */}
          {page.related.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-bold">İlgili Hizmetler</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {page.related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/${r.slug}`}
                      className="block rounded-xl border border-border/60 bg-card px-4 py-3 text-sm font-medium shadow-sm transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">RouteEU Express</p>
          <p className="mt-1">
            Türkiye ↔ Avrupa kapıdan kapıya ekspres panelvan taşımacılık. Sigortalı taşıma, 7/24
            canlı GPS takibi.
          </p>
          <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            <Link to="/" className="hover:text-foreground hover:underline">
              Fiyat Al
            </Link>
            <Link to="/track" className="hover:text-foreground hover:underline">
              Gönderi Takibi
            </Link>
            {Object.values(SEO_PAGES).map((p) => (
              <Link key={p.slug} to={`/${p.slug}`} className="hover:text-foreground hover:underline">
                {p.h1}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default SeoPage;
