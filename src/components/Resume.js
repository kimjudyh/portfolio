import React, { useState } from 'react';

const Resume = () => {
  const [resumeURL, setResumeURL] = useState( process.env.PUBLIC_URL + '/assets/JudyKim_portfolio_fullstack.pdf')
  return (
    <div className="resume" id="resume-link">
      <h2>resume</h2>
      owo
      <a href={resumeURL}>View and download my resume</a>
      <div className="pdf">
      </div>
    </div>
  )
}

export default Resume;