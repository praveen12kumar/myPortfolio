import { contactInfo } from "../utils/constants";
import contact from "../assets/images/contact.json";
import Lottie from "lottie-react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "../components/sectionLabel/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const lottieRef = useRef(null);
  const formRef = useRef(null);

  useGSAP(() => {
    // Heading fade-in
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    // Lottie animation slides in from left
    gsap.from(lottieRef.current, {
      scrollTrigger: {
        trigger: lottieRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      x: -60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    // Form slides in from right
    gsap.from(formRef.current, {
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      x: 60,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  return (
    <div id="Contact" ref={sectionRef} className="w-full flex items-center justify-center">
      <div className="max-w-7xl h-full mx-auto flex flex-col items-center py-10">
        <div ref={headingRef} className="w-full flex flex-col gap-4 items-center text-center p-4">
          <SectionLabel>Get in touch</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-100">
            {contactInfo?.title}
          </h2>
          <div className="accent-bar mt-1"></div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base mt-2 font-mulish leading-relaxed">
            {contactInfo?.subtitle}
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <div ref={lottieRef} className="w-2/3 md:w-1/2  flex items-center justify-center">
            <Lottie animationData={contact} height={400} width={400} />
          </div>
          <div ref={formRef} className="w-full h-full md:w-1/2 flex items-center  justify-center">
            <form
              action="https://getform.io/f/aejrymjb"
              method="POST"
              className="w-4/5 h-full flex flex-col items-center justify-center"
            >
              <div className="w-full md:w-2/3 h-24 flex flex-col items-start gap-1">
                <label
                  className="flex items-center gap-2 font-zentry text-gray-200"
                  htmlFor="name"
                >
                  <FaUser className="w-5 h-5 text-accent" />
                  Name
                </label>
                <input
                  type="text"
                  className="w-full input cursor-pointer border border-white/15 text-gray-200 focus:border-accent px-3 py-2 rounded-md bg-transparent outline-none transition-colors"
                  placeholder="Enter name"
                  value={formValues.name}
                  name="name"
                  onChange={handleChangeInput}
                />
              </div>

              <div className="w-full  md:w-2/3 h-24 flex flex-col items-start gap-1">
                <label
                  className="flex items-center gap-2 font-zentry text-gray-200"
                  htmlFor="email"
                >
                  <MdEmail className="w-6 h-6 text-accent" />
                  Email
                </label>
                <input
                  type="text"
                  className="w-full input border cursor-pointer border-white/15 text-gray-200 focus:border-accent px-3 py-2 rounded-md bg-transparent outline-none transition-colors"
                  placeholder="Enter email"
                  value={formValues.email}
                  name="email"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="w-full md:w-2/3 h-32 flex flex-col items-start gap-1">
                <label
                  className="flex items-center gap-2 font-zentry text-gray-200"
                  htmlFor="message"
                >
                  <FaMessage className="w-5 h-5 text-accent" />
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={20}
                  placeholder="Hi,"
                  value={formValues.message}
                  onChange={handleChangeInput}
                  className="w-full px-2 pt-2 bg-transparent cursor-pointer border border-white/15 text-gray-200 focus:border-accent rounded-lg outline-none resize-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-gradient w-full md:w-2/3 mt-4 flex items-center justify-center gap-2"
              >
                <IoIosSend className="w-5 h-5 text-white" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
