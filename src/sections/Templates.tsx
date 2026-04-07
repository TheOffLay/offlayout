import Loader from "../components/Loader";

// Extracted card data array
const templateCards = [
  { id: 1, icons: ["/assets/work/folio.svg"], title: "DesignFolio" },
  {
    id: 2,
    icons: ["/assets/work/figma.svg", "/assets/work/folio.svg"],
    title: "DesignFolio",
  },
  {
    id: 3,
    icons: ["/assets/work/figma.svg", "/assets/work/folio.svg"],
    title: "DesignFolio",
  },
  { id: 4, icons: ["/assets/work/folio.svg"], title: "DesignFolio" },
];

export default function Templates() {
  return (
    <>
      <section
        className="max-w-280 2xl:max-w-332 mx-auto px-4 lg:px-6 mt-16 md:mt-24 2xl:mt-32"
        id="templates"
      >
        <h2 className="font-display font-medium text-3xl md:text-4xl 2xl:text-5xl">
          Templates built <br />
          to ship faster
        </h2>
        <p className="text-[#B3B3B3] font-normal font-display text-xs md:text-base 2xl:text-lg mt-2 md:mt-4 leading-tight">
          Well-structured templates made for speed, <br />
          clarity, and real-world execution
        </p>

        {/* Template Cards - Applied the flex carousel for mobile, defaults to grid on desktop md: */}
        <div className="mt-5 md:mt-10 flex md:grid md:grid-cols-4 gap-4 md:gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {templateCards.map((card) => (
            <div key={card.id} className="snap-start shrink-0 w-68 md:w-auto">
              <div className="bg-[#1E1E1E] h-56 md:h-66 w-full rounded-2xl flex flex-col items-center justify-center">
                {/* <div className="relative w-14 h-14 md:w-20 md:h-20 mb-3">
                  <img
                    src="/assets/work/layouts.svg"
                    alt=""
                    className="w-full h-full opacity-50"
                  />
                  <div className="absolute left-[20%] right-[20%] bottom-[28%] h-[12%] flex items-center justify-center">
                    <Loader />
                  </div>
                </div>
                <p className="text-center font-display font-normal text-[#B3B3B3] text-xs md:text-sm">
                  in progress...
                </p> */}
                <div className="bg-[#1E1E1E] h-full w-full rounded-2xl flex flex-col items-center justify-center">
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
              </div>

              <span className="flex items-center gap-2 mt-2">
                {/* Dynamically mapping over the specific icons for this card */}
                {card.icons.map((icon, index) => (
                  <img key={index} src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                ))}
                <p className="font-display font-normal text-xs md:text-base 2xl:text-lg text-[#B3B3B3]">
                  {card.title}
                </p>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
