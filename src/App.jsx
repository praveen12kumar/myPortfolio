import './App.css'

import {ReactLenis} from 'lenis/react';
import {Routes, Route} from "react-router-dom";
import MoreProjects from './page/MoreProjects';
import Home from './page/home/Home';
import ScatterDots from './components/decor/ScatterDots';
import ScrollProgress from './components/decor/ScrollProgress';
import EmailRail from './components/decor/EmailRail';

function App() {


  return (
    <>
      <ScatterDots/>
      <ScrollProgress/>
      <EmailRail/>
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
