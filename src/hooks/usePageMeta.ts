import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description?: string;
  /** Path portion of the canonical URL, e.g. "/almanya-kargo". Defaults to the current pathname. */
  canonicalPath?: string;
  /** Set true on pages that must stay out of search results (404, admin, profile). */
  noindex?: boolean;
}

const BASE_TITLE = "RouteEU Express";
const ORIGIN = "https://routeeu24.com";

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

const upsertMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const usePageMeta = ({ title, description, canonicalPath, noindex }: PageMetaOptions) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("property", "og:title", title);
    upsertMeta("name", "twitter:title", title);

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    // Every indexable route declares its own canonical; without this the SPA
    // serves the homepage's canonical on every URL.
    const canonicalUrl = ORIGIN + (canonicalPath ?? window.location.pathname);
    upsertLink("canonical", canonicalUrl);
    upsertMeta("property", "og:url", canonicalUrl);

    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    return () => {
      document.title = BASE_TITLE;
      upsertMeta("name", "robots", "index, follow");
    };
  }, [title, description, canonicalPath, noindex]);
};

export default usePageMeta;
