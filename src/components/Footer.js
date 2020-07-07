import React from 'react';

const Footer = () => {
  const resumeURL = process.env.PUBLIC_URL + '/assets/JudyKim_portfolio_fullstack.pdf';
  return (
    <footer className="navbar top navbar-expand-lg navbar-light ">
      <div className="container">
          <a className="nav-link" href="https://git.generalassemb.ly/judykim-ga" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i> GitHub</a>
          <a className="nav-link" href="https://www.linkedin.com/in/judykim2014/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a className="nav-link" href={resumeURL} target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf"></i> Resume</a>
      </div>
    </footer>

  )
}

export default Footer;