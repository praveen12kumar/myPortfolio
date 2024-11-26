import React, { useRef } from "react";
import { nav } from "../../utils/constants";
import { RxCross1 } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Sidebar = ({ setOpen }) => {
  const textRef = useRef([]); // Array of refs for each text
  const timeLines = useRef([]); // Array of timelines for hover animations

  useGSAP(() => {
    // Entry animation for all items
    gsap.to("li", {
      backgroundImage: "linear-gradient(90deg, white 0%, white 100%, #696c75 100%)",
      stagger:{
          each:0.1,
          ease:"power2.out"
      },
      duration:1,
  })
  });

  useGSAP(() => {
    // Individual hover animations
    timeLines.current = textRef.current.map((text) =>
      gsap.timeline({ paused: true }).to(text, {
        color: "#1A2746",
        x: 10,
        scale: 1.3,
        duration: 0.3,
        ease: "power1.out",
        willChange: "transform",
      })
    );
  });

  // Handle mouse events for hover animations
  const handleMouseEnter = (index) => {
    timeLines.current[index].play();
  };
  const handleMouseLeave = (index) => {
    timeLines.current[index].reverse();
  };

  return (
    <div
      onClick={() => setOpen(false)}
      id="sidebar"
      className="w-screen h-[70vh] bg-darkSlate absolute top-0 left-0 rounded-b-3xl "
    >
      <div className="w-full h-full relative flex flex-col">
        {/* Close Button */}
        <div className="absolute top-6 right-10" onClick={() => setOpen(false)}>
          <RxCross1 className="text-2xl text-white cursor-pointer" />
        </div>

        {/* Sidebar Content */}
        <div className="w-full h-full flex items-center px-10">
        <ul className='flex flex-col items-start gap-6 list-none'>
               {
                 nav.map((item, index) => (
                   <li ref={(el) => (textRef.current[index] = el)} key={index} className="text-[8vw] md:text-[4vw] min-w-fit font-circular-web font-bold cursor-pointer uppercase relative "
                   style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                     backgroundImage: "linear-gradient(90deg, white 0%, white 0%, #696c75 0%)"
                  }}
                  onMouseEnter={()=>handleMouseEnter(index)}
                  onMouseLeave={()=>handleMouseLeave(index)}
                   > 
                     {item}
                   </li>
                 ))
               } 
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
