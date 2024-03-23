import './App.css';
import { useEffect, useState } from 'react';
import Loader from './components/loader/loader';
import Home from './components/home/home';


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
    {
      isLoading ? <Loader /> : <Home />
    }
    </div>
  );
}

export default App;
