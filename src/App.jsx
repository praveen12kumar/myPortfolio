import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import CursorTracker from './components/cursorTracker/CursorTracker';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
import Footer from './components/footer/Footer';
function App() {
  

  return (
    <>
      {/* <CursorTracker/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
