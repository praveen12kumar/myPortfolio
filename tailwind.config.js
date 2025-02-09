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
        zentry:['zentry', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        general: ['general', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
        'mulish': ['mulish', 'sans-serif'],
        'source-sans-3': ['source-sans-3', 'sans-serif'],
      },
      colors: {
          light:'ECDFCC',
          dark:'1E201E',
          blue:'#3340AF',
          slate:'#E7E7E7',
          darkSlate:'rgb(15 23 42)',
          background1:'#FAFAFA',
          background2:'#FFFFFF',
      },
      daisyui:{
        themes:['light']
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '1px white',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require("daisyui"),
  ],
}