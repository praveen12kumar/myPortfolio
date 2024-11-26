import React from "react";
import common from "../../assets/common.svg";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${common})` }}
      >
      </div>
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
        <div className="w-full mx-auto z-10">
          <h1 className="text-4xl md:text-6xl text-center uppercase font-bold text-slate-800">hey, I'M Praveen Kumar</h1>
        <div className="">
          <p>A Result-Oriented Web Developer building and managing Websites and Web</p>
          <p>Applications that leads to the success of the overall product</p>
        </div>
      </div> 
      </div>
    </div>
  );
};

export default Home;
