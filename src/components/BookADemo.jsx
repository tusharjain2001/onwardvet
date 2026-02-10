import React from "react";
import calendar from "../assets/calendar.svg";
const BookADemo = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="font-medium text-[64px]">Book A Demo</div>
        <div className="text-[#00000099] font-medium text-[18px]">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={calendar} />
      </div>
    </div>
  );
};

export default BookADemo;
