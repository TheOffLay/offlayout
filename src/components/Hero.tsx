


export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen 2xl:min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden bg-black pt-20" id="work">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }}
      />

      {/* 2. The Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-200 mx-auto">
        {/* Heading */}
        <h1 className="font-display text-[clamp(48px,8vw,80px)] font-medium text-white leading-[1.1] tracking-tight mb-10">
          Design. Build. <br />
          Launch.
        </h1>

        {/* Subheading */}
        <p className="font-display font-normal text-[#a1a1a1] text-[clamp(14px,3vw,20px)] leading-relaxed  md:max-w-140 mx-auto mb-10">
          Layouts is a product lab focused on execution, designing and building
          web and Web3 products that are ready to launch.
        </p>

        {/* Action Button */}
        <button className="cursor-pointer flex items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-base font-display font-medium hover:bg-gray-200 transition-colors">
          <span className="w-2 h-2 rounded-full animate-colorblink"></span>
          Book a consultation
        </button>
      </div>
    </section>
  );
}
