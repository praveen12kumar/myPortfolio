import './App.css'
import CursorTracker from './components/cursorTracker/CursorTracker';

import {ReactLenis} from 'lenis/react';
import {Routes, Route} from "react-router-dom";
import MoreProjects from './page/MoreProjects';
import Home from './page/home/Home';

function App() {
  

  return (
    <>
      {/* <CursorTracker/> */}
      <ReactLenis root>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<MoreProjects/>} />
      </Routes>


      </ReactLenis>



    </>
  )
}

export default App
