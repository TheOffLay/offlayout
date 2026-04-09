import { Link } from "react-router";
import { useModal } from "../context/ModalContext";

export default function FullStudy() {
  const { openModal } = useModal();
  return (
    <>
      <header className="max-w-280 2xl:max-w-325 mx-auto px-4 md:px-6 h-16 pt-6 flex items-center justify-between">
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

      <section className="max-w-280 2xl:max-w-325 mx-auto px-4 md:px-6 mt-10 md:mt-16 2xl:mt-20">
        <div className="flex flex-col justify-center items-center">
          <img
            src="/assets/zernx/zernx-logo.svg"
            alt=""
            className="w-12 h-12 md:16 md:h-16"
          />
          <h1 className="mt-6 mb-2 md:mb-5 font-display font-medium text-3xl md:text-4xl 2xl:text-5xl">
            Splixor
          </h1>
          <p className="font-display font-medium text-[#7A7A7A] mb-4 md:mb-5 text-sm md:text-base">
            Smart Subscription Sharing
          </p>
          <span className="bg-[#00200C] border-2 border-[#003313] text-[#22C55E] text-[10px] md:text-xs 2xl:text-base rounded-full p-2">
            Completed
          </span>
        </div>

        {/* <div className="mt-6 md:mt-12 bg-red-500 2xl:mt-20 w-full h-100 md:h-120 2xl:h-160"> */}
        <div className="mt-6 md:mt-12 2xl:mt-20 w-full h-auto">
          <img
            src="/assets/splixor/card1.webp"
            alt="snapshot of splixor card"
            className="w-full h-auto rounded-2xl"
          />
        </div>
        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25 flex flex-col md:flex-row justify-between md:gap-24">
          <div className="flex flex-col gap-6">
            <span>
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
                Company
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Splixor
              </p>
            </span>
            <span>
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
                Duration
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                2 weeks
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
                Product Thinking
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Interaction Design
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Visual Design
              </p>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                Prototyping
              </p>
            </span>
          </div>

          <div className="w-full max-w-176.75 mx-auto mt-10 md:mt-0">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl">
              Overview
            </p>
            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Splixor is a smart subscription platform designed to make premium
              digital services more accessible through shared payments. The idea
              originated from observing how people already split subscription
              costs informally with friends or online communities. While
              services like Netflix and creative tools such as CapCut allow
              multiple users under one plan, coordinating payments and managing
              shared access often becomes chaotic.
            </p>
            <p className="mt-6 font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Our role focused on designing the Minimum Viable Product (MVP).
              The first version of Splixor intended to validate the core idea.
              Instead of building a full ecosystem, the goal was to design a
              simple experience that proves one key concept: users can easily
              join together, contribute funds, and access shared subscriptions
              without friction.
            </p>
          </div>
        </div>

        {/* <div className="mt-6 md:mt-12 2xl:mt-20 bg-[#1E1E1E] rounded-2xl w-full h-100 md:h-120 2xl:h-160"> */}
        <div className="mt-6 md:mt-12 2xl:mt-20 w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-1 place-items-center">
          <img
            src="/assets/splixor/card2.webp"
            alt="snapshot of splixor card"
            className="rounded-2xl w-full"
          />
          <img
            src="/assets/splixor/card3.webp"
            alt="snapshot of splixor card"
            className="rounded-2xl w-full"
          />
          <img
            src="/assets/splixor/card4.webp"
            alt="snapshot of splixor card"
            className="rounded-2xl w-full"
          />
        </div>
        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25">
          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Problem
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Digital subscriptions are increasingly essential, yet paying
              individually can feel expensive for many users. People often share
              accounts with friends, but these arrangements rely heavily on
              trust, manual payments, and one person maintaining the
              subscription. This creates instability and frequent access issues.
              The challenge was to design a simple system that organizes shared
              payments and removes dependency on a single account owner.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Key feature focus
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              The MVP focused on one core feature: subscription pooling. Users
              needed a straightforward way to discover a subscription, join a
              pool, contribute their share, and understand how access works. The
              design prioritized clarity around pricing, available slots, and
              participation, ensuring users could immediately understand what
              they were joining.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Our approach
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Rather than designing a full platform, the approach centered on
              validation and simplicity. We reduced the experience to essential
              actions, browse, join, and contribute. The goal was to minimize
              friction and allow users to understand the concept without
              onboarding complexity or technical explanations.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              The solution
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              The MVP introduced a lightweight interface where users could view
              available subscription pools and join them through a clear
              contribution flow. Each subscription displayed only necessary
              information such as cost breakdown and remaining slots. The
              solution focused on proving usability and desirability rather than
              building advanced automation at an early stage.
            </p>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <img
              src="/assets/splixor/card5.webp"
              alt="snapshot of splixor card"
              className="rounded-2xl w-full"
            />
            <img
              src="/assets/splixor/card6.webp"
              alt="snapshot of splixor card"
              className="rounded-2xl w-full"
            />
          </div>

          <div className="relative w-full aspect-video bg-[#4F46E5] overflow-hidden rounded-2xl mt-5">
            {/* 1. The Wide, Diffused Outer Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] aspect-square bg-[#FF3C88]/50 rounded-full blur-[60px] md:blur-[140px] pointer-events-none"></div>

            {/* 2. The Thicker, Intense Inner Core (The Circle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] md:w-[25%] aspect-square bg-[#FF3C88] rounded-full blur-[20px] md:blur-[60px] pointer-events-none"></div>
            <div className="relative z-10 w-full h-full p-4 md:p-12 flex items-center justify-center">
              <video
                src="https://res.cloudinary.com/dhautz4hj/video/upload/q_auto/f_auto/v1775714799/splixor-vid1_t17xzb.mov"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-232 mx-auto mt-10 md:mt-25">
            <div className="flex flex-col md:flex-row md:gap-24">
              <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
                The solution
              </p>

              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                The MVP introduced a lightweight interface where users could
                view available subscription pools and join them through a clear
                contribution flow. Each subscription displayed only necessary
                information such as cost breakdown and remaining slots. The
                solution focused on proving usability and desirability rather
                than building advanced automation at an early stage.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-video bg-[#4F46E5] overflow-hidden rounded-2xl mt-5">
            {/* 1. The Wide, Diffused Outer Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] aspect-square bg-[#FF3C88]/50 rounded-full blur-[60px] md:blur-[140px] pointer-events-none"></div>

            {/* 2. The Thicker, Intense Inner Core (The Circle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] md:w-[25%] aspect-square bg-[#FF3C88] rounded-full blur-[20px] md:blur-[60px] pointer-events-none"></div>
            <div className="relative z-10 w-full h-full p-4 md:p-12 flex items-center justify-center">
              <video
                src="https://res.cloudinary.com/dhautz4hj/video/upload/q_auto/f_auto/v1775714788/splixor-vid2_lm4o0w.mov"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
            <img
              src="/assets/splixor/card5.webp"
              alt="snapshot of splixor card"
              className="rounded-2xl w-full"
            />
            <img
              src="/assets/splixor/card6.webp"
              alt="snapshot of splixor card"
              className="rounded-2xl w-full"
            />
          </div>

          {/* fifth video  */}
                    <div className="relative w-full aspect-video bg-[#4F46E5] overflow-hidden rounded-2xl mt-5">
            {/* 1. The Wide, Diffused Outer Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[60%] aspect-square bg-[#FF3C88]/50 rounded-full blur-[60px] md:blur-[140px] pointer-events-none"></div>

            {/* 2. The Thicker, Intense Inner Core (The Circle) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] md:w-[25%] aspect-square bg-[#FF3C88] rounded-full blur-[20px] md:blur-[60px] pointer-events-none"></div>
            <div className="relative z-10 w-full h-full p-4 md:p-12 flex items-center justify-center">
              <video
                src="https://res.cloudinary.com/dhautz4hj/video/upload/q_auto/f_auto/v1775714792/splixor-vid3_rkrvui.mov"
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-232 mx-auto mt-10 md:mt-25">
          <div className="flex flex-col md:flex-row md:gap-24 mb-10 md:mb-14">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Outcome
            </p>

            <span>
              <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
                The MVP successfully translated informal subscription sharing
                into a structured product experience. By focusing on core
                functionality, the design demonstrated that users could quickly
                understand and participate in shared subscriptions, providing a
                strong foundation for future product expansion.
              </p>
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:gap-24">
            <p className="font-display font-medium text-sm md:text-lg 2xl:text-xl mb-2 md:mb-0 w-full md:max-w-30 mx-auto">
              Key takeaway
            </p>

            <p className="font-display font-regular text-[#B3B3B3] text-sm md:text-lg 2xl:text-xl">
              Designing the Splixor MVP reinforced that early-stage products are
              about validating ideas, not building complete systems. Clear
              prioritization and simplicity allowed the core concept to stand
              out, proving that thoughtful design can transform everyday
              behavior into a scalable product opportunity.
            </p>
          </div>
        </div>

        <div className="w-full mt-20 md:mt-20 2xl:mt-26">
            {/* Box 3 (The Wide Middle Box) */}
            <div className="bg-[#1E1E1E] rounded-2xl h-100 md:h-120 2xl:h-160 w-full md:col-span-2"></div>
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
