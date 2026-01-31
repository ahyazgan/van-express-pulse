import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description?: string;
}

const BASE_TITLE = "RouteEU Express";

export const usePageMeta = ({ title, description }: PageMetaOptions) => {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
    
    // Cleanup - restore default title on unmount
    return () => {
      document.title = `${BASE_TITLE} - Profesyonel Panelvan ve Hızlı Lojistik Çözümleri`;
    };
  }, [title, description]);
};

export default usePageMeta;
