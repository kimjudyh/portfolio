import React, { useState } from 'react';

const Resume = () => {
  const [resumeURL, setResumeURL] = useState( process.env.PUBLIC_URL + '/assets/JudyKim_portfolio_fullstack.pdf')

  return (
    <div className="resume" id="resume-link">
      <h2>resume</h2>
      <p>
        I'm currently seeking a fullstack software engineer position. My knowledge of the frontend and backend lets me contribute and debug in any part of the stack. 
      </p>
      <p>
        I've taken the manufacturing concept, design for x, or the idea of designing for downstream users, to heart and have transferred it to my coding projects. Just like how a spacecraft part needs to be designed for analysis, manufacturing, and testing, I strive to create software that meets the needs of a diverse group of users. 
      </p>
      <div className="skills">
        <h3>skills</h3>
        <p>
           I haz skills. Valuable skills!!
        </p>
        <p>
          <strong> Languages:</strong> Python 3 · JavaScript (ES5, ES6) · SQL · MATLAB · Java
          </p>
        <p>
          <strong>Front End:</strong> React · HTML · CSS · Flexbox · Bootstrap · Vanilla JavaScript · jQuery
        </p>
        <p>
          <strong>Back End:</strong> Node.js · Express · MongoDB · Mongoose · Django · PostgreSQL
        </p>
        <p>
          <strong>Coding Skills:</strong> Git · OOP · ORM · Data Structures · Algorithms · Continuous Integration · REST · MVC · Unix · vim · Virtual Environments · Pytest · numpy · pandas · Tableau · Travis CI · Postman · React Router

        </p>
        <p>
          <strong>MechE Skills:</strong> CAD · Creo · ProE · Teamcenter Product Life Management · LabVIEW · ANSYS · SolidWorks · Inventor
        </p>

        <h3>experience</h3>
        <p>
          <strong>Lockheed Martin Space</strong>
        </p>
        <ul>
          <li>
            Manufacturing Engineer, November 2017 - April 2019
          </li>
        </ul>
        <p>
          <strong>Space Systems Loral</strong> (Maxar)
        </p>
        <ul>
          <li>
            Mechanical Design Engineer, March 2015 - August 2017
          </li>
        </ul>

        <h3>education</h3>
        <p>
          <img className="general-assembly-logo" src={process.env.PUBLIC_URL + '/images/ga-logo-gear.png'} alt="general assembly logo"/>
           <strong>General Assembly, San Francisco</strong>
        </p>
        <ul>
          <li>
            Software Engineering Immersive, March 23 - June 16, 2020
          </li>
        </ul>
        <p>
          <img className='cornell-logo' src={process.env.PUBLIC_URL + '/images/cornell_seal_simple_b31b1b.svg'} alt="cornell logo"/>
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

        <h3>contact me</h3>
          <p>
            <i className="fa fa-envelope"></i> kimjudyh@gmail.com
          </p>
          <p>
            <a href={resumeURL} target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf"></i> View my resume</a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/judykim2014/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn </a>
          </p>
      </div>
    </div>
  )
}

export default Resume;