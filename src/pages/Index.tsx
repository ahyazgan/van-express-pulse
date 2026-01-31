import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import usePageMeta from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta({
    title: "RouteEU Express - Profesyonel Minivan ve Hızlı Lojistik Çözümleri",
    description: "Türkiye ve Avrupa arası ekspres minivan taşımacılığı. Hızlı fiyat alın, yükünüzü canlı takip edin."
  });

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <MapBackground />
      <TopBar />
      <BottomSheet />
      <AppNavigation />
    </div>
  );
};

export default Index;
