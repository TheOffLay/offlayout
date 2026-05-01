import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const slideSequence = [
  // --- Sequence 1 ---
  { id: 1, src: "/assets/faqSlides/img1.webp", type: "slide", waitTime: 2000 },
  { id: 2, src: "/assets/faqSlides/img2.webp", type: "fade", waitTime: 2000 },
  { id: 3, src: "/assets/faqSlides/img3.webp", type: "slide", waitTime: 2000 },
  
  // --- Sequence 2 ---
  { id: 4, src: "/assets/faqSlides/img4.webp", type: "slide", waitTime: 2000 },
  { id: 5, src: "/assets/faqSlides/img5.webp", type: "fade", waitTime: 2000 },
  { id: 6, src: "/assets/faqSlides/img6.webp", type: "slide", waitTime: 2000 },
  
    // --- Sequence 3 ---
  { id: 7, src: "/assets/faqSlides/img7.webp", type: "slide", waitTime: 2000 },
  { id: 8, src: "/assets/faqSlides/img8.webp", type: "slide", waitTime: 2000 },
  { id: 9, src: "/assets/faqSlides/img9.webp", type: "fade", waitTime: 2000 },

    // --- Sequence 4 ---
  { id: 10, src: "/assets/faqSlides/img10.webp", type: "slide", waitTime: 2000 },
  { id: 11, src: "/assets/faqSlides/img11.webp", type: "slide", waitTime: 2000 },
  { id: 12, src: "/assets/faqSlides/img12.webp", type: "fade", waitTime: 2000 },

    // --- Sequence 5 ---
  { id: 13, src: "/assets/faqSlides/img13.webp", type: "slide", waitTime: 2000 },
  { id: 14, src: "/assets/faqSlides/img14.webp", type: "slide", waitTime: 2000 },
  { id: 15, src: "/assets/faqSlides/img15.webp", type: "fade", waitTime: 2000 },

    // --- Sequence 6 ---
  { id: 16, src: "/assets/faqSlides/img16.webp", type: "slide", waitTime: 2000 },
  { id: 17, src: "/assets/faqSlides/img17.webp", type: "slide", waitTime: 2000 },
];

const slideVariants: Variants = {
  enter: (animType: "slide" | "fade") => ({
    x: animType === "slide" ? "100%" : 0, // Only start off-screen if it's a slide
    opacity: animType === "fade" ? 0 : 1, // Start transparent if it's a fade
    zIndex: 10,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 10,
    transition: {
      x: { type: "tween" as const, duration: 0.6, ease: "easeInOut" },
      opacity: { duration: 0.5, ease: "easeInOut" }, 
    },
  },
  exit: {
    x: 0,
    opacity: 1, // or 0.99 to ensure it stays visible during the exit animation
    zIndex: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function FaqsSlideShow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const currentSlide = slideSequence[currentIndex];

    const timer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slideSequence.length);
    }, currentSlide.waitTime);

    return () => clearTimeout(timer);
    }, [currentIndex]); // Re-run effect every time currentIndex changes

    // Grab the current slide data
    const currentSlide = slideSequence[currentIndex];

  return (
    <div className="relative overflow-hidden flex items-center justify-center p-8 h-100 md:h-130 2xl:h-200 w-full bg-[#E2E2E2] border-2 border-white rounded-2xl">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentSlide.id}
          src={currentSlide.src}
          alt={`Slide ${currentIndex}`}
          // Pass the animation type to the variants
          custom={currentSlide.type} 
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full max-w-268.5 mx-auto h-full object-contain py-10"
        />
      </AnimatePresence>
    </div>
  );
}