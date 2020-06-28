import React, { useState } from 'react';

const Resume = () => {
  const [resumeURL, setResumeURL] = useState( process.env.PUBLIC_URL + '/assets/JudyKim_portfolio_fullstack.pdf')

  return (
    <div className="resume" id="resume-link">
      <h2>resume</h2>
      <p>
        I'm currently seeking a fullstack software engineer position. 
      </p>
      <div className="skills">
        <h4>skills</h4>
        <p>
           I haz skills. Valuable skills!!
        </p>
        <h4>experience</h4>
        <p>
          I have experience! Yay experience!
        </p>
        <h4>education</h4>
        <p>
           <strong>General Assembly, San Francisco</strong>
        </p>
                <ul>
          <li>
            Software Engineering Immersive, March 23 - June 16, 2020 (taken remotely due to Covid-19 lockdown)
          </li>
        </ul>
        <p>
          <strong>Cornell University, Ithaca, NY</strong>
        </p>
        <ul>
          <li>
            M.Eng in Mechanical Engineering, August 2014 - January 2015
          </li>
          <li>
            B.S. in Mechanical Engineering, August 2010 - May 2014
          </li>
        </ul>
      </div>
      <div className="row align-items-center" > 
        <div className="col col-12 col-md-5 offset-1 align-items-center">
          <p>
            <a href={resumeURL}><i className="fa fa-file-pdf"></i> View my resume</a>
          </p>
          <p>
            <i className="fa fa-envelope"></i> kimjudyh@gmail.com
        </p>
          <p>
            <a href="https://www.linkedin.com/in/judykim2014/"><i className="fab fa-linkedin"></i> LinkedIn </a>
          </p>
        </div>
        <div className="col col-md-6 justify-content-center">
          <img className="general-assembly-logo" src={process.env.PUBLIC_URL + '/images/ga-logo-gear.png'} alt="general assembly logo"/>
          <img className='cornell-logo' src={process.env.PUBLIC_URL + '/images/cornell_logo_simple_b31b1b.svg'} alt="cornell logo"/>
        </div>
      </div>
    </div>
  )
}

export default Resume;