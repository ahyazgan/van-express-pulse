import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import usePageMeta from "@/hooks/usePageMeta";

const NotFound = () => {
  const location = useLocation();

  // SPA fallback returns HTTP 200 for unknown URLs, so mark them noindex to
  // avoid soft-404s piling up in search indexes.
  usePageMeta({ title: "404 - Sayfa Bulunamadı | RouteEU Express", noindex: true });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
