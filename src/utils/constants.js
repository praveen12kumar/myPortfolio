import { FaHtml5, FaNpm, FaCss3, FaReact, FaNode, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress  } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { title } from "framer-motion/client";


const nav = ["Home", "About", "Projects", "Contact"]



const greeting = {
    username: "Praveen Kumar",
    title: "Hi all, I'm Praveen",
    subTitle:  "Enthusiastic and dedicated web developer with a strong foundation in the MERN (MongoDB, Express, React NodeJs) stack, seeking an entry-level position to contribute my skills and passion for creating innovative web applications. With a solid academic background and hands-on experience through various projects.",
    resumeLink:"https://drive.google.com/file/d/1o_BT16i_dZ9jdJ9g9LaCIuYsip2D-Q_f/view?usp=sharing"
};

const socialMediaLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/praveen12kumar",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/praveen-shakya-3a1b4123b/",
  },
  {
    icon: FaSquareXTwitter,
    href: "https://twitter.com/praveen_shakya",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/praveen.shakya.1/",
  },
  {
    icon: FaInstagramSquare,
    href: "https://www.instagram.com/praveen_shakya/",
  },
];


// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [],
  
    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  
    softwareSkills: [
      {
        label: "html-5",
        icon: FaHtml5
      },
      { 
        label: "css3",
        icon: FaCss3
      },
      {
        label: "JavaScript",
        icon:SiJavascript
      },
      {
        label: "reactjs",
        icon: FaReact,
      },
      {
        label: "Node",
        icon:FaNode
      },
      {
        label: "Npm",
        icon:FaNpm
      },
      {
        label: "Mongo-database",
        icon:FaDatabase
      },
      {
        label: "Github",
        icon:FaGithub
      },
     
      
    ],
    display: true // Set false to hide this section, defaults to true
  };

  const eductionInfo = {
    display: true,
    college:[
      {
        collegeName:"Maulana Azad National Institute of Technology, Bhopal",
        logo: "https://i.ibb.co/5GgFL9G/manit.jpg",
        subTitle: "Master in Technology in Computer Networking",
        duration:"July-2019 - August-2021",
      },
      {
        collegeName:"ABES Engineering College, Ghaziabad",
        logo: "https://i.ibb.co/tHqw3wR/abes.jpg",
        subTitle:"Bachelor of Technology in Information Technology",
        duration: "July-2013 - July-2017"
      }
    ]
  };

  const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experiences: [
      {
        role: "Web Development Student",
        company: "neoG Camp",
        companylogo: "https://i.ibb.co/T0dk7nJ/neog.png",
        date: "Feb 2023 – Present",
        desc: "A part of web development (MERN stack) bootcamp",
        descBullets: [
          "Made major projects like e-commerce, social media using ReactJS.",
          "Learnt various technologies like HTML, CSS, JavaScript, React, NodeJS, MongoDB, ExpressJS, TypeScript and Redux."
        ]
      },
    ]
  };

  //https://i.ibb.co/tMCgjNP/social-media.png

  const myProjects = {
    title: "Projects",
    description:"Here you will find some of the projects that I have worked on.",
    display: true, // Set false to hide this section, defaults to true
    projects: [
      {
        id:0,
        image: "https://i.ibb.co/GQzgGDMn/spotify.png",
        projectName: "Spotify Clone",
        category:"Music Player",
        projectDesc:"A full-stack application for managing songs and albums, featuring admin controls for adding, deleting, and organizing music collections. Built with React(Vite), Redux Toolkit, Node.js (Express), and MongoDB, ensuring a scalable and high-performance experience. Optimized with lazy loading, caching, and efficient API handling to enhance speed and performance.",

         footerLink: [
          {
            name: "github",
            url: "https://github.com/praveen12kumar/spotify-app"
          },
          {
            name: "Live",
            url: "https://spotify-app-pkha.onrender.com/"
          }
          //  you can add extra buttons here.
        ],
        tags:["nodejs","reactjs","expressjs","mongodb", "tailwind","redux-toolkit", "react-howler", "react-icons", "nodemailer", "passport-js" ]
      },
      {
        id:1,
        image: "https://i.ibb.co/GPnsWc4/ecom1.jpg",
        projectName: "Clothverse",
        category:"Ecommerce",
        projectDesc:"Developed a full-stack web application using React for the Front- end and Node.js with Express for the Back-end, ensuring seamless integration between client and server. Integrated advanced frontend functionalities including a robust search filter mechanism, a user-friendly shopping cart, and a wishlist feature to improve user engagement and experience. Implemented RESTful APIs to handle data flow between the frontend and backend, with MongoDB/MySQL for data persistence and management. Integrated user authentication and authorization (e.g., JWT), ensuring secure access and user-specific functionalities.",
        footerLink: [
          {
            name: "github",
            url: "https://github.com/praveen12kumar/Clothverse"
          },
          {
            name: "Live",
            url: " https://eshop-wk92.onrender.com/"
          }
          //  you can add extra buttons here.
        ],
        tags:["nodejs","reactjs","expressjs","mongodb", "sass", "framer", "redux-toolkit","react-icons", "nodemailer" ]
      },
      {
        id:2,
        image:"https://i.ibb.co/mCwhBXS/socially.jpg",
        projectName: "Socially",
        category:"Social Media",
        projectDesc: "Social Circle is a Social media Application. Tech-Stack: HTML, CSS, JavaScript, React. Implemented features like Quick Login, Profile, News Feed, follow requests, etc. User-specific features like Edit Profile, Like post, Delete post, Bookmark posts, and Separate Personalised feed with sort. Implemented token-based authentication using JWT. Expansion aspects for adding comments.",
        footerLink: [
          {
            name: "github",
            url: "https://github.com/praveen12kumar/socially"
          },
          {
            name: "live",
            url: "https://socially-media.netlify.app/"
          }
        ],
        tags:["nodejs","reactjs","expressjs","mongodb", "css", "context-api","react-icons",]
      },
    ]
  }



export const moreProjects = {
  title: "Projects",
  projects:[
    {
      id:0,
      image:"https://i.ibb.co/5X2wj1jr/apnapustkalaya.png",
      projectName:"Apna Pustkalaya",
      category:"Ecommerce",
      projectDesc:"Developed the frontend for a book e-commerce platform, integrating seamlessly with an existing backend. The app allows users to browse, add books to cart or wishlist, and sort books by Fiction, Non-Fiction, or Self-Help categories. Built with React, Redux Toolkit, and Tailwind CSS, ensuring a smooth, responsive, and optimized user experience",
      footerLink:[
        {
          name:"github",
          url:"https://github.com/praveen12kumar/apna-pustkalaya"
        },
        {
          name:"live",
          url:"https://apna-pustakalaya.netlify.app/"
        }
      ],
      tags:["nodejs","reactjs","expressjs","mongodb", "css", "context-api","react-icons",]
    },
    {
      id:1,
      image:"https://i.ibb.co/k1DVgpg/component.png",
      projectName: "CSS Component Library",
      category:"Library",
      projectDesc:
        "A small app containing different components with their documentation in React JS.",
      footerLink: [
        {
          name: "github",
          url: "https://github.com/praveen12kumar/component-lib"
        },
        {
          name: "live",
          url: "https://ui-component-css.netlify.app/" 
        }
      ],
      tags:["nodejs","reactjs","expressjs","mongodb", "css", "context-api","react-icons",]
    },
    {
      id:2,
      image:"https://i.ibb.co/gLrz9J7R/weather.png",
      projectName: "Weather App",
      category:"Weather",
      projectDesc:
        "Built a Weather Forecast App using TypeScript and the OpenWeather API, providing real-time weather updates. Users can search for any city, view daily and weekly forecasts, and switch between Celsius and Fahrenheit. The app offers essential weather details in a clean and user-friendly interface. Implemented Redux Toolkit for efficient state management, ensuring smooth performance and scalability.",
      footerLink: [
        {
          name:"github",
          url:"https://github.com/praveen12kumar/weather-app"
        },
        {
          name:"live",
          url:"https://where-weather.netlify.app/"
        }
      ],
      tags:["typescript","tailwind","daisyUI","react-tookit","axios","react-icons","react-redux"] 
    },
    {
      id:3,
      image:"https://i.ibb.co/zWQPPm6n/coingecko.png",
      projectName: "CoinGecko",
      category:"Trading",
      projectDesc:
        "Developed a Crypto Trading Dashboard using React and TanStack React Query for efficient API fetching and state management. The app provides real-time cryptocurrency data from the CoinGecko API, allowing users to search for coins, view them in card or row format, and seamlessly switch between views. Each coin has a detailed page featuring a 30-day price trend graph, with customizable parameters like price, market cap, and volume. The app is optimized for performance and responsiveness, ensuring smooth navigation and real-time updates.",
      footerLink: [
        {
          name:"github",
          url:"https://github.com/praveen12kumar/Coingeko"
        },
        {
          name:"live",
          url:"https://coingecko1.netlify.app/"
        }
      ],
      tags:["ReactJs","tailwind","daisyUI","tanstack/react-query","axios","chart.js","react-icons","react-redux"] 
    },
    {
      id:4,
      image:"https://i.ibb.co/7xHSMQ9v/pokemon.png",
      projectName: "Pokemon App",
      category:"Pokedex",
      projectDesc:
        "Developed a web application using the PokéAPI, built with React and Context API for efficient state management. The app allows users to search for Pokémon, view detailed stats, abilities, and evolutions. It features a clean UI with interactive Pokémon cards and seamless navigation. Implemented react-hot-toast for real-time notifications, enhancing user experience. Optimized API calls for performance, ensuring smooth data fetching and rendering.",
      footerLink: [
        {
          name:"github",
          url:"https://github.com/praveen12kumar/pokemon_pokedex"
        },
        {
          name:"live",
          url:"https://pika-pika-pikachu.netlify.app/"
        }
      ],
      tags:["ReactJs","tailwind",,"tanstack/react-query","axios","chart.js","react-icons","react-redux"] 
    },
    {
      id:5,
      image:"https://i.ibb.co/Mynr1G9B/ochi-design.png",
      projectName: "Ochi-design",
      category:"Clone",
      projectDesc:"Developed a high-performance Ochi Design clone using React, Tailwind CSS, and GSAP for smooth animations and engaging UI interactions. Implemented advanced scroll-based and element-based animations to replicate the original design's fluid experience. Focused on responsive design and performance optimization to ensure a seamless user experience across all devices.",
      footerLink: [
        {
          name:"github",
          url:"https://github.com/praveen12kumar/Ochi-design"
        },
        {
          name:"live",
          url:"https://ochi1-design.netlify.app/"
        }
      ],
      tags:["ReactJs","Javascript", "tailwind", "gsap", "react-icons", ] 
    },
  ]
}



  const contactInfo = {
    title: "Contact Me ☎️",
    subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+91-8130221540",
    email_address: "praveenshakya1@gmail.com"
  };




export {
    nav,
    greeting,
    socialMediaLinks,
    skillsSection,
    eductionInfo,
    workExperiences,
    contactInfo,
    myProjects,
}