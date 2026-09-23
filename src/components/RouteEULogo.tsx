import logoEu from "@/assets/routeeu-logo-ab.svg";
import logoRVan from "@/assets/routeeu-logo.svg";
import logoRVanCompact from "@/assets/routeeu-logo-compact.svg";

// Which logo the site shows. Flip to switch; both stay in src/assets.
//   "eu"     star ring + van, pure vector (chosen Sept 2026)
//   "r-van"  hand-drawn R-van mark (has a compact variant for the top bar)
// The original Canva logo (173 KB, embedded PNG) is kept in logo-taslaklar/,
// outside src: Vite would otherwise ship and precache it even when unused.
const LOGO_STYLE: "eu" | "r-van" = "eu";

const RouteEULogo = ({ compact = false, className }: { compact?: boolean; className?: string }) => {
  const src = LOGO_STYLE === "eu" ? logoEu : compact ? logoRVanCompact : logoRVan;
  // The star ring makes the EU logo taller for its width; give it more height.
  const size = LOGO_STYLE === "eu" ? "h-10 w-auto" : compact ? "h-7 w-auto" : "h-8 w-auto";
  return <img src={src} alt="RouteEU Express" className={className ?? size} />;
};

export default RouteEULogo;
