import React from "react";

export default function Footer({
  logoSrc,
  dogSrc,
  igIconSrc,
  xIconSrc,
  fbIconSrc,
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="w-full">
      {/* TOP WHITE */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* make it tall like figma */}
          <div className="grid min-h-[320px] items-center gap-10 md:grid-cols-[1fr_auto_1fr] md:min-h-[420px]">
            {/* LEFT */}
            <div className="flex flex-col items-start">
              <img
                src={logoSrc}
                alt="OnwardVet"
                className="h-14 w-auto md:h-16"
              />

              <div className="mt-8 flex items-center gap-5">
                <img src={igIconSrc} alt="Instagram" className="h-7 w-7" />
                <img src={xIconSrc} alt="Twitter" className="h-7 w-7" />
                <img src={fbIconSrc} alt="Facebook" className="h-7 w-7" />
              </div>

              <button className="mt-8 bg-[#F86446] text-white px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap hover:opacity-90 transition">
                Book A Demo
              </button>
            </div>

            {/* Divider */}
            <div className="hidden h-44 w-px bg-zinc-200 md:block" />

            {/* RIGHT */}
            <div className="flex flex-col items-center">
              <img
                src={dogSrc}
                alt="Mascot"
                className="h-32 w-auto md:h-40 lg:h-44"
              />

              <p className="mt-6 max-w-md text-center font-samsung text-base font-bold leading-6 text-[#3F3F3F] md:text-lg">
                Modern Veterinary Software | Built-In
                <br />
                AI | Runs Your Entire Clinic | Easy to Use
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DARK BAR */}
      <div className="bg-[#3F3F3F] inter-400">
        <div className="mx-auto flex max-w-7xl flex-col  items-center justify-between gap-3 px-6 py-5 text-sm text-white/80 md:flex-row">
          <div>© {year} OnwardVet - All Rights Reserved</div>

          <div className="flex items-center gap-12">
            <a href="#" className="hover:text-white">
              Terms of use
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
