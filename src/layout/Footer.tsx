export default function Footer() {
  return (
    <>
      <footer className="max-w-280 2xl:max-w-300 mx-auto px-2 lg:px-6 mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          <span className="space-y-1">
            <p className="font-normal text-sm md:text-base">Clients</p>
            <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
              Splixor
            </p>
            <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
              Zenee
            </p>
            <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
              Ceepherlabs
            </p>
          </span>

          <div className="flex flex-col md:flex-row md:items-center md:gap-16 space-y-8 md:space-y-0">
            <span className="space-y-1">
              <p className="font-normal text-sm md:text-base">Menu</p>
              <p className=" text-[#B3B3B3] font-normal text-sm md:text-base">
                Work
              </p>
              <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
                Templates
              </p>
              <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
                About
              </p>
            </span>

            <span className="space-y-1">
              <p className="font-normal text-sm md:text-base">Connect</p>
              <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
                Email
              </p>
              <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
                X/Twiter
              </p>
              <p className="text-[#B3B3B3] font-normal text-sm md:text-base">
                Telegram
              </p>
            </span>
          </div>
        </div>

        {/* <div className="mt-8 mb-6 md:mt-10 w-full h-0.5 bg-[repeating-linear-gradient(90deg,#1E1E1E_0px,#1E1E1E_12px,transparent_12px,transparent_20px)] opacity-50"></div> */}

        <div className="flex items-center justify-between mt-8 md:mt-10 pt-6 mb-6 border-t border-dashed border-[#1E1E1E]">
          <span>
            <p className="font-display font-regular text-xs md:text-base text-[#B3B3B3]">
              &copy; {new Date().getFullYear()} Layouts
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
