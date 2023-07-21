import React from "react";

const Hero = () => {
  return (
    <div className="flex h-screen font-bodyFont">
      <div className="w-1/3 xl:w-1/4 bg-[#efebeb] text-white">
        <div className="p-4">
          <h2 className="text-xl font-bold mx-3 text-black">Dashboard Menu</h2>
          <hr className=" border-black my-3" />
          <div className="flex items-center flex-col">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Profile Picture"
              className="w-16 h-16 rounded-full border-2 border-black-200 mt-3 shadow-xl "
            />
            <h1 className="text-black font-semibold my-2">Rudra Chandra</h1>
            <h3 className="text-black text-sm">Rudrachandra117@gmail.com</h3>
          </div>
        </div>
        <ul>
          <li className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
            Home
          </li>
          <li className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
            Analytics
          </li>
          <li className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
            Reports
          </li>
          <li className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
            Settings
          </li>
          <li className="bg-[#ed5d5d] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#f41f1f] hover:translate-y-[-1.5px] duration-300 ">
            Log Out
          </li>
        </ul>
      </div>

      <div className="w-2/3 xl:w-3/4 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard 👋🏼</h1>
        <p>
          This is the main content area of the dashboard. You can add various
          components, charts, and other elements here to display data and
          information.
        </p>
        <button className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
          BTN1
        </button>
        <button className="bg-[#4a3aff] rounded-lg py-[14px] px-6 font-bodyFont text-white m-5 font-semibold hover:bg-[#311ff4] hover:translate-y-[-1.5px] duration-300 ">
          BTN2
        </button>
      </div>
    </div>
  );
};

export default Hero;
