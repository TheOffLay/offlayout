import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function LaunchGraphic() {
  const progress = useMotionValue(0);
  const rounded = useTransform(progress, (latest) => Math.round(latest));
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Sync motion value to state for text display
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayProgress(latest);
    });

    // Animate to and fro
    const controls = animate(progress, [20, 95, 20], {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [progress, rounded]);

  const badgeLeft = useTransform(progress, (latest) => `${latest}%`);

  return (
    <div className="relative w-full aspect-[303/276] rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/5 shadow-2xl flex flex-col items-center justify-center p-8">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/5 blur-[100px] rounded-full" />
      
      <div className="relative z-10 w-full flex flex-col gap-3">
        
        {/* Synced Percentage Circle */}
        <div className="relative h-14 w-full">
          <motion.div 
            style={{ left: badgeLeft, x: "-50%" }}
            className="absolute top-0 w-14 h-14 bg-[#1A1A1A] rounded-full border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm"
          >
            <span className="text-white font-display text-sm font-bold tabular-nums">
              {displayProgress}%
            </span>
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="relative h-[54px] w-full bg-[#161616] rounded-full border border-white/10 p-1 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
          <motion.div 
            style={{ width: badgeLeft }}
            className="h-full bg-gradient-to-b from-white to-[#666666] rounded-full flex items-center justify-end"
          >
            {/* Thumb Container - UNTOUCHED */}
            <div className="h-full aspect-square p-1">
              <div className="h-full w-full bg-[#0F0F0F] rounded-full flex items-center justify-center border border-white/10 shadow-lg">
                {/* Inner Thumb Dot */}
                <div className="w-3.5 h-3.5 bg-gradient-to-b from-white to-[#999999] rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status Text */}
        <div className="flex items-center justify-end gap-3 pr-4">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white/10 border-t-white/80 rounded-full"
          />
          <span className="text-[#B3B3B3] font-display text-sm font-medium tracking-tight">Please wait...</span>
        </div>
      </div>
    </div>
  );
}
