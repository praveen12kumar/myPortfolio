import { myProjects } from "../utils/constants"

function Projects(){
    console.log(myProjects)
    return(
        <div className="w-full  overflow-y-scroll">
            <div className="max-w-7xl mx-auto h-full flex flex-col items-center py-10">
                <div className="w-full flex flex-col gap-3 items-center ">
                    <h3 className="text-4xl font-bold tracking-widest uppercase">{myProjects?.title}</h3>
                    <div className="w-20 h-1 bg-sky-700 rounded-lg"></div>
                    <p className="px-4 text-center  text-gray-700 text-md md:text-lg  mt-4 font-zentry mx-auto">Here you will find some of the projects that I have worked on.</p>
                </div>

                <div className="w-full h-full  rounded-lg mt-2 relative flex flex-col  gap-16 md:gap-12 lg:gap-10">
                    <div className="w-[1px] hidden md:block h-full bg-sky-800 absolute left-1/2 -translate-x-1/2"></div>
                    {
                        myProjects?.projects?.map((project, index)=>{
                            return(
                                <div className={`w-full p-4  flex flex-col  items-center justify-between ${index%2 !== 1 ? "md:flex-row" : "md:flex-row-reverse" }`}>
                                    <div className={`w-full md:w-1/2 h-60  p-4 flex items-center justify-center relative`}>
                                        <img src={project?.image} alt="project-image" className="w-full  md:w-2/3 lg:w-1/2 h-full rounded-lg" />
                                        <div className={`w-1/3 h-[1px] hidden md:block absolute ${index%2 !== 0 ? "left-0" : "right-0" }  top-1/2 bg-sky-800 -z-10`}></div>
                                        <div className={`w-4 h-4 rounded-full hidden md:block absolute ${index%2 !== 0 ? "left-0" : "-right-4" }  top-1/2 -translate-y-1/2 -translate-x-1/2 border-2 border-orange-600 -z-10`}></div>
                                    </div>
                                    <div className="w-full md:w-1/2  h-60 flex flex-col items-start gap-4 px-8">
                                        <h3 className="text-2xl font-source-sans-3 text-sky-900 font-semibold underline underline-offset-2 ">{project?.projectName}</h3>
                                        <h5 className="text-base font-mulish text-green-900" >({project?.category})</h5>
                                        <p className="text-sm font-roboto leading-6">{project.projectDesc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default Projects