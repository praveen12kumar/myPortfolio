import { useState, useRef } from "react";
import { myProjects, moreProjects } from "../utils/constants";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "../components/sectionLabel/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Heading fade-in
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Each project card slides up on scroll
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <div id="Projects" ref={sectionRef} className="w-full relative">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center py-10 relative">
        <div
          ref={headingRef}
          className="w-full flex flex-col gap-4 items-center text-center"
        >
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-100">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="accent-bar mt-1"></div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base mt-2 font-mulish leading-relaxed">
            Here you will find some of the projects that I have worked on.
          </p>
        </div>

        <div className="w-full h-full  rounded-lg mt-2 relative flex flex-col  gap-8 md:gap-12 lg:gap-10">
          <div className="w-[2px] hidden md:block h-full bg-white/10 absolute left-1/2 -translate-x-1/2"></div>
          {myProjects?.projects?.map((project, index) => {
            return (
              <div
                key={project?.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`w-full  flex flex-col  items-center justify-between my-10 ${
                  index % 2 !== 1 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  onMouseEnter={() => setShow(index)}
                  onMouseLeave={() => setShow(null)}
                  className={`w-full md:w-1/2 h-72  p-4 flex flex-col items-center justify-center relative`}
                >
                  <img
                    src={project?.image}
                    lazy="true"
                    alt="project-image"
                    className="w-full md:w-4/5 h-auto object-cover rounded-2xl project-img-glow z-40"
                  />

                  <div
                    className={`w-1/3 h-[1px] hidden md:block absolute ${
                      index % 2 !== 0 ? "left-0" : "right-0"
                    }  top-1/2 bg-white/10 -z-10`}
                  ></div>
                  <div
                    className={`w-5 h-5 rounded-full bg-ink z-10 hidden md:block absolute ${
                      index % 2 !== 0 ? "left-0" : "-right-5"
                    }  top-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-accent -z-10`}
                  ></div>

                  <a
                    href={project?.footerLink[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex ${
                        show === index ? "-top-12" : ""
                      } ease-jump duration-200 text-ink bg-accent cursor-pointer sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}
                    >
                      {project?.projectName}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-external-link"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="w-full md:w-1/2  h-80 flex flex-col items-start gap-3 px-8 ">
                  <div className="w-full flex flex-row items-center gap-2">
                    <h3 className="text-2xl font-source-sans-3 text-gray-100 font-semibold underline underline-offset-2 decoration-accent/50">
                      {project?.projectName}
                    </h3>
                    <h5 className="text-base font-mulish text-accent">
                      ({project?.category})
                    </h5>
                  </div>
                  <p className="text-sm font-roboto text-gray-400 leading-6 line-clamp-6 md:line-clamp-none">
                    {project.projectDesc}
                  </p>
                  <div className="w-full flex flex-wrap gap-2.5">
                    {project?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="skill-chip !px-3 !py-1 text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-full flex flex-row items-center gap-4 text-white mt-4">
                    <a
                      className="px-6 py-2.5 bg-surface hover:bg-white/10 border border-white/10 transition-all duration-300 ease-out font-mulish font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5"
                      href={project?.footerLink[0]?.url}
                      target="_blank"
                    >
                      <FaGithub className="w-4 h-4 " />
                      Code
                    </a>

                    <a
                      className="btn-gradient !py-2.5 px-6 flex items-center justify-center gap-2"
                      href={project?.footerLink[1]?.url}
                      target="_blank"
                    >
                      <FaExternalLinkAlt className="w-3 h-3 " />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-center mt-6 mb-4">
        <button
          onClick={() => navigate("/projects")}
          className="group flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-white/10 bg-surface/60 backdrop-blur-sm font-mulish font-semibold text-sm text-gray-200 transition-all duration-300 ease-out hover:border-accent/50 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/10"
        >
          Explore all projects
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-ink transition-transform duration-300 ease-out group-hover:translate-x-1">
            <FaArrowRight className="w-3.5 h-3.5" />
          </span>
        </button>
      </div>
    </div>
  );
}
export default Projects;
