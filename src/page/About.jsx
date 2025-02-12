import { Link } from "react-router-dom";

function About(){

    return(
        <div id="About" className="max-w-7xl mx-auto relative">
            <div className="w-full h-full py-20 flex flex-col items-center gap-10">
                <div className="flex flex-col gap-3 items-center justify-center">
                    <h3 className="text-4xl font-bold tracking-widest">ABOUT ME</h3>
                    <div className="w-20 h-1 bg-sky-700 rounded-lg"></div>
                    <p className="max-w-4xl px-4 text-center  text-gray-700 text-md md:text-lg  mt-6 font-zentry mx-auto">Here you will find more information about me, What I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 px-4">
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                        <h3 className="text-xl md:text-2xl font-bold font-circular-web">Get to know me!</h3>
                        <div className="text-sm leading-6 md:text-base md:leading-8 font-source-sans-3 text-gray-700 tracking-wide">
                        <p>I'm a Frontend Focused Web Developer building and managing Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people in the Dev Community. Feel free to connect or follow me on my <a href="https://www.linkedin.com/in/praveen-shakya-3a1b4123b/" className="text-sky-800 font-bold">LinkedIn</a>.</p>
                        <p>I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, then don't hesitate to <b>contact</b> me.</p>
                    </div>
                    <button className="btn btn-wide text-lg text-white font-zentry tracking-wide btn-info cursor-pointer z-50">Contact</button>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 z-50">
                        <div className="text-xl md:text-2xl font-bold font-circular-web text-zinc-800">My Skills</div>
                        <div className="w-full flex flex-wrap items-start gap-5 md:gap-6 lg:gap-8">
                        <button className="btn btn-outline cursor-text">C</button>
                        <button className="btn btn-outline cursor-text">C++</button>
                        <button className="btn btn-outline cursor-text">HTML</button>
                        <button className="btn btn-outline cursor-text">CSS</button>
                        <button className="btn btn-outline cursor-text">JavaScript</button>
                        <button className="btn btn-outline cursor-text">React</button>
                        <button className="btn btn-outline cursor-text">Node</button>
                        <button className="btn btn-outline cursor-text">Express</button>
                        <button className="btn btn-outline cursor-text">MongoDB</button>
                        <button className="btn btn-outline cursor-text">TypeScript</button>
                        <button className="btn btn-outline cursor-text">NextJs</button>
                        <button className="btn btn-outline cursor-text">Git</button>
                        <button className="btn btn-outline cursor-text">GitHub</button>
                        <button className="btn btn-outline cursor-text">Redux Toolkit</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
    
};

export default About;