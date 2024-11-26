import { FaHtml5, FaNpm, FaCss3, FaReact, FaNode, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress  } from "react-icons/si";

const nav = ["Home", "About", "Projects", "Contact"]



const greeting = {
    username: "Praveen Kumar",
    title: "Hi all, I'm Praveen",
    subTitle:  "Enthusiastic and dedicated web developer with a strong foundation in the MERN (MongoDB, Express, React NodeJs) stack, seeking an entry-level position to contribute my skills and passion for creating innovative web applications. With a solid academic background and hands-on experience through various projects.",
    resumeLink:"https://drive.google.com/file/d/1o_BT16i_dZ9jdJ9g9LaCIuYsip2D-Q_f/view?usp=sharing"
};

const socialMediaLinks = {
    github: "https://github.com/praveen12kumar",
    linkedin: "https://www.linkedin.com/in/praveen-kumar-88644bbb",
    twitter: "https://twitter.com/praveenshakya20",
    gmail:"praveenshakya1@gmail.com",
    facebook: "https://www.facebook.com/praveen.shakya.792",
    instagram:"https://www.instagram.com/kumarpraveen1/",
    display:true,
}

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
    title: "My Recent Work",
    seemore:"Want to see more Click here",
    display: true, // Set false to hide this section, defaults to true
    projects: [
      {
        image: "https://i.ibb.co/GPnsWc4/ecom1.jpg",
        projectName: "Clothverse",
        projectDesc:
          "A Full-stack application using React for the Front-end and NodeJs with Express for the Backend search filter mechanism, a user-friendly shopping  cart, and a wishlist feature to improve user engagement and experience.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://eshop-wk92.onrender.com/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/Clothverse"
          }
          //  you can add extra buttons here.
        ]
      },
      {
        image:"https://i.ibb.co/mCwhBXS/socially.jpg",
        projectName: "Socially",
        projectDesc: "Socially is a dynamic social media application built using React. The platform offers a seamless user experience with features such as Quick Login, Profile Management, News Feed, and Follow Requests. The app also utilizes JWT (JSON Web Token) for secure, token-based authentication, ensuring user data and sessions are protected.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://socially-media.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/socially"
          }
        ]
      },
      {
        image:"https://i.ibb.co/k1DVgpg/component.png",
        projectName: "CSS Component Library",
        projectDesc:
          "A small app containing different components with their documentation in React JS.",
        footerLink: [
          {
            name: "Visit Website",
            url: "https://ui-component-css.netlify.app/"
          },
          {
            name: "View Source Code",
            url: "https://github.com/praveen12kumar/component-lib"
          }
        ]
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