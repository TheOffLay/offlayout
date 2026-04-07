// import Loader from "../components/Loader";

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      image: "/assets/work/zernx.webp",
      name: "ZernX",
      description: "Dex Copilot",
    },
    {
      id: 2,
      image: "/assets/work/splixor.webp",
      name: "Splixor",
      description: "Subs Sharing",
    },
    {
      id: 3,
      image: "/assets/work/synai.webp",
      name: "Syn.ai",
      description: "Bitcoin Blockchain",
    },
    {
      id: 4,
      image: "/assets/work/veltrix.webp",
      name: "Veltrix",
      description: "AI Dex",
    },
    // {
    //   id: 5,
    //   image: "/assets/work/layouts.svg",
    //   name: "Ciphers",
    //   description: "2025",
    // },
    // {
    //   id: 6,
    //   image: "/assets/work/layouts.svg",
    //   name: "TrustRadar",
    //   description: "Web3 Traders",
    // },
  ];

  return (
    <section className="max-w-280 2xl:max-w-332 mx-auto px-4 lg:px-6">
      {/* Toggle tabs */}
      {/* <div className="mb-4 md:mb-8 flex justify-center gap-5 items-center w-full"> */}
      <div className="sticky top-16 z-20 py-2 flex justify-center gap-5 items-center w-full backdrop-blur-xl bg-black/75 rounded-b-3xl md:w-fit md:mx-auto md:px-4">
        <span className="flex items-center px-3 py-2 rounded-full bg-[#2E2E2E] border border-[#1E1E1E] cursor-pointer">
          <img
            src="/assets/work/laptop-phone-sync.svg"
            alt="Sync Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="font-display font-normal text-sm md:text-[15px] 2xl:text-base">
            All
          </h2>
        </span>
        <span className="flex items-center">
          <img
            src="/assets/work/smart-phone.svg"
            alt="Smartphone Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="text-[#B3B3B3] font-display font-normal text-sm md:text-[15px] 2xl:text-base">
            Mobile
          </h2>
        </span>
        <span className="flex items-center">
          <img
            src="/assets/work/laptop.svg"
            alt="Laptop Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="text-[#B3B3B3] font-display font-normal text-sm md:text-[15px] 2xl:text-base">
            Web
          </h2>
        </span>
      </div>

      {/* Cards md:max-w-15         max-w-164.5 h-94 md:h-120 2xl:h-176.5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111] p-2 w-full rounded-3xl flex flex-col items-center justify-center"
          >
            {/* <div className="h-full w-full rounded-2xl overflow-hidden items-center justify-center"> */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <div className="relative w-full h-full mb-1">
                <img
                  src={project.image}
                  alt={`${project.name} Icon`}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>
            <div className="bg-[#171717] p-2 w-full flex items-center justify-between rounded-2xl mt-1">
              <p className="font-display font-medium text-sm md:text-base 2xl:text-xl">
                {project.name}{" "}
                <span className="text-[#7A7A7A]">/ {project.description}</span>
              </p>
              <button className="flex items-center bg-transparent border border-[#2E2E2E] text-[#B3B3B3] rounded-full p-2 font-display font-medium text-xs md:text-sm 2xl:text-base">
                View project
                <img src="/assets/work/arrow-white.svg" alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
