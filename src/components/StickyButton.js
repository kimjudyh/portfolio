import React from 'react';

const StickyButton = () => {
  return (
    <div className="sticky">
      <ul> 
        <li className="nav-item active">
          <div className="cover">
            JK
          </div>
          <a className="nav-link scroll-top-nav" href="#welcome-link" >Scroll to Top </a>
        </li>
        <li className="nav-item active">
          <span className="cover">A</span>
          <a className="nav-link about-nav" href="#about-link">About</a>
        </li>
        <li className="nav-item active">
          <span className="cover">R</span>
          <a className="nav-link resume-nav" href="#resume-link">Resume</a>
        </li>
        <li className="nav-item active">
          <span className="cover">P</span>
          <a className="nav-link projects-nav" href="#project-link">Projects</a>
        </li>
      </ul>
    </div>
  )
}

export default StickyButton;