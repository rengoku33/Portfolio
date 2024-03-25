import './App.css';
import { useEffect, useState, useMemo } from 'react';
import Loader from './components/loader/loader';
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


function App() {
  const [init, setInit] = useState(false);
  console.log(init);

  // useState for pre-loader
  const[isLoading, setIsLoading] = useState(true);


  // useEffect hook to deliberality load the page later (for preloader)
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3300);
    } 

    fakeDataFetch();
  }, []);
  
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

  if (!isLoading) {
    return (
      <div>
      {/* particles JS */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />

    {/* navbar */}
    <Navbar />

    {/* main page content */}
    <Routes>
      <Route index path='/' element={isLoading ? <Loader /> : <Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/project' element={<Project />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/skill' element={<Skill />} />
    </Routes>
    </div>
    );
  }

  return (
    <div>
    <Routes>
      <Route index path='/' element={isLoading ? <Loader /> : <Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/project' element={<Project />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/skill' element={<Skill />} />
    </Routes>
    </div>
  );
}

export default App;
