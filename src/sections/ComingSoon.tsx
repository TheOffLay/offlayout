export default function ComingSoon() {
  return (
    <main className="min-h-screen md:mt-20 2xl:mt-0 flex flex-col justify-center items-center">
      <p className="text-center font-display font-normal text-sm md:text-xl mb-10">
        Coming soon...
      </p>
      <h2 className="mb-3 md:mb-6 text-center font-display font-bold text-3xl md:text-4xl 2xl:text-[40px]">
        OffLayout
      </h2>
      <p className="mb-3 md:mb-6 text-center font-display font-normal text-[#B3B3B3] text-sm md:text-lg">
        We design, build, and execute Web2 and Web3
        <br /> products ready for launch.
      </p>
      <p className="text-center font-display font-normal text-[#B3B3B3] text-sm md:text-lg">
        Build with us{" "}
        <span className="mx-2 inline-block w-2 h-2 rounded-full animate-fastblink"></span>
        <a
          href="https://x.com/offlayout_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-200"
        >
          x.com/offlayout_
        </a>
      </p>

      <div className="mt-5 md:mt-10 2xl:mt-15 relative w-full h-75 md:h-125 2xl:h-130 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 md:h-40 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
        <video
          src="https://res.cloudinary.com/dxhw8m6wo/video/upload/v1773330408/layout-labs-animation_pam3f7.mp4"
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover pointer-events-none"
        />
      </div>
    </main>
  );
}
