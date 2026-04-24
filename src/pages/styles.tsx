import Loader from "../components/Loader";

export default function Styles() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <div className="relative w-full pt-10 px-6 sm:px-12 flex justify-center">
          {/* Image Container */}
          <div className="relative w-full max-w-sm sm:max-w-md aspect-4/5 sm:aspect-square md:aspect-4/5 flex justify-center">
            <img
              src="/assets/styles/styles-headshot.webp"
              alt="Honest Ernest"
              className="object-cover w-full h-full"
            />

            {/* Bottom Fade Gradient (Blends image into background) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black via-black/80 to-transparent pointer-events-none"></div>

            {/* Floating Speech Bubble */}
            <div className="absolute top-[15%] right-[5%] sm:right-[-5%] md:-right-5 animate-bounce [animation-duration:3s]">
              <img
                src="/assets/styles/styles.svg"
                alt="Speech Bubble"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>

        {/* --- Content Section --- */}
        <div className="px-6 sm:px-12 relative z-10 -mt-36 md:-mt-48">
          <h1 className="text-lg md:text-xl font-display font-medium tracking-tight mb-1 text-white">
            Honest Ernest
          </h1>
          <p className="text-[#7A7A7A] font-display text-xs md:text-base font-medium tracking-wide">
            Designer and Creative Entrepreneur
          </p>

          {/* Bio Description */}
          <p className="py-6 md:py-10 font-display font-normal text-[#B3B3B3] text-sm md:text-lg leading-relaxed mb-8 w-full max-w-150">
            I'm Honest, but most people know me as{" "}
            <span className="text-white">Styles</span>. I lead{" "}
            <span className="text-white">design at Offlayout</span>
            , a design partner platform. I build products used by many, and
            designers often share and reference my work across Figma and X.
            <br className="hidden sm:block" />
            <br className="block sm:hidden" />
            To me, design is about how people feel when using an interface. I
            pay attention to the details that make experiences seamless and
            human.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="group flex items-center gap-2 bg-linear-to-r from-[#FFFFFF] to-[#B3B3B3] text-black px-4 sm:px-5 py-2.5 rounded-full text-xs md:text-base font-display font-medium hover:from-[#B3B3B3] hover:to-[#FFFFFF] transition-colors">
              Visit OffLayout
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path
                  d="M1 11L11 1M11 1H3.5M11 1V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="bg-[#171717] text-[#B3B3B3] px-4 sm:px-5 py-2.5 rounded-full text-xs md:text-base font-display font-medium">
              My Creations
            </button>
            <button className="bg-[#171717] text-[#B3B3B3] px-4 sm:px-5 py-2.5 rounded-full text-xs md:text-base font-display font-medium">
              Get in touch
            </button>
          </div>

          {/* Projects Section */}
          <div className="my-16 md:my-25.25">
            <h2 className="text-lg md:text-xl font-display font-medium mb-4 text-[#FFFFFF]">
              Projects
            </h2>

            <div className="flex flex-col">
              <div className="bg-[#1E1E1E] w-60 md:w-72 h-48 md:h-60 rounded-2xl flex flex-col items-center justify-center">
                <div className="w-16 h-20 md:w-20 md:h-24 2xl:w-24 2xl:h-30 mb-3 flex flex-col items-center justify-between opacity-50">
                  <div className="w-full h-[80%] border-6 md:border-8 border-[#7A7A7A] rounded-xl md:rounded-2xl 2xl:rounded-3xl flex items-end justify-center pb-1 md:pb-2 2xl:pb-3">
                    <div className="w-9 h-1.75 md:w-12 md:h-2.75">
                      <Loader />
                    </div>
                  </div>
                  {/* bottom bar */}
                  <div className="w-9 h-1.5 md:w-12 md:h-2 bg-[#7A7A7A] rounded-full"></div>
                </div>

                <p className="text-center font-display font-normal text-[#B3B3B3] text-xs md:text-sm">
                  in progress...
                </p>
              </div>
              <p className="mt-1 text-[#7A7A7A] font-display font-regular text-xs md:text-base">Apk</p>
            </div>
          </div>

          {/* --- Footer / Stats --- */}
          <div className="border-t border-[#1E1E1E] py-6 flex flex-row items-center justify-between">
            {/* Social/Stat Counters */}
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              {/* X / Twitter */}
              <div className="flex items-center gap-1.5 text-[#7A7A7A] hover:text-white transition-colors cursor-pointer">
                <svg
                  className="w-3.25 h-3.25 sm:w-3.75 sm:h-3.75"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-xs md:text-base font-display font-medium">100+</span>
              </div>

              {/* Figma */}
              <div className="flex items-center gap-1.5 text-[#7A7A7A] hover:text-white transition-colors cursor-pointer">
                <svg
                  className="w-3.25 h-3.25 sm:w-3.75 sm:h-3.75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5c1.38 0 2.632-.56 3.536-1.464C16.44 9.632 17 8.38 17 7s-.56-2.632-1.464-3.536C14.632 2.56 13.38 2 12 2zm0 10v10m0-10a5 5 0 00-5 5v5h5v-10z"
                  />
                </svg>
                <span className="text-xs md:text-base font-display font-medium">400+</span>
              </div>

              {/* Generic Circle Icon (Dribbble/Community) */}
              <div className="flex items-center gap-1.5 text-[#7A7A7A] hover:text-white transition-colors cursor-pointer">
                <svg
                  className="w-3.25 h-3.25 sm:w-3.75 sm:h-3.75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3-10h6"
                  />
                </svg>
                <span className="text-xs md:text-base font-display font-medium">100+</span>
              </div>
            </div>

            {/* Resume Link */}
            <a
              href="#"
              className="text-[#7A7A7A] text-xs md:text-base font-display font-medium hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
