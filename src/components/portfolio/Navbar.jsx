import { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Client Work', href: '#work' },
  { label: 'Personal', href: '#personal-projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Vinith Rexton home">
          VR<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
          <span className={`menu-toggle__icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>

        <div id="primary-menu" className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}><a href={item.href} onClick={closeMenu}>{item.label}</a></li>
            ))}
          </ul>
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
            <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
            <span>{theme === 'light' ? 'Dark' : 'Light'} mode</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
