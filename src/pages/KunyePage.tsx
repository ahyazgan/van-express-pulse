import { Link } from "react-router-dom";
import RouteEULogo from "@/components/RouteEULogo";
import usePageMeta from "@/hooks/usePageMeta";
import { COMPANY, isCompanyInfoComplete, type CompanyInfo } from "@/content/company";
import NotFound from "./NotFound";

// Rows in display order; empty optional fields are skipped.
const ROWS: { key: keyof CompanyInfo; label: string }[] = [
  { key: "legalName", label: "Ticaret unvanı" },
  { key: "tradeName", label: "Marka" },
  { key: "address", label: "Adres" },
  { key: "taxOffice", label: "Vergi dairesi" },
  { key: "taxNumber", label: "Vergi numarası" },
  { key: "mersisNo", label: "MERSİS numarası" },
  { key: "tradeRegistryNo", label: "Ticaret sicil numarası" },
  { key: "authorizationCertificate", label: "Yetki belgesi" },
  { key: "phone", label: "Telefon" },
  { key: "email", label: "E-posta" },
];

const KunyePageContent = () => {
  usePageMeta({
    title: "Künye ve Şirket Bilgileri | RouteEU Express",
    description: `${COMPANY.legalName}: ticaret unvanı, adres, vergi ve MERSİS bilgileri.`,
    canonicalPath: "/kunye",
    lang: "tr",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-card">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-5">
          <Link to="/" aria-label="RouteEU Express ana sayfa">
            <RouteEULogo />
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-10">
        <h1 className="text-2xl font-bold">Künye</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun kapsamında hizmet sağlayıcı bilgileri.
        </p>
        <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
          {ROWS.filter(({ key }) => COMPANY[key].trim()).map(({ key, label }) => (
            <div key={key} className="grid gap-1 px-4 py-3 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-muted-foreground">{label}</dt>
              <dd className="text-sm sm:col-span-2">{COMPANY[key]}</dd>
            </div>
          ))}
        </dl>
      </main>
    </div>
  );
};

/** Imprint. Renders the 404 page until the registry data in company.ts is complete. */
const KunyePage = () => (isCompanyInfoComplete() ? <KunyePageContent /> : <NotFound />);

export default KunyePage;
