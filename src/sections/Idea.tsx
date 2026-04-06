export default function Idea() {
  return (
    <main id="about">
      <section className="max-w-332 mx-auto px-4 md:px-6 mt-16 md:mt-24 2xl:mt-32">
        <h2 className="font-display font-medium text-center text-3xl md:text-5xl 2xl:text-6xl">
          From idea to
          <br /> product
        </h2>
        <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-base 2xl:text-lg mx-auto w-83 md:w-157.5">
          OffLayout is a design partner that works with founders and product teams
          to design and build clear, scalable digital products. We focus on
          thoughtful UI/UX, strong visual systems, and practical execution that
          helps products ship and grow.
        </p>

        <div className="mt-5 md:mt-10 2xl:mt-15 relative w-full h-75 md:h-125 2xl:h-130 overflow-hidden flex items-center justify-center">
          <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
          <img
            src="/assets/idea/designer.svg"
            alt="Barry badge"
            className="absolute z-20 top-1/2 left-1/2 
              -translate-x-35 md:-translate-x-70 
              -translate-y-4 md:translate-y-4 
              w-13 md:w-19 pointer-events-none"
          />

          <img
            src="/assets/idea/strategist.svg"
            alt="Styles badge"
            className="absolute z-20 top-1/2 left-1/2 
              -translate-x-14 md:-translate-x-28 
              translate-y-20 md:translate-y-40 
              w-13 md:w-20 pointer-events-none"
          />

          <img
            src="/assets/idea/engineer.svg"
            alt="UI Engineers badge"
            className="absolute z-20 top-1/2 left-1/2 
              translate-x-20 md:translate-x-28 
              -translate-y-22 md:translate-y-16
              w-20 md:w-30 pointer-events-none"
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
