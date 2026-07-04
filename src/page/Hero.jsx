import { useEffect, useRef } from "react";
import common from "../assets/common.svg";
import { Link } from "react-scroll";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaChevronDown } from "react-icons/fa";
import SectionLabel from "../components/sectionLabel/SectionLabel";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const badgeRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Fade in the eyebrow badge first
    tl.from(badgeRef.current, {
      y: -16,
      opacity: 0,
      duration: 0.6,
    });

    // Animate the name with typewriter effect
    tl.to(
      textRef.current,
      {
        text: "HEY, I'M PRAVEEN KUMAR",
        duration: 2.5,
        ease: "power1.out",
        onUpdate: () => {
          if (textRef.current) {
            let text = textRef.current.innerHTML;
            textRef.current.innerHTML = text.replace(
              "M",
              `<span class="text-accent">M</span>`
            );
          }
        },
      },
      "-=0.2"
    );

    // Fade in subtitle lines staggered
    tl.from(
      subtitleRef.current?.querySelectorAll("p") || [],
      {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.5"
    );

    // Slide up the CTA buttons
    tl.from(
      ctaRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.3"
    );

    // Fade in the scroll cue last
    tl.from(
      scrollRef.current,
      {
        opacity: 0,
        duration: 0.6,
      },
      "-=0.2"
    );
  }, []);

  return (
    <div id="Home" className="w-full h-dvh relative">
      <div className="w-full h-full absolute top-0 left-0 flex-center px-4">
        <div className="flex-center">
          <div className="w-full bg-transparent mx-auto -mt-10 md:mt-0 z-10 px-4 flex flex-col items-center">
            <div ref={badgeRef}>
              <SectionLabel>Available for opportunities</SectionLabel>
            </div>
            <h1 className="text-4xl md:text-7xl tracking-tight text-center font-display uppercase text-gray-100 mt-5">
              <span ref={textRef} className=""></span>
            </h1>
            <div ref={subtitleRef} className="w-full mt-10 md:mt-14 flex flex-col gap-3 md:gap-5">
              <p className="w-full text-base md:text-xl text-center text-gray-400 font-mulish font-medium">
                A Full-Stack Developer building scalable MERN applications
              </p>
              <p className="w-full text-base md:text-xl text-center text-gray-400 font-mulish font-medium">
                and teaching software engineering to the next generation of developers.
              </p>
            </div>

            <div ref={ctaRef} className="w-full flex flex-col sm:flex-row flex-center gap-4 mt-20 z-50">
              <Link to="Projects" spy={true} smooth={true} duration={1000}>
                <button className="btn-gradient">
                  View My Work
                </button>
              </Link>
              <Link to="Contact" spy={true} smooth={true} duration={1000}>
                <button className="btn-outline">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={800}
          className="cursor-pointer flex flex-col items-center gap-2 group"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-gray-500 group-hover:text-accent transition-colors duration-300">
            Scroll
          </span>
          <FaChevronDown className="text-accent animate-bounce" size={14} />
        </Link>
      </div>

      {/* backgroundImage */}
      <div
        className="w-full h-full bg-no-repeat bg-center bg-cover opacity-10 -z-10"
        style={{ backgroundImage: `url(${common})` }}
      ></div>
    </div>
  );
};

export default Hero;
