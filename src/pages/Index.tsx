import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";

const Index = () => {
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
