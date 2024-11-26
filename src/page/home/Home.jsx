import React from "react";
import common from "../../assets/common.svg";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";


const Home = () => {
  return (
    <div className="w-full h-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 flex-center px-4">
        <div className="flex-center">
          <div className="w-full bg-background1 mx-auto -mt-10 md:mt-0 z-10 px-4">
            <h1 className="text-[24px] md:text-6xl tracking-wide text-center font-circular-web uppercase font-extrabold text-black ">
              hey, I'<span className="text-blue">M</span> Praveen Kumar
            </h1>
            <div className="w-full  mt-10 md:mt-14 flex flex-col gap-3 md:gap-5">
              <p className="w-full text-sm md:text-xl text-center">
                A Result-Oriented Web Developer building and managing Websites and
              </p>
              
              <p className="w-full text-sm md:text-lg text-center">
                Web Applications that leads to the success of the overall product
              </p>
            </div>

            <div className="w-full flex-center mt-20 ">
                <Button text="Projects" classes={"px-16 py-3 font-general text-lg"} />
            </div>

          </div>
        </div>
      </div>

      <div className="h-72 px-1 w-16  hidden lg:block z-50 fixed top-1/2 left-0 -translate-y-1/2">
        <SocialMedia/>
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
