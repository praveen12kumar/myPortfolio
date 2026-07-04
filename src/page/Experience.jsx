import { useRef } from "react";
import { workExperiences } from "../utils/constants";
import { FaBriefcase } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "../components/sectionLabel/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  if (!workExperiences?.display) return null;

  return (
    <div id="Experience" ref={sectionRef} className="max-w-7xl mx-auto relative px-4 md:px-6">
      <div className="w-full py-24 md:py-32 flex flex-col items-center gap-14">
        <div ref={headingRef} className="flex flex-col gap-4 items-center text-center">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-100">
            Where I&apos;ve <span className="gradient-text">made an impact</span>
          </h2>
          <div className="accent-bar mt-1"></div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base mt-2 font-mulish leading-relaxed">
            My professional journey building software and helping others learn to do the same.
          </p>
        </div>

        <div className="w-full flex flex-col gap-8">
          {workExperiences?.experiences?.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl flex-center bg-accent">
                  <FaBriefcase className="w-6 h-6 text-ink" />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h3 className="text-xl md:text-2xl font-display uppercase text-gray-100">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent font-mulish whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm md:text-base font-mulish font-semibold text-gray-300">
                  {exp.company}
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {exp.descBullets?.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className="text-sm leading-6 font-source-sans-3 text-gray-300 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-accent"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
