import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopBar from "@/components/TopBar";
import MapBackground from "@/components/MapBackground";
import BottomSheet from "@/components/BottomSheet";
import AppNavigation from "@/components/AppNavigation";
import ProfilePage from "@/components/ProfilePage";

const Index = () => {
  const [activeTab, setActiveTab] = useState("explore");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <MapBackground />
      <TopBar />
      <BottomSheet />
      <AppNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      
      <AnimatePresence>
        {activeTab === "profile" && (
          <ProfilePage onClose={() => setActiveTab("explore")} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
