import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { initAnalytics, trackPageView } from "./lib/analytics";
import ConsentBanner from "./components/ConsentBanner";
// SEO landing page routes. Content lives in src/content/seo/; this list is the
// cheap mirror of the registry (importing the registry here would drag every
// content file into the main bundle). A test keeps the two in sync.
import { SEO_ROUTE_PATHS } from "@/content/seo/seoSlugs";

// Route-level code splitting: keeps the initial bundle small.
const Index = lazy(() => import("./pages/Index"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const TrackingPage = lazy(() => import("./pages/TrackingPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const SuccessPage = lazy(() => import("./pages/SuccessPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SeoPage = lazy(() => import("./pages/SeoPage"));
const PriceCalculatorPage = lazy(() => import("./pages/PriceCalculatorPage"));
const KunyePage = lazy(() => import("./pages/KunyePage"));


// Reports SPA navigations to GA4 (no-op until VITE_GA4_ID is set).
const AnalyticsRouter = () => {
  const location = useLocation();
  useEffect(() => {
    initAnalytics();
  }, []);
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-primary" />
  </div>
);

// No React Query or Tooltip providers: nothing in the app uses them, and they
// put ~70 KB on the startup path. Re-add them next to the first useQuery or
// <Tooltip>.
const App = () => (
    <LanguageProvider>
      <AuthProvider>
          <Toaster />
          <Sonner />
          <ConsentBanner />
          <BrowserRouter>
            <AnalyticsRouter />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
                <Route path="/track" element={<TrackingPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* Admin panel: requires an authenticated user with the 'admin' role. */}
                <Route
                  path="/admin-yazgan"
                  element={
                    <ProtectedRoute requireAdmin>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route path="/fiyat-hesaplama" element={<PriceCalculatorPage />} />
                {/* Imprint: shows 404 until src/content/company.ts is filled in. */}
                <Route path="/kunye" element={<KunyePage />} />
                {SEO_ROUTE_PATHS.map((path) => (
                  <Route key={path} path={path} element={<SeoPage />} />
                ))}
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
);

export default App;
