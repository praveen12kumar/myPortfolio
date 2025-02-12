import React, { useEffect, useRef } from "react";
import common from "../assets/common.svg";
import Button from "../components/button/Button";
import SocialMedia from "../components/socialMedia/SocialMedia";
import { Link } from "react-scroll";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {


  const textRef = useRef(null);

  useEffect(()=>{
    gsap.to(textRef.current, {
      text: "HEY, I'M PRAVEEN KUMAR",
      duration:3,
      ease:"power1.out",
      onUpdate: () => {
        if (textRef.current) {
          let text = textRef.current.innerHTML;
          textRef.current.innerHTML = text.replace(
            "M",
            `<span class="text-sky-800">M</span>`
          );
        }
      }
    })
  },[]);



  return (
    <div id="Home" className="w-full h-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 flex-center px-4">
        <div className="flex-center">
          <div className="w-full bg-background1 mx-auto -mt-10 md:mt-0 z-10 px-4">
            <h1 className="text-[24px] md:text-6xl tracking-wide text-center font-mulish uppercase font-extrabold text-black ">
              <span ref={textRef} className=""></span>
            </h1>
            <div className="w-full  mt-10 md:mt-14 flex flex-col gap-3 md:gap-5">
              <p className="w-full text-sm md:text-xl text-center">
                A Result-Oriented Web Developer building and managing Websites and
              </p>
              
              <p className="w-full text-sm md:text-lg text-center">
                Web Applications that leads to the success of the overall product
              </p>
            </div>

            <div className="w-full flex-center mt-20 z-50">
                <Link to="Projects" spy={true} smooth={true} duration={1000}>
                <Button text="Projects" classes={"px-16 py-2 btn bg-[#039E91] hover:bg-[#059084] flex items-center justify-center  text-white font-mulish  text-lg z-50 uppercase"} />
                </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="h-72 px-1 w-16  hidden lg:block z-50 fixed top-1/2 left-0 -translate-y-1/2">
        <SocialMedia className="flex-col"/>
      </div>
      {/* backgroundImage */}
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${common})` }}
      ></div>
    </div>
  );
};

export default Hero;
