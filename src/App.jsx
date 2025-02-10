import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import CursorTracker from './components/cursorTracker/CursorTracker';
import About from './page/About';
import Projects from './page/Projects';
import Contact from './page/Contact';
function App() {
  

  return (
    <>
      {/* <CursorTracker/> */}
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
