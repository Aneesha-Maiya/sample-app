import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Slider from './components/Slider';
import Main from './components/Main';
import React from 'react'
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <body>
      <Navbar
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
     />
      <Searchbar/>
      <Slider
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Main/>
    </body>
  );
}

export default App;
