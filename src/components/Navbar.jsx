import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="py-4 px-2 sm:px-20 border-[#00000033] border-b flex items-center justify-between">
      <div>
        <img src={logo} />
      </div>
      
      <div className="bg-[#F86446] py-4 px-6 rounded-[70px] text-nowrap text-white font-medium text-[16px]">Book A Demo</div>
    </div>
  );
};

export default Navbar;
