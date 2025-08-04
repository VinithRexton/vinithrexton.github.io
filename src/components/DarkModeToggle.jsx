import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      aria-pressed={darkMode}
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        background: 'none',
        border: '2px solid currentColor',
        borderRadius: '0.5rem',
        padding: '0.3rem 0.7rem',
        cursor: 'pointer',
        zIndex: 50,
        fontWeight: '600',
        color: 'inherit'
      }}
    >
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle;
