import { useState, useRef } from "react";
import { nav } from "../../utils/constants";
import me from "../../assets/me.jpg";
import Sidebar from "../sidebar/Sidebar";
import { AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import { greeting } from "../../utils/constants";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineWrenchScrewdriver,
  HiOutlineBriefcase,
  HiOutlineFolder,
  HiOutlineEnvelope,
} from "react-icons/hi2";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const navIcons = {
  Home: HiOutlineHome,
  About: HiOutlineUser,
  Stack: HiOutlineWrenchScrewdriver,
  Experience: HiOutlineBriefcase,
  Projects: HiOutlineFolder,
  Contact: HiOutlineEnvelope,
};

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
    .fromTo(".nav-pill-item",{
      y:40,
      opacity:0,
    },{
      y:0,
      opacity:1,
      duration:1,
      stagger:{
        each:0.08,
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
        gsap.to(navbar, { y: "-150%", duration: 0.6, ease: "power1.out",  });
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
      <header ref={navbarRef} className="w-screen fixed top-0 z-[100] pointer-events-none">
        <div className="w-full flex items-center justify-between gap-3 px-4 md:px-8 pt-4 md:pt-6">
          {/* Logo */}
          <div className="pointer-events-auto">
            <Link to="Home" spy={true} smooth={true} duration={800}>
              <div className="flex items-center gap-2 md:gap-3 bg-surface/85 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-3 md:pr-5 py-1.5 md:py-2 shadow-lg cursor-pointer hover:border-accent/40 transition-colors duration-300">
                <img
                  src={me}
                  alt="profile-image"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10"
                />
                <span className="hidden sm:inline text-sm md:text-base text-gray-100 font-display tracking-wide">
                  Praveen Kumar
                </span>
              </div>
            </Link>
          </div>

          {/* Center floating pill nav */}
          <div className="hidden md:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 top-4 md:top-6 items-center gap-1 bg-surface/85 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 shadow-lg">
            {nav.map((item, index) => {
              const Icon = navIcons[item];
              return (
                <Link key={index} to={item} spy={true} smooth={true} duration={800}>
                  <div className="nav-pill-item group relative flex items-center justify-center w-11 h-11 rounded-full text-gray-300 hover:text-ink hover:bg-accent transition-colors duration-300 cursor-pointer">
                    {Icon && <Icon size={18} />}
                    <span className="nav-tooltip">{item}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right side: resume + mobile menu */}
          <div className="pointer-events-auto flex items-center gap-3">
            <div className="hidden lg:block cursor-pointer">
              <a href={greeting.resume} target="_blank" rel="noopener noreferrer" download>
                <button
                  id="hire"
                  className="btn-pill-accent"
                />
              </a>
            </div>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-surface/85 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <svg
                width="20px"
                height="20px"
                className="stroke-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L4 7"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 12L4 12"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M20 17L4 17"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && <Sidebar setOpen={setOpen} />}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
