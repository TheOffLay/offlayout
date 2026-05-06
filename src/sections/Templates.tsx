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
        className="max-w-280 2xl:max-w-318 mx-auto px-4 lg:px-6 mt-32 md:mt-40 2xl:mt-48"
        id="templates"
      >
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display font-medium text-3xl md:text-4xl 2xl:text-5xl">
            Templates built <br />
            to ship faster
          </h2>
          <p className="text-[#B3B3B3] font-normal font-display text-xs md:text-base 2xl:text-lg mt-2 md:mt-4 leading-tight">
            Well-structured templates made for speed, <br />
            clarity, and real-world execution
          </p>
        </div>

        {/* Template Cards - Exactly as per Figma Design System */}
        <div className="mt-8 md:mt-12 flex md:grid md:grid-cols-4 gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 md:px-0">
          {templateCards.map((card) => (
            <div key={card.id} className="snap-start shrink-0 w-[280px] md:w-auto flex flex-col gap-4">
              <div className="bg-[#1E1E1E] aspect-square w-full rounded-2xl flex flex-col items-center justify-center border border-white/5 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 flex items-center justify-center opacity-50">
                    <div className="w-16 h-20 border-6 border-[#7A7A7A] rounded-xl flex items-end justify-center pb-2">
                      <div className="w-10 h-2">
                        <Loader />
                      </div>
                    </div>
                  </div>

                  <p className="text-center font-display font-medium text-[#B3B3B3] text-sm tracking-tight">
                    In progress...
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-1">
                {/* Dynamically mapping over the specific icons for this card */}
                <div className="flex items-center gap-1.5">
                  {card.icons.map((icon, index) => (
                    <img key={index} src={icon} alt="" className="w-5 h-5" />
                  ))}
                </div>
                <p className="font-display font-normal text-lg text-[#B3B3B3]">
                  {card.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
