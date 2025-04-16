import React from 'react';

const About = () => {
  return (
    <div className="about " id="about-link">
      <div className="profile-frame">
        <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/nyc_prof_pic_compressed.png'} alt="profile picture"/>
      </div>
      <h2>about me</h2>
      <div className="about-me">
        <p>
         Hi, I’m Judy! I'm a software developer who is currently based in Mountain View. I previously worked at First Republic
         Bank, which was then acquired by JPMorgan Chase.
         I finished a 3 month coding bootcamp at General Assembly in order to transition into software development. 
         Previously, I was a mechanical design and manufacturing engineer at two spacecraft 
         companies. I went to Cornell University and am originally from Northern Virginia.
         </p>
         <p>
          I love birdwatching, both locally at Shoreline and abroad in places like Korea and India.
          My most intense birdwatching experience was when I went on an 8-hour boat ride to the Farallon Islands. 
          I stood the whole time so I didn’t get seasick and saw a black-footed albatross! 
        </p>
        <p>
          Other hobbies I enjoy are cooking (especially Korean food), gardening, and skiing. 
          I have a small plot in a nearby community garden and grow tomatoes, arugula, and raspberries, among 
          other things.
          I like to do day trips up to Tahoe and look forward to my annual group trips with my husband and his friends.
          We've gone to amazing places like Whistler, Snowbird, Aspen, and Telluride.

        </p>
      </div>
      <div className="about-picture-container">
        <div className="about-picture-frame d-none d-sm-block">
          <img className="d-none d-sm-block" src={process.env.PUBLIC_URL + '/images/succulents.jpg'} alt="me holding succulents" title="What started as one plant has turned into dozens"/>
        </div>
        <div className="about-picture-frame d-none d-md-block ">
          <img className="d-none d-md-block" src={process.env.PUBLIC_URL + '/images/blackcomb_glacier.jpg'} alt="me at blackcomb glacier" title="Enjoying the view at Blackcomb Glacier before a short hike to the top"/>
        </div>
        <div className="about-picture-frame">
          <img src={process.env.PUBLIC_URL + '/images/farallon.jpg'} alt="me on a boat to the farallon islands" title="All smiles at the Farallon Islands despite choppy waves and cold seaspray"/>
        </div>

      </div>

    </div>
  )
}

export default About;