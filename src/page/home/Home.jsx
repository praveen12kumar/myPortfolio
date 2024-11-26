import React from "react";
import common from "../../assets/common.svg";

const Home = () => {
  return (
    <div className="w-full h-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 flex-center px-4">
        <div className="flex-center">
          <div className="w-full bg-background1  mx-auto -mt-10 md:mt-0 z-10 px-4">
            <h1 className="text-[24px] md:text-6xl tracking-wide text-center font-circular-web uppercase font-extrabold text-black ">
              hey, I'<span className="text-blue">M</span> Praveen Kumar
            </h1>
            <div className="w-full  mt-8 md:mt-14 flex flex-col gap-3 md:gap-5">
              <p className="text-sm md:text-xl text-center">
                A Result-Oriented Web Developer building and managing Websites and
              </p>
              
              <p className="text-sm md:text-lg text-center">
                Web Applications that leads to the success of the overall product
              </p>
            </div>

            <div className="w-full flex-center">

            </div>

          </div>
        </div>
      </div>
      {/* backgroundImage */}
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${common})` }}
      ></div>
    </div>
  );
};

export default Home;
