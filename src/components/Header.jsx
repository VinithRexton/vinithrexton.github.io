import React from 'react';

const Header = () => (
  <header tabIndex={-1} id="about" aria-label="About Vinith Rexton P">
    <h1>Vinith Rexton P</h1>
    <p>UI Developer</p>
    <p>Chennai, TN India</p>
    <p>📞 <a href="tel:+919876543210" aria-label="Phone Number">+91 98765 43210</a></p>
    <p>
      LinkedIn:{' '}
      <a
        href="https://www.linkedin.com/in/vinith-rexton-p"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/vinith-rexton-p
      </a>
    </p>
  </header>
);

export default Header;
