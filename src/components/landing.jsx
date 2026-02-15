import doctorImg from "@/assets/Landing/Docimage.png";
import capterraImg from "@/assets/Landing/Capteriabutton.png";

const Hero = () => {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="font-samsung text-left lg:text-left">
          <h1 className="text-4xl sm:text-7xl text-nowrap font-bold leading-tight text-[#3F3F3F]">
            Finish Your Notes <br className="block" />
            Before You Leave.
          </h1>

          <p className="mt-4 inter-500 text-[#00000099] font-medium sm:text-xl max-w-90 sm:max-w-130  lg:mx-0">
            Speak naturally. Onward Vet’s built-in AI drafts a clean,
            structured SOAP note in seconds — directly inside your
            system. Always editable. Always under your control.
          </p>

          <div className="mt-6 flex flex-row sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <button className="rounded-full text-lg bg-orange-500 px-6 py-3 text-white font-bold text-nowrap hover:bg-orange-600 transition">
              Book A Demo
            </button>

            <img
              src={capterraImg}
              alt="Capterra rating"
              className="h-8"
            />
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex mt-12 justify-center">
          <div className="relative">

            <img
              src={doctorImg}
              alt="Doctor using laptop"
              className="relative z-10 w-84 sm:w-90"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
