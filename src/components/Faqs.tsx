import { useState } from "react";

const faqs = [
  {
    question: "Who's behind Layouts?",
    answer:
      "Layouts is led by Styles, a designer and builder with a passion for turning ideas into real, working products. Together with a small team of dedicated creators, Layouts  focuses on delivering thoughtful, functional, and visually clean solutions tailored to each project. Our goal is to help teams launch faster, build smarter, and make products people actually love.",
  },
  {
    question: "What does Layouts do?",
    answer:
      "Layouts designs and builds digital products. We help teams turn ideas into real, working products that are ready to ship.",
  },
  {
    question: "Do you only design, or do you also build?",
    answer:
      "We do both. Design is only the starting point, we focus on execution and launch.",
  },
  {
    question: "Do you offer templates?",
    answer:
      "Yes. We create ready-to-use templates designed to help you move faster without starting from scratch.",
  },
  {
    question: "Can I request custom work?",
    answer:
      "Yes. We take on custom product and design work depending on scope and availability.",
  },
  {
    question: "How quickly can you deliver?",
    answer:
      "Delivery time depends on the scope of work, but we’re built for speed and aim to move fast without cutting corners.",
  },
  {
    question: "What if the design isn't what I expected?",
    answer:
      "We work closely with your feedback and make revisions to get things aligned before final delivery.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "Refunds are handled case by case, depending on the stage of the project. We keep things transparent and fair.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main className="px-2">
      <section className="max-w-290 mx-auto px-2 pt-2 rounded-2xl bg-[#0A0A0A]">
        <div className="flex items-center justify-center p-8 h-100 md:h-150 2xl:h-200 w-full bg-[#E2E2E2] border-2 border-white rounded-2xl">
          <img
            src="./assets/work/Home page.svg"
            alt="Home page layout"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="pt-7 md:pt-14 pb-14 border-x border-dashed border-[#1E1E1E] w-full max-w-183.5 mx-auto" id="faqs">
          <h2 className="font-display font-medium text-center text-3xl md:text-6xl">
            Frequently Asked
            <br /> Questions
          </h2>
          <p className="mt-4 text-[#B3B3B3] font-display font-normal text-center text-xs md:text-lg md:max-w-125 mx-auto">
            Clear answers help teams move faster. Below are a few things people
            usually want to know before getting started.
          </p>

          {/* The FAQ List */}
          <div className="flex flex-col border-t border-[#1E1E1E] w-full max-w-183.5 mt-6 md:mt-10 mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-[#1E1E1E]">
                  {/* Question / Clickable Header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="cursor-pointer w-full flex items-center justify-between px-4 py-6 text-left focus:outline-none group"
                  >
                    <span className="font-display font-normal text-sm md:text-lg text-white">
                      {faq.question}
                    </span>

                    {/* Chevron Icon */}
                    <svg
                      className={`w-4 h-4 text-white/50 transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Answer / Animated Body */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 font-display font-normal text-[#B3B3B3] text-sm md:text-lg leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 md:mt-10 flex items-center justify-center">
          <button className="cursor-pointer flex items-center gap-3 bg-white text-black px-3 py-3 rounded-full text-sm md:text-base font-display font-medium hover:bg-gray-200 transition-colors">
            <span className="w-2 h-2 rounded-full animate-colorblink"></span>
            Book a consultation
          </button>
          </div>
        </div>
      </section>
    </main>
  );
}
