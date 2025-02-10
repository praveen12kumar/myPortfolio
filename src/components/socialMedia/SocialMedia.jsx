import React from 'react'
import { socialMediaLinks } from '../../utils/constants';




const SocialMedia = ({className}) => {
  return (
    <div className="w-full h-full rounded-md bg-slate  z-40">
    
        <div className={`w-full h-full  flex ${className} items-center justify-center `}>
            {
                socialMediaLinks.map((link, index) => (
                    <a href={link.href} key={index} target="_blank" rel='noopener noreferrer' className="w-full h-full cursor-pointer flex items-center justify-center">
                        <link.icon className='w-7 h-7 text-blue  hover:scale-125 hover:transition-all duration-300' />
                    </a>
                ))
            }
    </div>
    </div>
  )
}

export default SocialMedia