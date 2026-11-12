import React from 'react';
import portBanner from '/src/assets/images/port_banner.png';
import SocialIcons from "./SocialIcons";


const Header = () => (
  <header tabIndex={-1} id="about" aria-label="About Vinith Rexton P" className="header">
      <picture className="header__background" aria-hidden="true" tabIndex={-1}>
       <source srcSet={portBanner} type="image/png" />
        <img src={portBanner} alt="" aria-hidden="true" tabIndex={-1} className="header__img" />
        <img
          src="/images/bg-large.jpg"
          alt=""
          aria-hidden="true"
          tabIndex={-1}
          className="header__img"
        />
      </picture>

      <div className="header__gradient" aria-hidden="true" tabIndex={-1} />

      <div className="banner">
        <p>Hi, my name is</p>
        <h1>Vinith Rexton P</h1>
        <p>I'm a passionate Frontend Developer from India</p>
        <SocialIcons />
      </div>
    </header>
);

export default Header;
