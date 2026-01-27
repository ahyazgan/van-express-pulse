import { User, HelpCircle, Truck } from "lucide-react";
import { motion } from "framer-motion";

const TopBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-30 px-4 safe-top"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between h-16 max-w-lg mx-auto">
        {/* Profile Icon - Glassmorphism */}
        <motion.button
          className="w-11 h-11 rounded-full flex items-center justify-center touch-target border border-border/40"
          style={{
            background: "linear-gradient(135deg, hsl(220, 10%, 18%, 0.6) 0%, hsl(220, 10%, 14%, 0.8) 100%)",
            backdropFilter: "blur(16px)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <User className="w-5 h-5 text-foreground" />
        </motion.button>

        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(45, 100%, 55%) 0%, hsl(45, 100%, 45%) 100%)",
              boxShadow: "0 0 25px -5px hsl(45, 100%, 50%, 0.5)",
            }}
          >
            <Truck className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-foreground">Minivan</span>
            <span className="font-bold text-primary ml-1">Express</span>
          </div>
        </motion.div>

        {/* Help Button - Glassmorphism */}
        <motion.button
          className="px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-1.5 touch-target border border-border/40"
          style={{
            background: "linear-gradient(135deg, hsl(220, 10%, 18%, 0.6) 0%, hsl(220, 10%, 14%, 0.8) 100%)",
            backdropFilter: "blur(16px)",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <HelpCircle className="w-4 h-4" />
          <span>Yardım</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TopBar;
