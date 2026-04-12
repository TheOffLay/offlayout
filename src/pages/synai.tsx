import { Link } from "react-router";
import { useModal } from "../context/ModalContext";

export default function Synai() {
  const { openModal } = useModal();
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/75 backdrop-blur-xl h-20">
        <nav className="max-w-280 2xl:max-w-318 mx-auto px-4 md:px-6 h-16 pt-6 flex items-center justify-between">
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

          {/* <button className="flex items-center gap-2.5 bg-linear-to-br from-[#C4C4C4] via-white to-[#E5E5E5] hover:from-[#E5E5E5] hover:to-[#C4C4C4] border border-black ring-1 ring-white ring-offset-1 ring-offset-black rounded-full py-2 px-2 md:px-3 text-black font-display font-medium text-xs md:text-base cursor-pointer transition-all duration-300 ease-in-out">
          View Live
          <img
            src="/assets/full/link-square.svg"
            alt="External link"
            className="w-4 h-4 md:w-5 md:h-5"
          />
        </button> */}
          <div className="p-3 bg-[#171717] border border-[#2E2E2E] shadow-[inset_0_0_0_3px_#000000] rounded-full w-10 h-10 md:w-14 md:h-14 2xl:w-16 2xl:h-16 flex flex-col items-center justify-center cursor-not-allowed group">
            <img src="/assets/work/unlink-02.svg" alt="External link" />
          </div>
        </nav>
      </header>

      <section className="max-w-280 2xl:max-w-318 mx-auto px-4 md:px-6 pt-28 md:pt-32 2xl:pt-36">
        <div>
          <img
            src="/assets/synai/synai-logo.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-w-10"
          />
          <h1 className="mt-6 font-display font-medium text-3xl md:text-4xl 2xl:text-5xl">
            Syn.ai
          </h1>
          <p className="font-display font-medium text-[#7A7A7A] mb-4 md:mb-6 text-sm md:text-base">
            Bitcoin Blockchain
          </p>
          <span className="bg-[#00200C] border-2 border-[#003313] text-[#22C55E] text-[10px] md:text-xs 2xl:text-base rounded-full p-2">
            Completed
          </span>
        </div>

        <div className="w-full mt-6 md:mt-10 mb-10 md:mb-16 2xl:mb-20 font-display">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 w-full">
            {/* 1. Overview Section (Locked to taking ~60% of the width) */}
            <div className="w-full md:w-[60%] flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Overview
              </h3>
              <p className="text-[#B3B3B3] font-regular text-sm md:text-base leading-relaxed">
                This project focused on designing a marketing landing page for a
                Bitcoin alert platform that helps users discover new tokens and
                NFTs early. The objective was to clearly communicate the
                product’s value, build trust, and encourage sign-ups through a
                simple, conversion-focused experience.
              </p>
              <p className="mt-2 text-[#B3B3B3] font-regular text-sm md:text-base leading-relaxed">
                The page was designed to highlight real-time alerts, project
                analysis, and user safety while simplifying complex crypto
                concepts into clear messaging and intuitive visual hierarchy.
              </p>
            </div>

            {/* 2. Project Scope Section */}
            <div className="w-full md:w-[20%] flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Project scope
              </h3>
              <p className="text-[#B3B3B3] font-regular text-sm md:text-base">
                UI/UX design
              </p>
            </div>

            {/* 3. Duration Section (w-auto makes it shrink to fit, pushing it to the far right edge!) */}
            <div className="w-full md:w-auto flex flex-col gap-1">
              <h3 className="text-white font-medium text-base md:text-lg">
                Duration
              </h3>
              <p className="text-[#B3B3B3] font-regular text-sm md:text-base">
                3 Days
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 md:mt-3 flex flex-col gap-1 md:gap-2">
          <img
            src="/assets/synai/card1.webp"
            alt="snapshot of syn.ai home page"
            className="rounded-2xl md:rounded-3xl border-2 border-[#1E1E1E] p-1 shadow-[0_20px_50px_-12px_#1E1E1E]"
          />
          <img
            src="/assets/synai/card2.webp"
            alt="snapshot of syn.ai features page"
            className="rounded-2xl md:rounded-3xl border-2 border-[#1E1E1E] p-1 shadow-[0_20px_50px_-12px_#1E1E1E]"
          />
          <img
            src="/assets/synai/card3.webp"
            alt="snapshot of syn.ai how it works page"
            className="rounded-2xl md:rounded-3xl border-2 border-[#1E1E1E] p-1 shadow-[0_20px_50px_-12px_#1E1E1E]"
          />

          <div className="mt-0.5 md:mt-1 relative w-full rounded-2xl md:rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              src="/assets/synai/presentation mode.webp"
              alt="Presentation Background"
              className="w-full h-auto block object-cover"
            />
            <div className="absolute z-10 w-[89%] md:w-[89%] 2xl:w-[89%] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] bg-[#0A0A0A]">
              <video
                src="https://res.cloudinary.com/dhautz4hj/video/upload/q_auto/f_auto/v1775674835/synai-presentation_hlisft.mov"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <h2 className="font-display font-medium text-3xl md:text-6xl text-center">
            Build with us
          </h2>
          <div className="flex items-center justify-center mt-4 md:mt-8">
            <button
              onClick={openModal}
              className="cursor-pointer flex items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-[15px] 2xl:text-base font-display font-medium hover:bg-gray-200 transition-colors"
            >
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
