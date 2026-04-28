import BookCallGraphic from "../components/approach/BookCallGraphic";
import DesignBuildGraphic from "../components/approach/DesignBuildGraphic";
import LaunchGraphic from "../components/approach/LaunchGraphic";

export default function Approach() {
  return (
    <section className="max-w-325 mx-auto px-4 lg:px-6 mt-32 md:mt-40 2xl:mt-48">
      <h2 className="font-display font-medium text-center text-3xl md:text-5xl 2xl:text-6xl text-white">
        The approach
      </h2>
      <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-base 2xl:text-lg">
        A clear path from idea to launch.
      </p>

      {/* cards */}
      <div className="mt-12 md:mt-16 flex flex-col items-center justify-center gap-6 md:flex-row">
        
        {/* Card 1: Book a call */}
        <div className="bg-[#111111] w-full md:max-w-[318.67px] rounded-[24px] p-2 flex flex-col gap-6 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <BookCallGraphic />
          <div className="flex flex-col items-start px-4 pb-8">
            <h3 className="font-display font-medium text-xl text-white">Book a call</h3>
            <p className="text-[#B3B3B3] font-display font-normal text-sm md:text-base mt-1.5 leading-relaxed">
              We understand what you’re building
            </p>
          </div>
        </div>

        {/* Card 2: Design & build */}
        <div className="bg-[#111111] w-full md:max-w-[318.67px] rounded-[24px] p-2 flex flex-col gap-6 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <DesignBuildGraphic />
          <div className="flex flex-col items-start px-4 pb-8">
            <h3 className="font-display font-medium text-xl text-white">Design & build</h3>
            <p className="text-[#B3B3B3] font-display font-normal text-sm md:text-base mt-1.5 leading-relaxed">
              Clear execution, no guesswork
            </p>
          </div>
        </div>

        {/* Card 3: Launch */}
        <div className="bg-[#111111] w-full md:max-w-[318.67px] rounded-[24px] p-2 flex flex-col gap-6 shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
          <LaunchGraphic />
          <div className="flex flex-col items-start px-4 pb-8">
            <h3 className="font-display font-medium text-xl text-white">Launch</h3>
            <p className="text-[#B3B3B3] font-display font-normal text-sm md:text-base mt-1.5 leading-relaxed">
              Ready to ship, ready to scale
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
