import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import usePageMeta from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "RouteEU Express - Profesyonel Panelvan ve Hızlı Lojistik Çözümleri",
    description: "Türkiye ve Avrupa arası ekspres panelvan taşımacılığı. Hızlı fiyat alın, yükünüzü canlı takip edin."
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <MapBackground />
      <TopBar />
      <BottomSheet />
      <FloatingWhatsApp />
      <AppNavigation />
    </div>
  );
};

export default Index;
