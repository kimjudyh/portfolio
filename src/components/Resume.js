import React, { useState } from 'react';

const Resume = () => {
  const [resumeURL, setResumeURL] = useState( process.env.PUBLIC_URL + '/assets/JudyKim_portfolio_fullstack.pdf')

  return (
    <div className="resume" id="resume-link">
      <h2>resume</h2>
      <p>
        I'm currently seeking a fullstack software engineer position. 
      </p>
      <div>
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
    </div>
  )
}

export default Resume;