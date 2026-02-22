import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full">
      {/* TOP ORANGE STRIP */}
      <div className="w-full bg-[#F86446] text-white text-center text-xs sm:text-[16px] py-2 px-2">
        <span
          className="
    inline-block
    border-[2px] border-white
    rounded-full
    px-3 py-1 mr-1 
    text-white
    auto-zoom
  "
        >
          Veterinary Software
        </span>{" "}
        | Built-In AI | <br className="block sm:hidden" />
        Runs Your Entire Clinic | Easy To Use
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-4 sm:px-20 py-4 border-b border-[#00000033] bg-white">
        {/* LOGO */}
        <a
          href="https://onwardvet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="Onward Vet Logo" className="h-8 sm:h-9" />
        </a>

        {/* CTA BUTTON */}
        <button
          onClick={() => {
            const section = document.getElementById("book-demo");
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-[#F86446] text-white px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-medium whitespace-nowrap hover:opacity-90 transition cursor-pointer"
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
};

export default Navbar;
