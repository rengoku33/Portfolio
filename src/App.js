import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Loader from './components/loader/loader';

function App() {

  // useState for pre-loader
  const[isLoading, setIsLoading] = useState(true);


  // async method to deliberality load the page later (for preloader)
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
      isLoading ? <Loader /> : (<div className="App"><img src={logo} className="App-logo" alt="logo" /></div>)
    }
    </div>
  );
}

export default App;
