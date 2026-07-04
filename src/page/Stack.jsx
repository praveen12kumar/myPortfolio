import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "../components/sectionLabel/SectionLabel";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiCplusplus,
  SiPython,
  SiGo,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const STACK = {
  Languages: [
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  ],
  Frontend: [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  ],
  Backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  ],
  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  ],
};

function Stack() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const rowsRef = useRef([]);

  useGSAP(
    () => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      rowsRef.current.forEach((row) => {
        if (!row) return;
        const items = row.querySelectorAll(".stack-item");
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      id="Stack"
      ref={sectionRef}
      className="max-w-7xl mx-auto relative px-4 md:px-6"
    >
      <div className="w-full py-24 md:py-32 flex flex-col items-center gap-14">
        <div
          ref={headingRef}
          className="flex flex-col gap-4 items-center text-center"
        >
          <SectionLabel>My Stack</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-100">
            Tools I <span className="gradient-text">build with</span>
          </h2>
          <div className="accent-bar mt-1"></div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base mt-2 font-mulish leading-relaxed">
            The languages, frameworks, and tools I reach for day to day.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col gap-14 md:gap-16">
          {Object.entries(STACK).map(([category, items]) => (
            <div
              key={category}
              ref={(el) =>
                (rowsRef.current[Object.keys(STACK).indexOf(category)] = el)
              }
              className="w-full grid sm:grid-cols-12 gap-8 md:gap-20 lg:gap-36"
            >
              <p className="sm:col-span-2 text-4xl md:text-5xl font-display uppercase leading-none text-gray-600">
                {category}
              </p>
              <div className="sm:col-span-10 flex flex-wrap gap-x-16 gap-y-6">
                {items.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="stack-item flex items-center gap-3 text-gray-200 hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      style={{ color }}
                    />
                    <span className="text-lg md:text-xl font-mulish">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
