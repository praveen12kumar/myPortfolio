import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import CursorTracker from './components/cursorTracker/CursorTracker';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Footer from './components/footer/Footer';
import {ReactLenis} from 'lenis/react';


function App() {
  

  return (
    <>
      {/* <CursorTracker/> */}
      <ReactLenis root>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </ReactLenis>
    </>
  )
}

export default App
