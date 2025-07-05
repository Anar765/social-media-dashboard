import { Analytics} from '@vercel/analytics/react'
import Header from './components/Header';
import Main from './components/Main';
import './style.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  }
  
  useEffect(() => {
    const body = document.querySelector('body');
    darkMode ? body.classList.add('light') : body.classList.remove('light');
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} onToggleMode={toggleMode} />
      <Main darkMode={darkMode} />
      <Analytics />
    </>
  )
}

export default App
