import { useState, useEffect, useRef } from "react";

export default function ConsultationModal() {
  // Dropdown state
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const budgetOptions = [
    "Under $2k",
    "$2k - $5k",
    "$5k+",
    "Prefer not to say",
    "Not sure yet",
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsBudgetOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <section className="mt-40 bg-[#0A0A0A] w-full max-w-99 lg:max-w-150 mx-auto px-3 lg:px-5 rounded-2xl">
        <div className="flex items-center justify-between">
          <img
            src="/assets/navbar/logo.svg"
            alt="Layout Labs Logo"
            className="w-10 h-10 md:w-11 md:h-11"
          />
          <img
            src="/assets/navbar/cancel.svg"
            alt="cancel-btn"
            className="w-10 h-10 md:w-11 md:h-11"
          />
        </div>
        <h1 className="mb-6 lg:mb-10 font-display font-medium text-3xl lg:text-4xl">
          Request <br />
          Consultation
        </h1>
        <form className="w-full flex flex-col gap-5 font-display">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Telegram */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Telegram <span className="text-[#888888]">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="t.me//"
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Idea */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              Tell us about your idea
            </label>
            <textarea
              rows={4}
              placeholder="A short overview of what you want to build or improve."
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors resize-none"
            ></textarea>
          </div>

          {/* Custom Estimated Budget Dropdown */}
          <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
            <label className="text-sm font-medium text-white">
              Estimated budget
            </label>

            {/* Dropdown Trigger */}
            <div
              onClick={() => setIsBudgetOpen(!isBudgetOpen)}
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white transition-colors cursor-pointer flex justify-between items-center"
            >
              <span
                className={selectedBudget ? "text-white" : "text-[#555555]"}
              >
                {selectedBudget || "Select budget"}
              </span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${isBudgetOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Dropdown Menu */}
            {isBudgetOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 max-w-45 lg:max-w-[256px] bg-[#171717] border border-[#2A2A2A] rounded-2xl p-2 z-50 shadow-2xl">
                <div className="flex flex-col gap-1">
                  {budgetOptions.map((option) => {
                    const isSelected = selectedBudget === option;
                    return (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectedBudget(option);
                          setIsBudgetOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer text-sm font-medium transition-colors ${
                          isSelected
                            ? "bg-[#262626] text-white"
                            : "text-[#B5B5B5] hover:text-white hover:bg-[#262626]/50"
                        }`}
                      >
                        {option}
                        {isSelected && (
                          <svg
                            width="14"
                            height="10"
                            viewBox="0 0 14 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 5L4.5 8.5L13 1"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Hidden input to ensure form submission still captures the data if using native actions */}
            <input type="hidden" name="budget" value={selectedBudget} />
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              When are you available?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="DD-MM-YY"
                className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
              />
              <div className="relative flex items-center bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 focus-within:border-white transition-colors">
                <input
                  type="text"
                  placeholder="00:00"
                  className="w-full bg-transparent py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none"
                />
                <span className="text-sm text-[#555555] pointer-events-none">
                  UTC
                </span>
              </div>
            </div>
          </div>

          {/* Hear about us */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-white">
              How did you hear about us?
            </label>
            <input
              type="text"
              placeholder="X, referral, search, friend..."
              className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold text-sm py-3.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
