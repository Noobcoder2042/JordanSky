import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-[#ffffff] flex justify-between">
        <div>
          <img
            src="https://uploads-ssl.webflow.com/629b1dcd203ede987b4789e8/642c0bedf727c29e5dcf1975_Jordensky%20logo%20final-1.svg"
            alt="Logo"
          />
        </div>
        <div className="flex">
          <button className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
            Talk to Expert
          </button>
          <span className="bg-[#4a3aff] rounded-lg py-[14px] px-5  text-white m-5 flex items-center hover:bg-[#df3e3e]  duration-200">
            <GiHamburgerMenu />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
