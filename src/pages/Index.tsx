import HeroSection from "@/components/HeroSection";
import TrackingSection from "@/components/TrackingSection";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background safe-bottom">
      <main className="max-w-lg mx-auto">
        <HeroSection />
        <TrackingSection />
        <ServicesGrid />
        <FeaturesSection />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Index;