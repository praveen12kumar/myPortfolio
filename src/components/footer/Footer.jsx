
import { socialMediaLinks } from "../../utils/constants";
function Footer(){
    const year = new Date().getFullYear();
    
    return(
        <div className="w-full h-90 flex flex-col items-center gap-10 py-10">
            <p className="font-source-sans-3 flex items-center gap-4">Praveen Kumar <span className="text-lg">©</span> {year}</p>
            <div className="w-1/3 flex flex-row items-center justify-center">
            {
                socialMediaLinks?.map((link, index)=>{
                    return(
                        <a href={link.href} key={index} target="_blank" rel='noopener noreferrer' className="w-full h-full cursor-pointer flex items-center justify-center">
                            <link.icon className='w-7 h-7 text-blue  hover:scale-125 hover:transition-all duration-300' />
                        </a>
                    )
                })
            }
            </div>
        </div>
    )
};

export default Footer;