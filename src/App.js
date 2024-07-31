import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';
import "./styles/NavBar.css";
import LoadingBar from 'react-top-loading-bar';

export default function App() {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);

  const handleProgress = (newProgress) => {
    setProgress(newProgress)
  }

  const [mode, setMode] = useState('light');
  const toggleThemeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    document.body.style.backgroundColor = mode === 'light' ? '#33393e' : 'white';
  }
  return (

    <>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <div id='header' className="fixedPls">
          <Navbar mode={mode} toggleTheme={toggleThemeMode} />
        </div>

        <Routes>
          <Route exact path="/" element={<div  > <News setProgress={handleProgress} key='general' mode={mode} pageSize={pageSize} country="in" category='general' /></div>} />
          <Route exact path="/business" element={<div  > <News setProgress={handleProgress} key='business' mode={mode} pageSize={pageSize} country="in" category='business' /></div>} />
          <Route exact path="/entertainment" element={<div  > <News setProgress={handleProgress} key='entertainment' mode={mode} pageSize={pageSize} country="in" category='entertainment' /></div>} />
          <Route exact path="/general" element={<div  > <News setProgress={handleProgress} key='general' mode={mode} pageSize={pageSize} country="in" category='general' /></div>} />
          <Route exact path="/health" element={<div  > <News setProgress={handleProgress} key='health' mode={mode} pageSize={pageSize} country="in" category='health' /></div>} />
          <Route exact path="/science" element={<div  > <News setProgress={handleProgress} key='science' mode={mode} pageSize={pageSize} country="in" category='science' /></div>} />
          <Route exact path="/sports" element={<div  > <News setProgress={handleProgress} key='sports' mode={mode} pageSize={pageSize} country="in" category='sports' /></div>} />
          <Route exact path="/technology" element={<div  > <News setProgress={handleProgress} key='technology' mode={mode} pageSize={pageSize} country="in" category='technology' /></div>} />
        </Routes>
      </Router>
    </>
  );

}

// News setProgress={handleProgress}api key: Your API key is: 3e4d06ca773c43388534e7dfc42739f6
// News setProgress={handleProgress}api key of someone: apiKey=d093053d72bc40248998159804e0e67d its limit finished now
// News setProgress={handleProgress}api key has a limit so don't waste reloads...
