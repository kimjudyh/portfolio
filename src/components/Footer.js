import React from 'react';

const Footer = () => {
  return (
    <footer className="navbar top navbar-expand-lg navbar-light ">
      <div className="container">
          <a className="nav-link" href="#about-link">GitHub</a>
          <a className="nav-link" href="#project-link">LinkedIn</a>
          {/* Hamburger Menu Button */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerDropdown" aria-controls="footerDropdown" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <i className="fa fa-bars"></i>
    </button>
    {/* Links in dropdown */}
    <div className="collapse navbar-collapse ml-auto" id="footerDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active" data-toggle="collapse" data-target="#footerDropdown">
        </li>
      </ul>
      </div>
      </div>
    </footer>

  )
}

export default Footer;