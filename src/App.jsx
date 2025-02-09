import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './page/home/Home';
import CursorTracker from './components/cursorTracker/CursorTracker';
import About from './page/About';
function App() {
  

  return (
    <>
      <CursorTracker/>
      <Navbar/>
      <Home/>
      <About/>
    </>
  )
}

export default App
