import { useEffect, useState } from 'react';
import Navbar from './components/portfolio/Navbar';
import Hero from './components/portfolio/Hero';
import ExpertisePreview from './components/portfolio/ExpertisePreview';
import EnterpriseWork from './components/portfolio/EnterpriseWork';
import PersonalProjects from './components/portfolio/PersonalProjects';
import './styles/portfolio.scss';

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'light' ? 'dark' : 'light');

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <ExpertisePreview />
        <EnterpriseWork />
        <PersonalProjects />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Vinith Rexton P.</span>
        <span>Designed with intention. Built with care.</span>
      </footer>
    </div>
  );
}

export default App;
