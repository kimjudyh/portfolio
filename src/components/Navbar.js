import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar top navbar-expand-lg navbar-light ">
      <div className="container">
            <a className="nav-link navbar-brand logo" href="#"> Portfolio</a>
          {/* Hamburger Menu Button */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsDropdown" aria-controls="navbarsDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* Links in dropdown */}
    <div className="collapse navbar-collapse ml-auto" id="navbarsDropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
          <a className="nav-link" href="#about-link">About</a>
        </li>
        <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
          <a className="nav-link" href="#project-link">Projects</a>
        </li>
        <li className="nav-item active" data-toggle="collapse" data-target="#navbarsDropdown">
          <a className="nav-link" href="#resume-link">Resume</a>
        </li>
      </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;