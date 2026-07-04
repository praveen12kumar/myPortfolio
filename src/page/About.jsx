import { useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionLabel from "../components/sectionLabel/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bioRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Section heading slide-up
        gsap.fromTo(
          headingRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );

        // Bio block slide-up
        gsap.fromTo(
          bioRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div id="About" ref={sectionRef} className="max-w-7xl mx-auto relative px-4 md:px-6">
      <div className="w-full py-24 md:py-32 flex flex-col items-center gap-14">
        {/* ─── Section Heading ─── */}
        <div ref={headingRef} className="flex flex-col gap-4 items-center text-center">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-gray-100">
            Get to know{" "}
            <span className="gradient-text">who I am</span>
          </h2>
          <div className="accent-bar mt-1"></div>
          <p className="max-w-2xl text-gray-400 text-sm md:text-base mt-2 font-mulish leading-relaxed">
            A glimpse into my journey, interests, and the technologies I work with every day.
          </p>
        </div>

        {/* ─── Bio ─── */}
        <div ref={bioRef} className="w-full max-w-5xl flex flex-col items-center gap-6 text-center">
          <div className="text-sm leading-7 md:text-base md:leading-8 font-source-sans-3 text-gray-300 tracking-wide space-y-5">
            <p>
              I&apos;m a <strong className="text-gray-100">Full-Stack Developer</strong> with
              hands-on experience building scalable MERN applications and teaching 100+ students
              industry-relevant software engineering skills. I&apos;m strong in{" "}
              <strong className="text-gray-100">REST API design</strong>,{" "}
              <strong className="text-gray-100">state management</strong>, and{" "}
              performance optimization, with a proven ability to bridge theory and real-world
              implementation.
            </p>
            <p>
              Beyond coding, I&apos;m currently expanding into{" "}
              <strong className="text-gray-100">Generative AI</strong> and{" "}
              <strong className="text-gray-100">backend system design</strong>,
              exploring how modern systems work — from databases and distributed systems to
              application architecture and performance optimization. I&apos;m always looking for
              opportunities to build impactful products and grow as an engineer.
            </p>
            <p>
              I&apos;m open to job opportunities where I can contribute, learn, and grow. If you
              have a good opportunity that matches my skills and experience, don&apos;t hesitate
              to{" "}
              <Link
                to="Contact"
                smooth={true}
                duration={800}
                className="text-accent font-semibold cursor-pointer hover:underline decoration-accent/50 underline-offset-2"
              >
                contact me
              </Link>
              . Feel free to connect on{" "}
              <a
                href="https://www.linkedin.com/in/praveen-shakya-3a1b4123b/"
                className="text-accent font-semibold hover:underline decoration-accent/50 underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              .
            </p>
          </div>

          <Link to="Contact" smooth={true} duration={800}>
            <button className="btn-gradient mt-2 cursor-pointer">
              Let&apos;s Connect
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
