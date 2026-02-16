import React from "react";
import bg from "../assets/orangecardbg.svg";

const OrangeCard = () => {
  return (
    <div className="w-full flex justify-center px-4 py-10 bg-white">
      <div className="relative w-full max-w-6xl bg-[#F9735B] rounded-3xl px-8 py-10 md:px-16 md:py-14 overflow-hidden">
        {/* LEFT SIDE BACKGROUND */}
        <img
          src={bg}
          alt=""
          className="absolute left-0 top-0 h-full w-1/2 object-cover opacity-30 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-white text-[22px] md:text-[28px] font-bold leading-snug">
              Onward Vet’s AI is built directly into our fully integrated
              practice management software — not a separate add-on.
            </h2>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <p className="text-white text-[16px] md:text-[20px] opacity-90">
              Fully integrated practice management software with built-in AI —
              no add-ons, no copy-paste.
            </p>

            <button
              onClick={() => {
                const section = document.getElementById("book-demo");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white w-fit text-[#F86446] font-bold px-6 py-3 rounded-full shadow-md cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrangeCard;
