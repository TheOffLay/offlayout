import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const icons = [
  { src: "/assets/others/framer.svg", id: "framer", type: "img" },
  { src: "/assets/others/chat-gpt.svg", id: "gpt", type: "img" },
  { src: "/assets/others/canvas.svg", id: "canvas", type: "img" },
  { src: "/assets/others/paint-brush-04.svg", id: "brush", type: "img" },
  // Inline SVGs for reliability and brand relevance
  { id: "code", type: "svg", content: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  )},
  { id: "ai", type: "svg", content: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
  )},
  { id: "node", type: "svg", content: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  )},
  { id: "box", type: "svg", content: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
  )},
];

export default function DesignBuildGraphic() {
  const glowControls = useAnimationControls();

  // Sync shield glow with the staggered icon arrival
  useEffect(() => {
    const sequence = async () => {
      // Small delay for initial entry
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      while (true) {
        for (let i = 0; i < icons.length; i++) {
          // Pulse the shield glow as each icon passes the 50% mark
          glowControls.start({
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.2, 0.8],
            transition: { duration: 0.8, ease: "easeInOut" }
          });
          // Stagger time between icons
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        // Wait before the next cycle
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };
    sequence();
  }, [glowControls]);

  return (
    <div className="relative w-full aspect-[303/276] overflow-hidden bg-[#0F0F0F]">
      {/* Background SVG Overlay */}
      <img
        src="/assets/others/design build bg.svg"
        className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none p-2 rounded-3xl"
        alt=""
      />

      <motion.div className="relative w-full h-full scale-[0.8] sm:scale-100 origin-center">
        {/* Floating Icons Sequence */}
        <div className="absolute inset-0 z-5">
          {icons.map((icon, i) => {
            // Calculate V-shape exit Y based on index
            // Spreading 8 icons across the height
            const exitY = (i - 3.5) * 45; 
            const entryY = (i % 2 === 0 ? -50 : 50);

            return (
              <motion.div
                key={i}
                initial={{ x: -100, y: entryY, opacity: 0, scale: 0.8 }}
                animate={{
                  x: [-100, 150, 400],
                  y: [entryY, 0, exitY],
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-0 -translate-y-1/2"
              >
                <div className="p-2.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full shadow-2xl flex items-center justify-center">
                  {icon.type === "img" ? (
                    <img src={icon.src} alt="" className="w-5 h-5 opacity-70" />
                  ) : (
                    icon.content
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Central Figma Shield & Glow */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="relative scale-110">
            {/* Synced Glow Effect */}
            <motion.div 
              animate={glowControls}
              initial={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-white/20 blur-2xl rounded-full"
            />
            
            <motion.img 
              src="/assets/others/fig.svg" 
              alt="Figma Shield" 
              className="w-[110px] h-[124px] relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
