import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from 'react-icons/si';


const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-tagline">Let's build something great together!</p>
      <div className="email">
        <a href="mailto:elvis426@gmail.com">
          <div className="contact-email">
          <SiGmail className="contact-icon-gmail" />
            elvis426@gmail.com
          </div>
        </a>
      </div>
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/cuevaselvis/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon-linkedin" />
        </a>
        <a href="https://github.com/darthelvis7" target="_blank" rel="noopener noreferrer">
          <FaGithub className="contact-icon-github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
