import { li } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        carlo:['carlo', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
          light:'ECDFCC',
          dark:'1E201E',
          blue:'#3340AF',
          slate:'#E7E7E7',
          background1:'#FAFAFA',
          background2:'#FFFFFF',
          
        
      }
    },
  },
  plugins: [],
}