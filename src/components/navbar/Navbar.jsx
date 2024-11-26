import { useState, useRef } from "react";
import { nav } from "../../utils/constants";
import me from "../../assets/me.jpg";
import Sidebar from "../sidebar/Sidebar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the button
  const lastScroll = useRef(0);


  useGSAP(() => {
    // Use the ref to target the button
    gsap.timeline()
    .to("#hire", {
      text: "Resume",
      duration: 2,
      ease: "power1.in",
      repeat:2,
      yoyo: true
    })
    .fromTo("li",{
      y:100,
      opacity:0,
    },{
      y:0,
      opacity:1,
      duration:1.5,
      stagger:{
        each:0.2,
        from:"start"
      }
    }, "<")  
  });

  useGSAP(() => {
    const navbar = navbarRef.current;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        // Scroll down - hide the navbar
        gsap.to(navbar, { y: "-100%", duration: 0.6, ease: "power1.out",  });
      } else {
        // Scroll up - show the navbar
        gsap.to(navbar, { y: "0%", duration: 0.4, ease: "power1.out" });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>
      <header ref={navbarRef} className="w-screen fixed top-0 z-50 ">
        <div className="w-full h-24 bg-background2 flex items-center justify-between px-2 md:px-6 lg:pl-10">
          <div className="w-1/2 md:w-1/3  flex items-center gap-3 lg:gap-4">
            <img
              src={me}
              alt="profile-image"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-md md:text-lg lg:text-2xl text-slate-800 uppercase font-extrabold font-carlo hover:text-blue">
              Praveen <span className="font-bold">K</span>umar
            </h1>
          </div>

          <div className="w-1/4 md:w-2/3 flex items-center justify-center gap-2 ">
            <div className="hidden md:block  ">
              {nav.map((item, index) => (
                <li key={index} className="tracking-wide ml-10 lg:ml-20  nav-hover-btn">
                  {item}
                </li>
              ))}
            </div>

            <div className=" lg:w-1/4  flex items-center justify-evenly gap-2">
            <div className="hidden lg:block cursor-pointer">
              {/* Attach ref to the button */}
              <div id="hire" className="w-20 h-9 bg-blue text-sm font-general text-white text-center px-4 py-2 rounded-md"
              />
              </div>

            <div
              className="md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              role="button"
            >
              <svg
                width="28px"
                height="28px"
                className="cursor-pointer "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L4 7"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 12L4 12"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 17L4 17"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            </div>
          </div>
        </div>

        {open && (
          <div className="w-full absolute top-0 right-0 z-50">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={() => setOpen(false)}
            />
            <Sidebar setOpen={setOpen} />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
