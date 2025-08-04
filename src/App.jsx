import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Summary from './components/Summary';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  // Dark mode state with persistence in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || false;
  });

  // Effect to add/remove dark mode class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container" tabIndex={-1}>
        <Header />
        <Summary />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
      </main>

      <footer>
        © {new Date().getFullYear()} Vinith Rexton P
      </footer>
    </>
  );
}

export default App;
