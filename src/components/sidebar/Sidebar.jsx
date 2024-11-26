import React from "react";
import { nav } from "../../utils/constants";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";


const Sidebar = ({ setOpen }) => {

    const variants = {
        hidden:{
            opacity:0,
            y:-100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                staggerChildren:0.2,
                duration:0.5
            }
            
        }
    }

    const variants2 = {
      hidden:{
          opacity:0,
          y:-400,
      },
      visible:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
      }
    }

   

  return (
    <motion.div 
      variants={variants2} initial="hidden" whileInView="visible"
    className="fixed inset-0 z-50">
      {/* Fullscreen Overlay */}
      <div className="absolute inset-0 bg-transparent bg-opacity-50" onClick={() => setOpen(false)}/>

      {/* Sidebar */}
      <div 
        className="absolute top-0 left-0 w-full  bg-black shadow-lg rounded-br-3xl rounded-bl-3xl
                   transform transition-transform duration-300 ease-in-out translate-y-0"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <RxCross1
            className="cursor-pointer text-white text-2xl absolute top-4 right-4"
            onClick={() => setOpen(false)}
          />
        </div>

        {/* Navigation Items */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" className="flex flex-col items-center gap-6 my-16">
          {nav.map((item, index) => (
            <motion.li variants={variants} 
              key={index}
              className="text-2xl uppercase list-none text-white font-bold hover:bg-slate-700 py-3 w-full text-center transition-colors duration-300"
            >
              {item}
            </motion.li>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
