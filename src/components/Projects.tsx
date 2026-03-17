import Loader from "./Loader";

export default function ProjectsGrid() {
  const projects = [
    {
      id: 1,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
    {
      id: 2,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
    {
      id: 3,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
    {
      id: 4,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
    {
      id: 5,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
    {
      id: 6,
      image: "/assets/work/layouts.svg",
      name: "Ciphers",
      year: "2025",
    },
  ];

  return (
    <section className="max-w-300 mx-auto px-2 lg:px-6">
      {/* Toggle tabs */}
      <div className="mb-4 md:mb-8 flex justify-center gap-5 items-center w-full">
        <span className="flex items-center px-3 py-2 rounded-full bg-[#1E1E1E] border border-[#2E2E2E] cursor-pointer">
          <img
            src="/assets/work/laptop-phone-sync.svg"
            alt="Sync Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="font-display font-normal text-sm">All</h2>
        </span>
        <span className="flex items-center">
          <img
            src="/assets/work/smart-phone.svg"
            alt="Smartphone Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="text-[#B3B3B3] font-display font-normal text-sm">
            Mobile
          </h2>
        </span>
        <span className="flex items-center">
          <img
            src="/assets/work/laptop.svg"
            alt="Laptop Icon"
            className="inline-block w-5 h-5 mr-1 opacity-50"
          />
          <h2 className="text-[#B3B3B3] font-display font-normal text-sm">
            Web
          </h2>
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111] p-2 w-full max-w-164.5 h-[clamp(376px,45vw,706px)] rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="bg-[#1E1E1E] h-full w-full rounded-2xl flex flex-col items-center justify-center">
              <div className="relative w-14 h-14 md:w-32 md:h-32 mb-3">
                <img
                  src={project.image}
                  alt={`${project.name} Icon`}
                  className="w-full h-full opacity-50"
                />
                <div className="absolute left-[20%] right-[20%] bottom-[28%] h-[12%] flex items-center justify-center">
                  <Loader />
                </div>
              </div>
              <p className="text-center font-display font-normal text-[#B3B3B3] text-xs md:text-sm">in progress...</p>
            </div>
            <div className="bg-[#171717] p-2 w-full flex items-center justify-between rounded-2xl mt-1">
              <p className="font-display font-medium text-sm md:text-xl">
                {project.name}{" "}
                <span className="text-[#7A7A7A]">/ {project.year}</span>
              </p>
              <button className="flex items-center bg-transparent border border-[#2E2E2E] text-[#B3B3B3] rounded-full p-2 font-display font-medium text-xs md:text-base">
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
