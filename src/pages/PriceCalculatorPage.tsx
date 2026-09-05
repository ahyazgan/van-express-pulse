import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, MapPin, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import RouteEULogo from "@/components/RouteEULogo";
import usePageMeta from "@/hooks/usePageMeta";
import { SEO_PAGES } from "@/content/seo/registry";
import {
  VAN_CAPACITY_KG,
  VAN_CAPACITY_M3,
  VAN_CAPACITY_PALLETS,
  dimensionsToM3,
  estimateShipmentPrice,
  palletsToM3,
} from "@/constants/shippingRates";

import {
  CALC_DESCRIPTION as DESCRIPTION,
  CALC_FAQ as FAQ,
  CALC_H1,
  CALC_INTRO,
  CALC_TITLE as TITLE,
} from "@/content/priceCalculatorMeta";

const ORIGIN = "https://routeeu24.com";

/** Varış şehirleri; etiketler SHIPPING_RATES anahtarlarıyla birebir aynı olmalı. */
const COUNTRIES: { country: string; transit: string; cities: string[] }[] = [
  { country: "Almanya", transit: "24-48 saat", cities: ["Berlin", "Münih", "Frankfurt", "Köln", "Stuttgart", "Hamburg"] },
  { country: "Avusturya", transit: "20-34 saat", cities: ["Viyana", "Graz", "Salzburg"] },
  { country: "Hollanda", transit: "28-46 saat", cities: ["Amsterdam", "Rotterdam", "Eindhoven"] },
  { country: "Belçika", transit: "28-46 saat", cities: ["Brüksel", "Anvers"] },
  { country: "Fransa", transit: "28-48 saat", cities: ["Paris", "Strazburg", "Lyon", "Marsilya"] },
  { country: "İsviçre", transit: "28-46 saat", cities: ["Zürih", "Basel"] },
  { country: "İtalya", transit: "24-46 saat", cities: ["Milano", "Verona", "Roma"] },
  { country: "Polonya", transit: "22-42 saat", cities: ["Varşova", "Kraków", "Poznań"] },
  { country: "Çekya", transit: "22-38 saat", cities: ["Prag", "Brno"] },
  { country: "Danimarka", transit: "36-56 saat", cities: ["Kopenhag", "Aarhus"] },
  { country: "İsveç", transit: "38-72 saat", cities: ["Malmö", "Göteborg", "Stockholm"] },
  { country: "İspanya", transit: "48-72 saat", cities: ["Madrid", "Barcelona"] },
  { country: "İngiltere", transit: "56-80 saat", cities: ["Londra", "Manchester"] },
  { country: "Balkanlar ve Orta Avrupa", transit: "14-36 saat", cities: ["Sofya", "Belgrad", "Bükreş", "Budapeşte", "Zagreb", "Ljubljana", "Bratislava"] },
];


const useCalculatorStructuredData = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: ORIGIN + "/" },
          { "@type": "ListItem", position: 2, name: "Nakliyat Fiyat Hesaplama", item: `${ORIGIN}/fiyat-hesaplama` },
        ],
      },
    ]);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
};

type LoadMode = "complete" | "partial";
type PartialUnit = "m3" | "pallet";

const fmt = (n: number) => n.toLocaleString("tr-TR");

const PriceCalculatorPage = () => {
  const [city, setCity] = useState("Berlin");
  const [mode, setMode] = useState<LoadMode>("partial");
  const [unit, setUnit] = useState<PartialUnit>("m3");
  const [m3, setM3] = useState("3");
  const [pallets, setPallets] = useState("2");
  const [dims, setDims] = useState({ w: "", l: "", h: "", qty: "1" });

  usePageMeta({ title: TITLE, description: DESCRIPTION, canonicalPath: "/fiyat-hesaplama" });
  useCalculatorStructuredData();

  const transit = useMemo(
    () => COUNTRIES.find((c) => c.cities.includes(city))?.transit ?? "",
    [city]
  );

  const volume = useMemo(() => {
    if (mode === "complete") return undefined;
    if (unit === "pallet") {
      const p = parseFloat(pallets.replace(",", "."));
      return Number.isFinite(p) && p > 0 ? palletsToM3(p) : undefined;
    }
    const v = parseFloat(m3.replace(",", "."));
    return Number.isFinite(v) && v > 0 ? v : undefined;
  }, [mode, unit, m3, pallets]);

  const result = useMemo(() => {
    if (mode === "partial" && volume === undefined) return null;
    return estimateShipmentPrice(city, volume);
  }, [city, mode, volume]);

  const dimResult = useMemo(() => {
    const w = parseFloat(dims.w.replace(",", "."));
    const l = parseFloat(dims.l.replace(",", "."));
    const h = parseFloat(dims.h.replace(",", "."));
    const q = parseFloat(dims.qty.replace(",", ".")) || 1;
    if (![w, l, h].every((n) => Number.isFinite(n) && n > 0)) return null;
    return dimensionsToM3(w, l, h, q);
  }, [dims]);

  const perM3 =
    result?.found && result.minPrice !== undefined && result.maxPrice !== undefined && result.billableM3
      ? Math.round((result.minPrice + result.maxPrice) / 2 / result.billableM3)
      : null;

  const fieldClass =
    "w-full rounded-xl border border-border/60 bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background text-foreground">
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
        <nav aria-label="breadcrumb" className="pt-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground hover:underline">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Nakliyat Fiyat Hesaplama</span>
        </nav>

        <article>
          <h1 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">{CALC_H1}</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{CALC_INTRO}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: MapPin, label: "Aşamalı Sevkiyat Takibi" },
              { icon: Zap, label: "Kapıdan Kapıya Ekspres" },
              { icon: Shield, label: "CMR Sorumluluğu + Ek Sigorta" },
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

          {/* Hesaplayıcı */}
          <section className="mt-8 rounded-2xl border border-border/60 bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Fiyat Hesaplayıcı</h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="calc-city" className="mb-1.5 block text-sm font-semibold">
                  Varış şehri
                </label>
                <select
                  id="calc-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={fieldClass}
                >
                  {COUNTRIES.map((group) => (
                    <optgroup key={group.country} label={group.country}>
                      {group.cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Kalkış: Türkiye geneli, adresinizden alım.
                </p>
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-semibold">Yük büyüklüğü</span>
                <div className="grid grid-cols-2 gap-2" role="group" aria-label="Yük büyüklüğü">
                  {(
                    [
                      { key: "partial", label: "Parsiyel" },
                      { key: "complete", label: "Komple araç" },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setMode(opt.key)}
                      aria-pressed={mode === opt.key}
                      className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                        mode === opt.key
                          ? "border-primary/50 bg-primary/10 text-foreground"
                          : "border-border/60 bg-background text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground">
                  Komple araç: {fmt(VAN_CAPACITY_M3)} m³ / {VAN_CAPACITY_PALLETS} palet /{" "}
                  {fmt(VAN_CAPACITY_KG)} kg
                </p>
              </div>
            </div>

            {mode === "partial" && (
              <div className="mt-4 rounded-xl border border-border/60 bg-background/60 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold">Hacmi şununla gir:</span>
                  {(
                    [
                      { key: "m3", label: "Metreküp" },
                      { key: "pallet", label: "Palet" },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setUnit(opt.key)}
                      aria-pressed={unit === opt.key}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                        unit === opt.key
                          ? "border-primary/50 bg-primary/10 text-foreground"
                          : "border-border/60 bg-card text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  {unit === "m3" ? (
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">
                        Toplam hacim (m³)
                      </span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="0.1"
                        step="0.1"
                        value={m3}
                        onChange={(e) => setM3(e.target.value)}
                        className={fieldClass}
                      />
                    </label>
                  ) : (
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-muted-foreground">
                        Palet adedi (Euro palet)
                      </span>
                      <input
                        type="number"
                        inputMode="decimal"
                        min="1"
                        step="1"
                        value={pallets}
                        onChange={(e) => setPallets(e.target.value)}
                        className={fieldClass}
                      />
                    </label>
                  )}
                </div>

                {/* Hacim hesaplayıcı */}
                <details className="group mt-4 rounded-xl border border-border/60 bg-card p-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    Hacmimi bilmiyorum — ölçüden hesapla
                  </summary>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {(
                      [
                        { key: "w", label: "En (cm)" },
                        { key: "l", label: "Boy (cm)" },
                        { key: "h", label: "Yükseklik (cm)" },
                        { key: "qty", label: "Adet" },
                      ] as const
                    ).map((f) => (
                      <label key={f.key} className="block">
                        <span className="mb-1 block text-xs font-medium text-muted-foreground">
                          {f.label}
                        </span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="1"
                          value={dims[f.key]}
                          onChange={(e) => setDims((d) => ({ ...d, [f.key]: e.target.value }))}
                          className={fieldClass}
                        />
                      </label>
                    ))}
                  </div>
                  {dimResult !== null && (
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="text-sm">
                        Bu parça(lar):{" "}
                        <strong className="font-bold text-primary">
                          {dimResult.toLocaleString("tr-TR", { maximumFractionDigits: 3 })} m³
                        </strong>
                      </span>
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        className="rounded-lg"
                        onClick={() => {
                          setUnit("m3");
                          setM3(String(Number(dimResult.toFixed(3))));
                        }}
                      >
                        Hesaplamaya aktar
                      </Button>
                    </div>
                  )}
                </details>
              </div>
            )}

            {/* Sonuç */}
            <div
              aria-live="polite"
              className="mt-5 rounded-xl border border-primary/30 bg-primary/10 p-5 text-center"
            >
              {result?.found && result.minPrice !== undefined && result.maxPrice !== undefined ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Tahmini fiyat aralığı · İstanbul → {city}
                  </p>
                  <p className="mt-1.5 text-3xl font-black tabular-nums text-foreground">
                    {fmt(result.minPrice)} € – {fmt(result.maxPrice)} €
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {result.isComplete
                      ? `Komple panelvan · araç tamamen size ayrılır`
                      : `Parsiyel · ${fmt(Number(result.billableM3?.toFixed(2)))} m³ üzerinden${
                          perM3 ? ` (yaklaşık ${fmt(perM3)} €/m³)` : ""
                        }`}
                    {transit && ` · tahmini transit ${transit}`}
                  </p>
                  {!result.isComplete && volume !== undefined && volume < 0.5 && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Çok küçük gönderilerde taban hacim uygulanır: adresten alım, gümrük ve teslim
                      maliyetleri hacimden bağımsızdır.
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Hacim bilgisini girin; tahmini fiyat aralığı burada görünecek.
                </p>
              )}
            </div>

            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Rakamlar tahmini aralıklardır; sezon, yakıt, gerçek hacim-ağırlık ve adreslerin merkeze
              uzaklığına göre değişir. Gümrük vergisi ve müşavirlik ücretleri gönderinin niteliğine
              göre ayrı değerlendirilir. Bağlayıcı teklif için formu doldurun.
            </p>

            <Button asChild size="lg" className="btn-primary-glow mt-4 w-full rounded-xl text-base font-bold">
              <Link to="/">
                Bağlayıcı Teklif Al
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </section>

          {/* İçerik */}
          <section className="mt-8">
            <h2 className="text-xl font-bold">Fiyat Nasıl Hesaplanıyor?</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Uluslararası panelvan taşımacılığında maliyetin iki ana bileşeni vardır: güzergahın
              kendisi ve yükünüzün araçta kapladığı yer. Güzergah maliyeti mesafe, geçilen ülke
              sayısı, otoyol ve geçiş ücretleri, yakıt ve sürücü giderlerinden oluşur; bu kalem yük
              az ya da çok olsun büyük ölçüde sabittir. İkinci bileşen ise yükünüzün hacmidir: araç
              tamamen size ayrılıyorsa güzergah maliyetinin tamamını siz karşılarsınız, parsiyel
              taşımada ise aynı güzergahtaki diğer yüklerle paylaşırsınız.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Bu yüzden parsiyelde metreküp başına maliyet, hacim küçüldükçe artar. Yarım metreküplük
              bir gönderi için de adresten alım yapılır, gümrük işlemi yürütülür ve adrese teslim
              edilir; bu sabit maliyetler daha az hacme dağılır. Hesaplayıcı bu ilişkiyi doğrusal
              değil, kademeli olarak modeller — gerçek fiyatlamada olduğu gibi.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold">Yükünüzün Hacmini Metreküp Olarak Bulma</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Hacim hesabı basittir: her parçanın en, boy ve yüksekliğini santimetre olarak çarpın ve
              çıkan sayıyı 1.000.000'a bölün. Sonuç o parçanın metreküp değeridir. Tüm parçaları
              toplayarak gönderinizin toplam hacmini bulursunuz. Ölçü almak zorunda kalmadan kabaca
              tahmin etmek isterseniz aşağıdaki referanslar iş görür:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>Standart taşıma kolisi (60×40×40 cm): yaklaşık 0,1 m³</li>
              <li>Büyük valiz: yaklaşık 0,15 m³</li>
              <li>Çamaşır makinesi veya buzdolabı: yaklaşık 1 m³</li>
              <li>İki kişilik yatak ve baza: yaklaşık 2 m³</li>
              <li>Bir Euro palet (120×80 cm, 180 cm yüksekliğe kadar istifli): yaklaşık 2,7 m³</li>
              <li>1+1 bir evin tüm eşyası: yaklaşık 8-12 m³</li>
            </ul>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Ev taşımalarında en pratik yöntem, odaları telefonla videoya çekip bize göndermektir;
              ekibimiz hacmi sizin yerinize çıkarır ve net fiyat verir.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold">Fiyatı Etkileyen Diğer Faktörler</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>
                <strong className="font-semibold text-foreground">Sezon:</strong> yaz ayları ve fuar
                dönemleri Avrupa hattında talebi yükseltir; erken rezervasyon fiyatı sabitler.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Adres konumu:</strong> büyük şehir
                merkezlerine yakın alım ve teslimatlar, uzak kırsal adreslere göre daha ekonomiktir.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Yükün niteliği:</strong> ticari mal,
                zati eşya ve numune farklı gümrük rejimlerine tabidir; evrak yükü maliyete yansır.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Aciliyet:</strong> aynı gün çıkış
                gereken time-critical sevkiyatlarda araç planlaması özel yapılır.
              </li>
              <li>
                <strong className="font-semibold text-foreground">Ek hizmetler:</strong> paketleme,
                mobilya demontajı, kata taşıma ve ek sigorta bedeli talep halinde eklenir.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold">Sık Sorulan Sorular</h2>
            <div className="mt-3 space-y-2">
              {FAQ.map((f) => (
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

          <section className="mt-10">
            <h2 className="text-lg font-bold">İlgili Hizmetler</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {[
                { slug: "parsiyel-tasimacilik", label: "Avrupa'ya Parsiyel Taşımacılık" },
                { slug: "minivan-ekspres-tasimacilik", label: "Minivan Ekspres Taşımacılık" },
                { slug: "ev-esyasi-tasima", label: "Yurtdışına Ev Eşyası Taşıma" },
                { slug: "almanya-kargo", label: "Almanya'ya Panelvan Kargo" },
              ].map((r) => (
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
        </article>
      </main>

      <footer className="border-t border-border/60 bg-card">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">RouteEU Express</p>
          <p className="mt-1">
            Türkiye ↔ Avrupa kapıdan kapıya ekspres panelvan taşımacılık. CMR taşıma sorumluluğu,
            talep üzerine ek yük sigortası, takip numarasıyla aşamalı sevkiyat takibi.
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

export default PriceCalculatorPage;
