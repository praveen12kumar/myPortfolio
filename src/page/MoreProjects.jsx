import { useState } from "react";
import { myProjects } from "../utils/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function MoreProjects(){
    const [show, setShow] = useState(null);


    return(
        <div id="Projects" className="w-full relative">
      <div className="max-w-7xl mx-auto h-full flex flex-col items-center py-10 relative">
        <div className="w-full flex flex-col gap-3 items-center ">
          <h3 className="text-4xl font-bold tracking-widest uppercase">
            {myProjects?.title}
          </h3>
          <div className="w-20 h-1 bg-sky-700 rounded-lg"></div>
          <p className="px-4 text-center  text-gray-700 text-md md:text-lg  mt-4 font-mulish mx-auto">
            Here you will find some of the projects that I have worked on.
          </p>
        </div>

        <div className="w-full h-full  rounded-lg mt-2 relative flex flex-col  gap-8 md:gap-12 lg:gap-10">
          <div className="w-[2px] hidden md:block h-full bg-sky-800 absolute left-1/2 -translate-x-1/2"></div>
          {myProjects?.projects?.map((project, index) => {
            return (
              <div key={project?.id}
                className={`w-full  flex flex-col  items-center justify-between ${
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
                    alt="project-image"
                    className={`w-full md:w-2/3 h-full shadow-lg rounded-lg cursor-pointer ${
                      show === index ? "md:scale-110" : ""
                    } hover:transition-all duration-300 z-40`}
                    onClick={open}
                  />

                  <div
                    className={`w-1/3 h-[1px] hidden md:block absolute ${
                      index % 2 !== 0 ? "left-0" : "right-0"
                    }  top-1/2 bg-sky-800 -z-10`}
                  ></div>
                  <div
                    className={`w-5 h-5 rounded-full bg-white z-10 hidden md:block absolute ${
                      index % 2 !== 0 ? "left-0" : "-right-5"
                    }  top-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-orange-600 -z-10`}
                  ></div>

                  <a
                    href={project?.footerLink[0]?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className={`flex ${
                        show === index ? "-top-12" : ""
                      } ease-jump duration-200 text-white bg-[#394ca7] cursor-pointer sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2`}
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
                  <h3 className="text-2xl font-source-sans-3 text-sky-900 font-semibold underline underline-offset-2 ">
                    {project?.projectName}
                  </h3>
                  <h5 className="text-base font-mulish text-green-900">
                    ({project?.category})
                  </h5>
                  </div>
                  <p className="text-sm font-roboto leading-6 line-clamp-5">
                    {project.projectDesc}
                  </p>
                  <div className="w-full flex flex-wrap gap-2">
                    {
                        project?.tags?.map((tag, index) => (<span key={index} className="text-sm font-mulish border  border-gray-300 px-2 py-1 rounded-2xl font-semibold text-sky-900">#{tag}</span>))
                    }
                  </div>

                  <div className="w-full flex flex-row items-center gap-4 text-white  ">
                    <a  className="w-32 bg-sky-800 hover:bg-sky-700 transition-all duration-300 ease-in-out font-roboto px-4 py-1 rounded-2xl flex items-center justify-center gap-2 "
                        href={project?.footerLink[1]?.url} ><FaGithub className="w-4 h-4 "/>
                        Github</a>
                    
                    <a className="w-32 bg-orange-800 hover:bg-orange-700 transition-all duration-300 ease-in-out font-roboto  text-white px-4 py-1 rounded-2xl flex items-center justify-center gap-2 truncate text-ellipsis"
                    href={project?.footerLink[1]?.url} ><FaExternalLinkAlt className="w-3 h-3 "/>Live</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    )
};

export default MoreProjects;