import React, { useEffect } from "react";

const BookADemo = () => {
  useEffect(() => {
    const id = "calendly-widget-js";
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex flex-col md:flex-row  justify-center items-start p-4 md:p-8 gap-6 bg-[#F8F8F8]">
      {/* Left */}
      <div className="flex flex-col flex-1 sm:items-center items-start sm:text-center md:text-left">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#3F3F3F] font-samsung w-full max-w-[28rem]">
          Book A Demo
        </h1>

        <p className="mt-3 text-[#00000099] inter-400 text-base sm:text-lg w-full max-w-[28rem]">
          The best way to see if Onward Vet is right for your clinic is to
          experience it live. In 60 minutes, we’ll show you how it runs your
          entire clinic — from scheduling to SOAP notes to billing — all in one
          modern, built-in AI system.
        </p>
      </div>

      {/* Right - Compact Calendly Card */}

      <div className="w-full max-w-[760px] rounded-2xl overflow-hidden">
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/onwardvet/60min?hide_gdpr_banner=1&hide_landing_page_details=1&hide_event_type_details=1"
          style={{ minWidth: "320px",height: "720px"  }}
        />
      </div>

      <style>{`
  .calendly-inline-widget { height: 980px; }
  @media (min-width: 768px) { .calendly-inline-widget { height: 1080px; } }
`}</style>
    </div>
  );
};

export default BookADemo;
