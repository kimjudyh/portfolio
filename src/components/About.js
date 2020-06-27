import React from 'react';

const About = () => {
  return (
    <div className="container about">
      <div className="profile-frame">
        <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/nyc_prof_pic.jpg'} alt="profile picture"/>
      </div>
      <h2>about me</h2>
      <div className="about-me">
        <p>
         Hi, I’m Judy! I recently finished a 3 month coding bootcamp at General Assembly. Previously, I was a mechanical design and manufacturing engineer at two spacecraft companies. I went to Cornell University and am originally from Northern Virginia.
         </p>
         <p>
          I love birds and watching them do cute, amusing, and inexplicable bird things. A birdfeeder that I set up on my porch before the lockdown started has provided hours of entertainment. My most intense birdwatching experience was when I went on an 8-hour boat ride to the Farrallon Islands. I stood the whole time so I didn’t get seasick and was rewarded by spotting a black-footed albatross! 
        </p>
      </div>
    </div>
  )
}

export default About;