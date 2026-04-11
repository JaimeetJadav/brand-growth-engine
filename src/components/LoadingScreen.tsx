import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setVisible(false), 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1, filter: exiting ? "blur(8px)" : "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "hsl(210, 40%, 7%)" }}
        >
          <div className="flex flex-col items-center gap-10">
            {/* Circular loader */}
            <div className="relative w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 64 64">
                <circle
                  cx="32" cy="32" r="28"
                  fill="none"
                  stroke="hsl(200, 20%, 16%)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="32" cy="32" r="28"
                  fill="none"
                  stroke="hsl(185, 32%, 39%)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, rotate: -90 }}
                  animate={{ pathLength: 1, rotate: 270 }}
                  transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ transformOrigin: "center" }}
                />
              </svg>
            </div>

            {/* Brand */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xs tracking-[0.3em] uppercase font-light"
              style={{ color: "hsl(200, 15%, 52%)" }}
            >
              ApexStudio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
