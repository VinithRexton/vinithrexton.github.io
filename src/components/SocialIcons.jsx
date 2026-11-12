import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBehance, 
  faLinkedin, 
  faGithub, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialIcons() {
  return (
    <div className="social_group">
        <div className='social_icons'>
      <a href="https://www.behance.net/vinithuiux" target="_blank" rel="noopener noreferrer" aria-label="Behance">
        <FontAwesomeIcon icon={faBehance} />
      </a>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:vinithuiux@gmail.com" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/VinithRexton" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://wa.me/9498025679" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
</div>

      <div className='social_btn'>
        <a
        href="/files/your-cv.pdf" 
        download="AlexDoe_CV.pdf"
      >
        Download CV
      </a>
      </div>
      
    </div>
  );
}

export default SocialIcons;
