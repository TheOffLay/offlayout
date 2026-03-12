export default function Approach() {
  return (
    <>
      <section className="max-w-300 mx-auto px-6 mt-16 md:mt-32">
        <h2 className="font-display font-medium text-center text-3xl md:text-6xl">
          The approach
        </h2>
        <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-lg">
          A clear path from idea to launch.
        </p>

        {/* cards */}
        <div className="mt-5 md:mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="bg-[#111111] w-full max-w-[318.67px] rounded-2xl p-2">
            <img src="/assets/work/approach-1.svg" alt="" className="w-full h-full" />
            <span className="flex flex-col items-start pt-4 pb-6 px-2">
              <h3 className="font-display font-medium text-xl">Book a call</h3>
              <p className="text-[#B3B3B3] font-display font-normal text-xs md:text-base">
                We understand what you're building
              </p>
            </span>
          </div>

          <div className="bg-[#111111] w-full max-w-[318.67px] rounded-2xl p-2">
            <img src="/assets/work/approach-2.svg" alt="" className="w-full h-full" />
            <span className="flex flex-col items-start pt-4 pb-6 px-2">
              <h3 className="font-display font-medium text-xl">Design & build</h3>
              <p className="text-[#B3B3B3] font-display font-normal text-xs md:text-base">
                Clear execution, no guesswork
              </p>
            </span>
          </div>

          <div className="bg-[#111111] w-full max-w-[318.67px] rounded-2xl p-2">
            <img src="/assets/work/approach-3.svg" alt="" className="w-full h-full"  />
            <span className="flex flex-col items-start pt-4 pb-6 px-2">
              <h3 className="font-display font-medium text-xl">Launch</h3>
              <p className="text-[#B3B3B3] font-display font-normal text-xs md:text-base">
                Ready to ship, ready to scale
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
