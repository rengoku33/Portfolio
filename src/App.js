import './App.scss';
import { useEffect, useState, useMemo } from 'react';
//import Loader from './components/loader/loader';
import Home from './container/home/index';
import About from './container/about/index';
import Contact from './container/contact/index';
import Project from './container/project/index';
import Resume from './container/resume/index';
import Skill from './container/skill/index';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import particles from './utility/particles';
import Experience from './container/experience';
import { Animate } from 'react-simple-animate';
import Loader from './components/loader/loader';
import Song from './components/song/song';


function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  //---alter particles.js in utility to change animation---
  const options = useMemo(
    () => (particles),
    [],
  );

  

  return (
    <div className='App'>
        {/* particles JS */}
        <Animate
        play
        duration={7.7}
        start={{
                    opacity: 0
                }}
                end={{
                    opacity: 1
                }}>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        </Animate>
        {/* navbar */}
        <Navbar />
        <Song />

        {/* main page content */}
        <div className='routes-container'>
          <Routes>
{/*         <Route index path='/' element={isLoading ? <Loader /> : <Home />} />  */}
            <Route index path='/' element={init? <Home />: <Loader/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/skill' element={<Skill />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/loader' element={<Loader />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
