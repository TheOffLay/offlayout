export default function Idea() {
  return (
    <>
      <section className="max-w-300 mx-auto px-6 mt-16 md:mt-32">
        <h2 className="font-display font-medium text-center text-3xl md:text-6xl">
          From idea to
          <br /> product
        </h2>
        <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-lg mx-auto w-83 md:w-157.5">
          Layouts is a design partner that works with founders and product teams
          to design and build clear, scalable digital products. We focus on
          thoughtful UI/UX, strong visual systems, and practical execution that
          helps products ship and grow.
        </p>

        <div className="mt-5 md:mt-10 2xl:mt-15 relative w-full h-75 md:h-125 2xl:h-130 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
          <video
            src="https://res.cloudinary.com/dxhw8m6wo/video/upload/v1773330408/layout-labs-animation_pam3f7.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* Optional: Add a dark overlay if you want to put text on top of the video */}
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
      </section>
    </>
  );
}
