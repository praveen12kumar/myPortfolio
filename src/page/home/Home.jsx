import Hero from "../Hero";
import Navbar from "../../components/navbar/Navbar";
import About from "../About";
import Stack from "../Stack";
import Experience from "../Experience";
import Projects from "../Projects";
import Contact from "../Contact";
import Footer from "../../components/footer/Footer";


const Home = () => {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Stack/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
