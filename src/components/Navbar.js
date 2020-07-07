import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar top navbar-expand-sm ">
      <div className="container">
        <a className="nav-link navbar-brand logo" id="welcome-link" href=" https://www.linkedin.com/in/judykim2014/" target="_blank" rel="noopener noreferrer">Judy Kim </a>
        {/* Hamburger Menu Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDropdown" aria-controls="navbarsDropdown" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa fa-bars"></i>
        </button>
        {/* Links in dropdown */}
        <div className="collapse navbar-collapse ml-auto" id="navbarsDropdown">
          <ul className="navbar-nav ml-auto align-items-end">
            <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
              <a className="nav-link about-nav" href="#about-link">About</a>
            </li>
            <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
              <a className="nav-link resume-nav" href="#resume-link">Resume</a>
            </li>
            <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
              <a className="nav-link projects-nav" href="#project-link">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;