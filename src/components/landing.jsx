import doctorImg from "@/assets/Landing/Docimage.png";
import doctorImgmob from "@/assets/Landing/Docimagemob.png";
import capterraImg from "@/assets/Landing/Capteriabutton.png";

const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[85vh]">
      {/* DESKTOP IMAGE */}
      <div
        className="
          hidden lg:block
          absolute
          inset-y-0
          right-0
          w-[65%]
          bg-no-repeat
          bg-cover
          bg-right
        "
        style={{ backgroundImage: `url(${doctorImg})` }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-20 pb-2 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="w-full lg:w-1/2 font-samsung">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#3F3F3F]">
              Finish Your <br />
              Veterinary Notes <br />
              Before You Leave.
            </h1>

            <p className="mt-6 text-[#00000099] font-medium text-sm sm:text-lg max-w-xl">
              Speak naturally. Onward Vet’s built-in AI drafts a clean,
              structured SOAP note in seconds — directly inside your system.
              Always editable. Always under your control.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => {
                  const section = document.getElementById("book-demo");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full bg-[#F86446] px-6 py-3 text-white font-bold text-sm sm:text-base transition cursor-pointer"
              >
                Book a Demo
              </button>

              <img src={capterraImg} alt="Capterra rating" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE IMAGE — RIGHT-ALIGNED & CROPPED */}
      <div className="lg:hidden h-120 overflow-hidden relative">
        <img
          src={doctorImgmob}
          alt="Doctor with dog"
          className="
      
      object-cover
      w-full h-full
    "
        />
      </div>
    </section>
  );
};

export default Hero;
