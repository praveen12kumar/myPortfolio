import { useState, useRef } from "react";
import { nav } from "../../utils/constants";
import me from "../../assets/me.jpg";
import Sidebar from "../sidebar/Sidebar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";


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
      duration: 1,
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
  },[]);

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
  },[]);


  return (
    <>
      <header ref={navbarRef} className="w-screen fixed top-0 z-[100] ">
        <div className="w-full h-24 bg-background2 flex items-center justify-between px-4 md:px-6 lg:pl-10">
          <div id="Home" className="w-1/2 md:w-1/3  flex items-center gap-3 lg:gap-4 cursor-pointer">
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
                <Link to={item} spy={true} smooth={true} duration={800} key={index}>
                  <li className="tracking-wide ml-10 lg:ml-20  nav-hover-btn">
                  {item}
                </li>
                </Link>
              ))}
            </div>

            <div className=" lg:w-1/4  flex items-center justify-evenly gap-2">
            <div className="hidden lg:block cursor-pointer">
              {/* Attach ref to the button */}
              <a href="https://drive.google.com/file/d/10sTPyvdZ7t7h061lXuRU8O5Y_-S5zJjf/view?usp=drive_link" target="_blank" download>
              <button id="hire" className="w-20 h-9 bg-blue text-sm font-general text-white text-center px-4 py-2 rounded-md"
              />
              </a>
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

        {open && ( <Sidebar setOpen={setOpen} />
        )}
      </header>
    </>
  );
};

export default Navbar;
