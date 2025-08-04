import React from 'react';

const Navbar = () => {
  // Smooth scroll to sections with accessibility in mind
  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Primary navigation">
      <ul>
        {['about', 'work', 'education', 'skills', 'projects'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => handleClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
