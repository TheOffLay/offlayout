import { Link } from "react-router";
import { useModal } from "../context/ModalContext";

export default function Splixor() {
  const { openModal } = useModal();
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
            In progress
          </span>
        </div>

        <div className="w-full mt-6 md:mt-10 mb-10 md:mb-16 2xl:mb-20 font-display">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 w-full">
            {/* 1. Overview Section (Locked to taking ~60% of the width) */}
            <div className="w-full md:w-[60%] flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Overview
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-[#B3B3B3] font-regular text-sm md:text-base leading-relaxed">
                  Layouts is a design partner that works with founders and
                  product teams to design and build clear, scalable digital
                  products. We focus on thoughtful UI/UX, strong visual systems,
                  and practical execution that helps products ship and grow.
                </p>
                <p className="text-[#B3B3B3] font-regular text-sm md:text-base leading-relaxed">
                  Layouts is a design partner that works with founders and
                  product teams to design and build clear, scalable digital
                  products. We focus on thoughtful UI/UX, strong visual systems,
                  and practical execution that helps products ship and grow.
                </p>
              </div>
            </div>

            {/* 2. Project Scope Section */}
            <div className="w-full md:w-[20%] flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Project scope
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-[#B3B3B3] font-regular text-sm md:text-base">
                  UI/UX design
                </p>
                <p className="text-[#B3B3B3] font-regular text-sm md:text-base">
                  Brand Identity
                </p>
              </div>
            </div>

            {/* 3. Duration Section (w-auto makes it shrink to fit, pushing it to the far right edge!) */}
            <div className="w-full md:w-auto flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Duration
              </h3>
              <p className="text-[#B3B3B3] font-regular text-sm md:text-base">
                4 Weeks
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 2xl:mt-20 bg-[#1E1E1E] rounded-2xl w-full h-300 md:h-600 2xl:h-685"></div>
        <div className="mt-2 md:mt-3 bg-[#1E1E1E] rounded-2xl w-full h-100 md:h-150 2xl:h-200"></div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <h2 className="font-display font-medium text-3xl md:text-6xl text-center">
            Build with us
          </h2>
          <div className="flex items-center justify-center mt-4 md:mt-8">
            <button onClick={openModal} className="cursor-pointer flex items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-[15px] 2xl:text-base font-display font-medium hover:bg-gray-200 transition-colors">
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
