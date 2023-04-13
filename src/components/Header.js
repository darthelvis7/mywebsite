import React from 'react';
import {Link} from 'react-scroll';

function Header() {
  return (
    <header>
      <div className="logo">
				ELVIS CUEVAS
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link></li>
          <li><Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

