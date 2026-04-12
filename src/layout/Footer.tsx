// import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className="max-w-280 2xl:max-w-318 mx-auto px-4 lg:px-6 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          <span className="space-y-2">
            <p className="font-normal text-sm md:text-base">Clients</p>
            <a
              href="https://zernx.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base mb-1">
                ZernX
              </p>
            </a>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base">
                Splixor
              </p>
              <p className="font-display font-normal text-[10px] text-xs rounded-full p-1 text-[#7A7A7A] border border-[#1E1E1E]">
                Coming soon
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base">
                Syn.ai
              </p>
              <p className="font-display font-normal text-[10px] text-xs rounded-full p-1 text-[#7A7A7A] border border-[#1E1E1E]">
                Coming soon
              </p>
            </div>
          </span>

          <div className="flex flex-col md:flex-row md:items-center md:gap-16 space-y-8 md:space-y-0">
            <span className="space-y-2">
              <p className="font-normal text-sm md:text-base">Menu</p>
              <a href="#work">
                <p className=" text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base mb-1">
                  Work
                </p>
              </a>
              <a href="#templates">
                <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base mb-1">
                  Templates
                </p>
              </a>
              <a href="#about">
                <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base">
                  About
                </p>
              </a>
            </span>

            <span className="space-y-2">
              <p className="font-normal text-sm md:text-base">Connect</p>
              <a href="mailto:offlayout@gmail.com">
                <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base transition-colors duration-200 mb-1">
                  Email
                </p>
              </a>

              <a
                href="https://x.com/offlayout_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base transition-colors duration-200 mb-1">
                  X/Twitter
                </p>
              </a>

              <a
                href="https://t.me/onest_styles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-[#B3B3B3] hover:text-white font-normal text-sm md:text-base transition-colors duration-200">
                  Telegram
                </p>
              </a>
            </span>
          </div>
        </div>

        {/* <div className="mt-8 mb-6 md:mt-10 w-full h-0.5 bg-[repeating-linear-gradient(90deg,#1E1E1E_0px,#1E1E1E_12px,transparent_12px,transparent_20px)] opacity-50"></div> */}

        <div className="flex items-center justify-between mt-8 md:mt-10 pt-6 mb-6 border-t border-dashed border-[#1E1E1E]">
          <span>
            <p className="font-display font-regular text-xs md:text-base text-[#B3B3B3]">
              &copy; {new Date().getFullYear()} OffLayout
            </p>
            <p className="font-display font-regular text-xs md:text-base text-[#B3B3B3]">
              All rights reserved
            </p>
          </span>

          <span>
            <p className="font-display font-regular text-xs md:text-base text-[#B3B3B3]">
              Created with &hearts; in Web3
            </p>
            <p className="text-end font-display font-regular text-xs md:text-base text-[#B3B3B3]">
              Designed on Figma
            </p>
          </span>
        </div>
      </footer>
    </>
  );
}
