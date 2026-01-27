import { motion } from "framer-motion";
import { User, HelpCircle, Truck } from "lucide-react";

const TopBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-30 safe-top pointer-events-none"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, delay: 0.2 }}
    >
      <div className="flex items-center justify-between px-5 py-3">
        {/* Profile Button */}
        <motion.button
          className="w-12 h-12 rounded-full glass border border-border/60 flex items-center justify-center shadow-md pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className="w-5 h-5 text-foreground" />
        </motion.button>

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-border/60 shadow-md pointer-events-auto"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
            <Truck className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-black text-foreground tracking-tight">MINIVAN</span>
          <span className="text-xs font-bold text-accent">EXPRESS</span>
        </motion.div>

        {/* Help Button */}
        <motion.button
          className="px-4 py-2.5 rounded-full glass border border-border/60 flex items-center gap-2 shadow-md pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HelpCircle className="w-4 h-4 text-foreground" />
          <span className="text-sm font-bold text-foreground">Yardım</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopBar;