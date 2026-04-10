import { useEffect, useRef, useState } from "react";

interface BadgeProps {
  src: string;
  alt: string;
  className: string;
  range?: number;
  speed?: number;
}

function CursorBadge({
  src,
  alt,
  className,
  range = 20,
  speed = 0.06,
}: BadgeProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const pauseRef = useRef(0);

  useEffect(() => {
    // Pick a new random target within ±range
    const pickTarget = () => {
      target.current = {
        x: (Math.random() * 2 - 1) * range,
        y: (Math.random() * 2 - 1) * range,
      };
      // Pause between 600ms and 1800ms before picking a new target
      pauseRef.current = Date.now() + 600 + Math.random() * 1200;
    };

    // Stagger start so badges don't all move at once
    const delay = Math.random() * 800;
    const timeout = setTimeout(() => {
      pickTarget();

      const animate = () => {
        const now = Date.now();

        // Lerp current position toward target
        current.current.x += (target.current.x - current.current.x) * speed;
        current.current.y += (target.current.y - current.current.y) * speed;

        setPos({ x: current.current.x, y: current.current.y });

        // Once close enough to target AND pause has expired, pick a new target
        const distX = Math.abs(target.current.x - current.current.x);
        const distY = Math.abs(target.current.y - current.current.y);
        if (distX < 0.5 && distY < 0.5 && now > pauseRef.current) {
          pickTarget();
        }

        frameRef.current = requestAnimationFrame(animate);
      };

      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [range, speed]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        willChange: "transform",
      }}
    />
  );
}

export default function Idea() {
  return (
    <main id="about">
      <section className="max-w-325 mx-auto px-4 md:px-6 mt-32 md:mt-40 2xl:mt-48">
        <h2 className="font-display font-medium text-center text-3xl md:text-5xl 2xl:text-6xl">
          From idea to
          <br /> product
        </h2>
        <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-base 2xl:text-lg mx-auto w-83 md:w-157.5">
          OffLayout is a design partner that works with founders and product
          teams to design and build clear, scalable digital products. We focus
          on thoughtful UI/UX, strong visual systems, and practical execution
          that helps products ship and grow.
        </p>

        <div className="mt-5 md:mt-10 2xl:mt-15 relative w-full h-75 md:h-125 2xl:h-130 overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none" />

          <CursorBadge
            src="/assets/idea/designer.svg"
            alt="Barry badge"
            range={60}
            speed={0.05}
            className="absolute z-20 top-1/2 left-1/2 
              -translate-x-35 md:-translate-x-70 
              -translate-y-4 md:translate-y-4 
              w-13 md:w-19 pointer-events-none"
          />

          <CursorBadge
            src="/assets/idea/strategist.svg"
            alt="Styles badge"
            range={60}
            speed={0.04}
            className="absolute z-20 top-1/2 left-1/2 
              -translate-x-14 md:-translate-x-28 
              translate-y-20 md:translate-y-40 
              w-13 md:w-20 pointer-events-none"
          />

          <CursorBadge
            src="/assets/idea/engineer.svg"
            alt="Seven badge"
            range={60}
            speed={0.06}
            className="absolute z-20 top-1/2 left-1/2 
              translate-x-20 md:translate-x-28 
              -translate-y-22 md:translate-y-16
              w-13 md:w-20 pointer-events-none"
          />

          <video
            src="https://res.cloudinary.com/dxhw8m6wo/video/upload/v1773330408/layout-labs-animation_pam3f7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </div>
      </section>
    </main>
  );
}
