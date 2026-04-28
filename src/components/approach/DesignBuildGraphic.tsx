import { motion } from "framer-motion";

const icons = [
  { src: "/assets/others/framer.svg", id: "framer" },
  { src: "/assets/others/chat-gpt.svg", id: "gpt" },
  { src: "/assets/others/canvas.svg", id: "canvas" },
  { src: "/assets/others/paint-brush-04.svg", id: "brush" },
];

export default function DesignBuildGraphic() {
  return (
    <div className="relative w-full aspect-[303/276] rounded-2xl overflow-hidden bg-[#0F0F0F] border border-white/5 shadow-2xl">
      {/* Background Curved Tracks */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[100%] bg-[#1A1A1A] rounded-[100%] opacity-20 border-b border-white/10" />
        <div className="absolute bottom-[-50%] left-[-10%] w-[120%] h-[100%] bg-[#1A1A1A] rounded-[100%] opacity-20 border-t border-white/10" />
      </div>

      {/* Center Squeeze Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      {/* Floating Icons (Moving in a curve) */}
      <div className="absolute inset-0 z-5">
        {[0, 1, 2, 3].map((i) => {
          const icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: [-100, 400],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 3,
                ease: "linear",
              }}
              className="absolute top-0 bottom-0 flex items-center"
            >
              <motion.div
                animate={{
                  y: [20, -20, 20], // Sinusoidal-ish path
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  delay: i * 3,
                  ease: "linear",
                }}
                className="p-2.5 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
              >
                <img src={icon.src} alt="" className="w-5 h-5 opacity-70" />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Central Figma Shield */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="relative group scale-110">
          {/* Intense Shield Glow */}
          <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse" />
          <div className="absolute -inset-4 bg-white/5 blur-xl rounded-full" />
          
          <img 
            src="/assets/others/fig.svg" 
            alt="Figma Shield" 
            className="w-[110px] h-[124px] relative z-10 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Top/Bottom Gradient Overlays for Depth */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#0F0F0F] to-transparent z-20" />
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0F0F0F] to-transparent z-20" />
    </div>
  );
}
