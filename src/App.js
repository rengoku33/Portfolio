import './App.css';
import { useEffect, useState } from 'react';
import Loader from './components/loader/loader';
import Home from './container/home/index';
import About from './container/about/index';
import Contact from './container/contact/index';
import Project from './container/project/index';
import Resume from './container/resume/index';
import Skill from './container/skill/index';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {

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
  }, [])

  return (
    <div>
    {/* particles JS */}

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

export default App;
