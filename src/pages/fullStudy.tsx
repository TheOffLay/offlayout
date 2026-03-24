import { Link } from "react-router";

export default function FullStudy() {
  return (
    <>
      <header className="max-w-280 2xl:max-w-300 mx-auto px-4 md:px-6 h-16 pt-6 flex items-center justify-between">
        <Link to="/">
          <button className="flex items-center justify-center w-10 h-10 md:w-auto md:h-auto md:py-2 md:px-4 md:gap-1 bg-[#1E1E1E] border-2 border-[#2E2E2E] rounded-full cursor-pointer">
            <img
              src="/assets/full/arrow-left.svg"
              alt="Go back"
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="hidden md:block text-white font-display font-medium text-base">
              Go home
            </span>
          </button>
        </Link>

        <button className="flex items-center gap-2.5 bg-linear-to-br from-[#C4C4C4] via-white to-[#E5E5E5] border border-black ring-1 ring-white ring-offset-1 ring-offset-black rounded-full py-2 px-2 md:px-3 text-black font-display font-medium text-xs md:text-base cursor-pointer">
          View Live
          <img
            src="/assets/full/link-square.svg"
            alt="External link"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </button>
      </header>

      <section className="max-w-280 2xl:max-w-300 mx-auto px-4 md:px-6 mt-10 md:mt-16 2xl:mt-20">
        <div>
          <img
            src="/assets/full/zernx.svg"
            alt=""
            className="w-12 h-12 md:16 md:h-16"
          />
          <h1 className="mt-6 mb-4 md:mb-6 font-display font-medium text-3xl md:text-4xl 2xl:text-5xl">
            Zernfx- <br />
            AI Copilot for DEX System
          </h1>
          <span className="bg-[#00200C] border-2 border-[#003313] text-[#22C55E] text-xs md:text-sm 2xl:text-base rounded-full p-2">
            Completed
          </span>
        </div>

        <div className="mt-6 md:mt-12 2xl:mt-20 bg-[#1E1E1E] rounded-2xl w-full h-100 md:h-120 2xl:h-160"></div>
        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25 flex flex-col md:flex-row justify-between md:gap-24">
          <div className="flex flex-col gap-6">
            <span>
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
                Company
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Zernfx plc
              </p>
            </span>
            <span>
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
                Duration
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                4 weeks
              </p>
            </span>
            <span>
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
                Project scope
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                UI/UX design
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Brand identity
              </p>
            </span>
          </div>

          <div className="w-full max-w-176.75 mx-auto mt-10 md:mt-0">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
              Overview
            </p>
            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Layouts is a design partner that works with founders and product
              teams to design and build clear, scalable digital products. We
              focus on thoughtful UI/UX, strong visual systems, and practical
              execution that helps products ship and grow.
            </p>
            <p className="mt-6 font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Layouts is a design partner that works with founders and product
              teams to design and build clear, scalable digital products. We
              focus on thoughtful UI/UX, strong visual systems, and practical
              execution that helps products ship and grow.
            </p>
          </div>
        </div>

        <div className="mt-6 md:mt-12 2xl:mt-20 bg-[#1E1E1E] rounded-2xl w-full h-100 md:h-120 2xl:h-160"></div>
        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25">
          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Problem
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Users struggled to understand the product structure due to poor
              hierarchy and unclear layout decisions, making key information
              hard to find and the experience confusing.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Key feature focus
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              The primary focus of this project was simplifying the main user
              flow by restructuring the layout to help users understand the
              product quickly and move through it with ease.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Our approach
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              The Layouts team defined a clear layout structure, reduced visual
              noise, and improved spacing and hierarchy to guide users naturally
              through the interface while keeping the experience focused and
              intentional.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              The solution
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              We delivered a simplified layout built around one clear user goal,
              using consistent sections and strong visual hierarchy to improve
              readability and reduce friction across the experience.
            </p>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {/* Box 1 (Top Left) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>

            {/* Box 2 (Top Right) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>

            {/* Box 3 (The Wide Middle Box) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-100 md:h-120 2xl:h-160 w-full md:col-span-2"></div>

            {/* Box 4 (Bottom Left) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>

            {/* Box 5 (Bottom Right) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>
          </div>
        </div>

        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25">
          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Outcome
            </p>

            <span>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                The new layout improved usability and visual clarity, making it
                easier for users to navigate the product and understand its core
                value without unnecessary distractions.
              </p>

              <p className="mt-4 md:mt-6 font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                The layout was designed to reduce confusion and improve clarity,
                with a structure that supports faster understanding and a more
                focused user experience.
              </p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Key takeaway
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              This project reinforced the importance of focusing layouts around
              a single core feature, proving that clear structure and simplicity
              lead to better usability.
            </p>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            {/* Box 1 (Top Left) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>

            {/* Box 2 (Top Right) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-56.5 md:h-100 2xl:h-160 w-full"></div>

            {/* Box 3 (The Wide Middle Box) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-100 md:h-120 2xl:h-160 w-full md:col-span-2"></div>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <h2 className="font-display font-medium text-3xl md:text-6xl text-center">
            Build with us
          </h2>
          <div className="flex items-center justify-center mt-4 md:mt-8">
            <button className="cursor-pointer flex items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-[15px] 2xl:text-base font-display font-medium hover:bg-gray-200 transition-colors">
              <span className="w-2 h-2 rounded-full animate-colorblink"></span>
              Book a consultation
            </button>
          </div>
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
        </div>
      </section>
    </>
  );
}
