import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<"idle" | "opening" | "reveal" | "exit">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Micro-delay before opening
    const t1 = setTimeout(() => setPhase("opening"), 400);
    // Progress counter
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return Math.min(p + 2, 100);
      });
    }, 40);
    // Reveal phase
    const t2 = setTimeout(() => setPhase("reveal"), 2400);
    // Exit
    const t3 = setTimeout(() => setPhase("exit"), 2800);
    const t4 = setTimeout(() => setVisible(false), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearInterval(interval); };
  }, []);

  if (!visible) return null;

  const isOpening = phase === "opening" || phase === "reveal" || phase === "exit";
  const isRevealing = phase === "reveal" || phase === "exit";
  const isExiting = phase === "exit";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isExiting ? 0 : 1,
            scale: isExiting ? 1.05 : 1,
            filter: isExiting ? "blur(6px)" : "blur(0px)",
          }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "#031725" }}
        >
          {/* Ambient glow from box */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 300, height: 300,
              background: "radial-gradient(circle, rgba(118,172,163,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{ opacity: isOpening ? 1 : 0, scale: isRevealing ? 2.5 : 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col items-center gap-8">
            {/* 3D Box */}
            <div className="relative" style={{ perspective: 800 }}>
              <div className="relative" style={{ width: 120, height: 90 }}>
                {/* Box body */}
                <motion.div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background: "linear-gradient(145deg, #103438, #2D545E)",
                    border: "1px solid rgba(70,128,136,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(70,128,136,0.15)",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Inner glow (visible when opening) */}
                <motion.div
                  className="absolute rounded-sm overflow-hidden"
                  style={{
                    left: 4, right: 4, top: 4, bottom: 4,
                    background: "radial-gradient(ellipse at center top, rgba(118,172,163,0.3) 0%, transparent 80%)",
                  }}
                  animate={{ opacity: isOpening ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Left flap */}
                <motion.div
                  className="absolute rounded-t-sm"
                  style={{
                    left: 0, right: "50%", top: 0, height: 20,
                    background: "linear-gradient(145deg, #143c40, #2D545E)",
                    border: "1px solid rgba(70,128,136,0.2)",
                    borderBottom: "none",
                    transformOrigin: "bottom center",
                    boxShadow: "inset 0 1px 0 rgba(70,128,136,0.2)",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isOpening ? -160 : 0 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                />

                {/* Right flap */}
                <motion.div
                  className="absolute rounded-t-sm"
                  style={{
                    left: "50%", right: 0, top: 0, height: 20,
                    background: "linear-gradient(145deg, #103438, #2a5058)",
                    border: "1px solid rgba(70,128,136,0.2)",
                    borderBottom: "none",
                    transformOrigin: "bottom center",
                    boxShadow: "inset 0 1px 0 rgba(70,128,136,0.15)",
                  }}
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: isOpening ? -155 : 0 }}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                />

                {/* Light rays from inside */}
                <motion.div
                  className="absolute"
                  style={{
                    left: "20%", right: "20%", top: -30, height: 40,
                    background: "linear-gradient(to top, rgba(118,172,163,0.15), transparent)",
                    filter: "blur(8px)",
                  }}
                  animate={{ opacity: isOpening ? 1 : 0, top: isRevealing ? -60 : -30 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                />

                {/* Surface reflection */}
                <motion.div
                  className="absolute"
                  style={{
                    left: 8, right: 8, bottom: 0, height: "40%",
                    background: "linear-gradient(to top, rgba(70,128,136,0.06), transparent)",
                    borderRadius: 2,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </div>

            {/* Progress bar */}
            <div className="flex flex-col items-center gap-3">
              <div style={{ width: 120, height: 1, backgroundColor: "rgba(70,128,136,0.15)", borderRadius: 1 }}>
                <motion.div
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(70,128,136,0.5)",
                    borderRadius: 1,
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Brand */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-[10px] tracking-[0.35em] uppercase font-light"
                style={{ color: "hsl(200, 15%, 48%)" }}
              >
                ApexStudio
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
