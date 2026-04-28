import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function BookCallGraphic() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const cursorControls = useAnimationControls();

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      while (isMounted) {
        // Start from bottom right, hidden
        await cursorControls.set({ top: "80%", left: "80%", opacity: 0 });
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Move to Row 1
        if (!isMounted) break;
        await cursorControls.start({ 
          top: "28%", 
          left: "60%", 
          opacity: 1,
          transition: { duration: 1.2, ease: "circOut" } 
        });
        setActiveRow(1);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Move to Row 2
        if (!isMounted) break;
        await cursorControls.start({ 
          top: "50%", 
          left: "75%", 
          transition: { duration: 0.8, ease: "circOut" } 
        });
        setActiveRow(2);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Move to Row 3
        if (!isMounted) break;
        await cursorControls.start({ 
          top: "75%", 
          left: "65%", 
          transition: { duration: 0.8, ease: "circOut" } 
        });
        setActiveRow(3);
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Move away
        if (!isMounted) break;
        await cursorControls.start({ 
          top: "90%", 
          left: "90%", 
          opacity: 0,
          transition: { duration: 1, ease: "circIn" } 
        });
        setActiveRow(null);
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
    };

    sequence();
    return () => { isMounted = false; };
  }, [cursorControls]);

  return (
    <div className="relative w-full aspect-[303/276] rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/5 shadow-2xl">
      {/* Background SVG Overlay */}
      <img
        src="/assets/others/book call bg.svg"
        className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        alt=""
      />

      {/* Rows Container */}
      <div className="relative z-10 flex flex-col gap-[18px] p-5 h-full justify-center items-center">
        
        {/* Row 1: Book... */}
        <motion.div 
          animate={{ 
            borderColor: activeRow === 1 ? "rgba(255,255,255,0.3)" : "#2E2E2E",
            backgroundColor: activeRow === 1 ? "#2A2A2A" : "#1E1E1E",
            scale: activeRow === 1 ? 1.02 : 1,
          }}
          className="w-[160px] border rounded-[10px] p-[8px_12px] flex flex-col gap-1.5 transition-all duration-500 shadow-lg"
        >
          <span className="text-[#B3B3B3] font-display text-sm font-medium">Book...</span>
          <div className="h-2 w-full bg-[#2E2E2E] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#888888]"
              initial={{ width: "15%" }}
              animate={{ width: activeRow === 1 ? "95%" : "15%" }}
              transition={{ duration: 1.5, ease: "circOut" }}
            />
          </div>
        </motion.div>

        {/* Row 2: Fill / Share / Vision */}
        <motion.div 
          animate={{ 
            borderColor: activeRow === 2 ? "rgba(255,255,255,0.3)" : "#2E2E2E",
            backgroundColor: activeRow === 2 ? "#2A2A2A" : "#1E1E1E",
            scale: activeRow === 2 ? 1.02 : 1,
          }}
          className="w-full max-w-[245px] border rounded-[10px] p-2 flex items-center justify-between transition-all duration-500 shadow-lg"
        >
          <span className="text-[#B3B3B3] font-display text-xs md:text-sm pl-1 whitespace-nowrap font-medium">
            <span className="opacity-60">Fill / Share /</span> Vision
          </span>
          <motion.div
            layout
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-display text-xs font-bold overflow-hidden ml-2 shadow-sm"
            style={{ 
              background: "linear-gradient(180deg, #FFFFFF 0%, #A3A3A3 100%)",
              color: "#000000" 
            }}
          >
            <AnimatePresence mode="wait">
              {activeRow === 2 ? (
                <motion.div 
                  key="scheduled"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Scheduled</span>
                </motion.div>
              ) : (
                <motion.span 
                  key="schedule"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  Schedule
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Row 3: 24/7 reply */}
        <motion.div 
          animate={{ 
            borderColor: activeRow === 3 ? "rgba(255,255,255,0.3)" : "#2E2E2E",
            backgroundColor: activeRow === 3 ? "#2A2A2A" : "#1E1E1E",
            scale: activeRow === 3 ? 1.02 : 1,
          }}
          className="w-[160px] border rounded-[10px] p-[8px_12px] flex flex-col gap-1.5 transition-all duration-500 shadow-lg"
        >
          <span className="text-[#B3B3B3] font-display text-sm font-medium">24/7 reply</span>
          <div className="h-2 w-full bg-[#2E2E2E] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#888888]"
              initial={{ width: "65%" }}
              animate={{ width: activeRow === 3 ? "100%" : "65%" }}
              transition={{ duration: 1.5, ease: "circOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated Cursor - FORCED VISIBILITY */}
      <motion.div
        className="absolute z-[100] pointer-events-none origin-top-left"
        animate={cursorControls}
        initial={{ top: "80%", left: "80%", opacity: 0 }}
      >
        <div className="relative -ml-2 -mt-2"> {/* Offset to center the tip */}
          {/* Intense Glow */}
          <div className="absolute inset-0 bg-white/60 blur-xl rounded-full scale-[2]" />
          <div className="absolute inset-0 bg-white/40 blur-md rounded-full scale-[1.5]" />
          
          <svg width="32" height="32" viewBox="0 0 22 22" fill="none" className="relative z-10 filter drop-shadow(0 0 8px rgba(255,255,255,0.8))">
            <path 
              d="M11.0037 7.58732L15.2948 8.94005C17.7699 9.72027 19.0074 10.1103 19.0181 10.8614C19.0288 11.6124 17.7939 12.0407 15.3241 12.8974C14.5887 13.1525 14.2209 13.28 13.9788 13.5573C13.7367 13.8346 13.6599 14.2162 13.5063 14.9793C12.9904 17.542 12.7325 18.8234 11.9869 18.914C11.2413 19.0047 10.6879 17.8311 9.58116 15.4838L7.66223 11.4142C6.50348 8.95675 5.92411 7.72801 6.52044 7.04503C7.11679 6.36206 8.41242 6.77048 11.0037 7.58732Z" 
              fill="white"
              stroke="white" 
              strokeWidth="1" 
              strokeLinejoin="round"
            />
            <motion.path 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
              d="M7.708 4.17058L7.59539 2.50772M4.43859 5.22723L3.10699 4.06454M3.83239 8.60925L2.16953 8.72186M4.88904 11.8787L3.72635 13.2103M12.2527 3.44518L11.09 4.77678" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}

