import { useState, useEffect, useRef } from "react";
import { useModal } from "../context/ModalContext";

export default function ConsultationModal() {
  const { closeModal } = useModal();
  const [isBudgetOpen, setIsBudgetOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission failed", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
        {status === "success" ? (
          <div className="relative overflow-hidden flex flex-col items-center text-center pt-8 pb-10 px-5 animate-in fade-in zoom-in duration-300 w-full max-w-138 mx-auto bg-[#171717] border border-[#1E1E1E] rounded-2xl">
            {/* --- STATIC CONFETTI BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Left Side */}
              <div className="absolute top-[25%] left-[10%] w-1 h-1 bg-[#525252] rounded-full opacity-60"></div>
              <div className="absolute top-[40%] left-[12%] w-1.5 h-4 bg-[#525252] -rotate-12 rounded-[1px] opacity-80"></div>
              <div className="absolute top-[25%] left-[22%] w-1.5 h-1.5 bg-[#525252] rotate-45 opacity-60"></div>
              {/* Downward Triangle */}
              <div className="absolute top-[60%] left-[18%] w-0 h-0 border-l-4 border-r-4 border-t-[6px] border-l-transparent border-r-transparent border-t-[#525252] rotate-[-20deg] opacity-70"></div>

              {/* Top Middle */}
              <div className="absolute top-[12%] left-[42%] w-1.5 h-4 bg-[#525252] rotate-15 rounded-[1px] opacity-70"></div>

              {/* Right Side */}
              <div className="absolute top-[15%] right-[28%] w-1.5 h-5 bg-[#525252] -rotate-20 rounded-[1px] opacity-90"></div>
              <div className="absolute top-[35%] right-[18%] w-2 h-4 bg-[#525252] rotate-45 rounded-[1px] opacity-70"></div>
              <div className="absolute top-[25%] right-[8%] w-1 h-1 bg-[#525252] rounded-full opacity-50"></div>
              {/* Downward Triangle */}
              <div className="absolute top-[50%] right-[25%] w-0 h-0 border-l-[3px] border-r-[3px] border-t-[5px] border-l-transparent border-r-transparent border-t-[#525252] rotate-30 opacity-80"></div>
              <div className="absolute bottom-[25%] right-[12%] w-1.5 h-1.5 bg-[#525252] rounded-full opacity-60"></div>
            </div>
            {/* ---------------------------------- */}

            {/* Success Icon (Added relative z-10 so it sits ABOVE the confetti) */}
            <div className="mb-6 relative z-10">
              <img
                src="/assets/work/mail.svg"
                alt="Success"
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>

            <h2 className="relative z-10 text-lg md:text-2xl font-display font-medium text-white mb-4">
              Request received
            </h2>
            <p className="relative z-10 text-[#B3B3B3] font-display font-normal text-xs md:text-base mb-6 md:mb-10 max-w-113 leading-relaxed">
              Our team will review your details and contact you using your
              preferred method to schedule a session.
            </p>

            <button
              onClick={closeModal}
              className="relative z-10 w-full max-w-68.75 mx-auto bg-white font-display text-black font-medium text-sm md:text-base py-3.5 rounded-full cursor-pointer hover:bg-gray-200 transition-colors"
            >
              Done
            </button>

            <p className="relative z-10 mt-4 md:mt-6 font-display font-normal text-sm text-[#B3B3B3]">
              Need a quick reply?{" "}
              <a
                href="https://t.me/yourtelegramhandle"
                target="_blank"
                rel="noreferrer"
                className="text-[#60A5FA] font-display font-normal hover:underline"
              >
                Chat on telegram!
              </a>
            </p>
          </div>
        ) : (
          <div className="relative bg-[#0A0A0A] mt-100 md:mt-150 2xl:mt-50 w-full max-w-99 lg:max-w-150 mx-auto px-5 py-8 rounded-2xl border border-[#2A2A2A]">
            <div className="flex items-center justify-between mb-6 lg:mb-10">
              <img
                src="/assets/navbar/logo.svg"
                alt="Layout Labs Logo"
                className="w-10 h-10 md:w-11 md:h-11"
              />
              <img
                src="/assets/navbar/cancel.svg"
                alt="cancel-btn"
                onClick={closeModal}
                className="w-10 h-10 2xl:w-11 2xl:h-11 cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>

            <h1 className="mb-6 lg:mb-10 font-display font-medium text-3xl lg:text-4xl text-white">
              Request <br />
              Consultation
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-5 font-display"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  required
                  name="email"
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
                  name="telegram"
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
                  required
                  name="idea"
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
                    name="availability_date"
                    type="date"
                    required
                    placeholder="DD-MM-YY"
                    className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors [&::-webkit-calendar-picker-indicator]:invert cursor-pointer"
                  />
                  <div className="relative flex items-center bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 focus-within:border-white transition-colors">
                    <input
                      name="availability_time"
                      type="time"
                      required
                      placeholder="00:00"
                      className="w-full bg-transparent py-3 text-sm text-white focus:outline-none [&::-webkit-calendar-picker-indicator]:invert cursor-pointer"
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
                  name="source"
                  type="text"
                  placeholder="X, referral, search, friend..."
                  className="w-full bg-[#111111] border border-[#1E1E1E] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full mt-2 bg-white text-black font-semibold text-sm py-3.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </>
  );
}
