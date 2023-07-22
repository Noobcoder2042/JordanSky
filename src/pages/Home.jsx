import React from "react";
import Navbar from "../component/Home/Navbar";
import Hero from "../component/Home/Hero";


const Home = () => {
  
  return (
    <div>
      <div className="bg-[#f8f9ff] w-screen  h-screen  ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
