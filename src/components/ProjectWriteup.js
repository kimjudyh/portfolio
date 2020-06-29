import React from 'react';

export const project1 = {
  summary: 
  <p>
    Pet-a-Bunny was my first project at General Assembly, and my first project using Javascript! My favorite part of this project was implementing achievements and having banners pop up when you obtain an achievement. Making this game gave me some serious nostalgia for my Neopets days. 

  </p>,
  projectTechnology:
  <p>vanilla javascript, jQuery</p>,
  timeline:
  <p>April 3 - April 10, 2020</p>,
  bestParts:
  <p>
    It was so satisfying to see all the pieces come together - the CSS, event listeners placed on the DOM, the timers to make bunnies and snakes pop up randomly, and the logic to enable or disable buttons.
  </p>,
  challenges:
  <p>
    I had trouble with the timers because I was forgetting to clear them! I was very perplexed as my level timer counted down at an accelerating pace. Once I figured that out, controlling the length of time a bunny appeared and how often it popped up during the level was more manageable. 
  </p>
}

export const project2 = {
  summary:
  <p>
    Imagerie was a partner project and my first foray into a MEN-stack website. The name is a play on words - a menagerie is a varied collection of items, and so Imagerie is a collection of images. This project was my first time implementing user authorization and authentication. 
  </p>,
  projectTechnology:
  <><p>Node.js, Express, MongoDB</p>
  <p>Dependencies: bcyptjs, body-parser, cloudinary, connect-multiparty, connect-mongo, dotenv, ejs, express, express-session, method-override, mongoose</p>
  <p>Deployed to Heroku</p>
  </>,
  timeline:
  <p>April 23 - May 1, 2020</p>,
  bestParts:
  <>
  <p>
    I'm happy that I figured out how to integrate Cloudinary for image upload, storage, and retrieval. Since I didn't use their upload widget (I figured out how to do that for my final project), I used a simple CSS animation and client-side javascript to display a loading indicator.
  </p>
  </>,
  challenges:
  <>
  <p>
    The design of the webpage was a compromise between me and my partner. My partner wanted a photo in the background, and I was initially against it because I thought it would make the site too busy when other photos were being shown. But with a dark theme laid over the background image, I think it turned well!

  </p>
  </>
}

export const project3 = {
  summary:
  <p>
    Tutor Marketplace was a group project with 2 classmates. We were inspired by verbling.com, and created a platform where users can sign up as either a student or a teacher. The two roles were given different permissions using Django's built-in user authorization decorators.
  </p>,
  projectTechnology:
  <>
  <p>Django, Python, PostgreSQL</p>
  <p>Dependencies: django-bootstrap-datepicker-plus</p>
  <p>Deployed to Heroku</p>
  </>,
  timeline:
  <p>May 13 - May 20, 2020</p>,
  bestParts:
  <p>The best part for me was discovering the wealth of tools that Django provides. One of the tools I used was the built-in messages module. I configured it so that it displayed a one-time message on the page for events such as a successful lesson booking, a cancellation, or login error.</p>,
  challenges:
  <>
  <p>I did not enjoy adding classes to form input fields! It felt like extra work to redefine the type of input field, something that my classmate did in the model schema, just to add the "form-control" class.</p>
  <p>Implementing a calendar and time input field proved more challenging than I expected. Using an outside library was the only viable option, and changing the time format from 24h to 12h introduced a bug where you can only book classes in the AM. So.. enjoy your 4am English lesson!</p>
  </>
}

export const project4 = {
  summary:
  <p>
    Collabathon! This was a collaboration between 5 designers and 1 other software engineer during a 2-day hackathon to create an accessible landing page for users and a dashboard for a fictional client, Avocados Anonymous. The website was designed for both mobile and desktop users.
  </p>,
  projectTechnology:
  <>
  <p> Node.js, Express, MongoDB, Mongoose, Bootstrap</p>
  <p>Deployed to Heroku</p>
  </>
  ,
  timeline:
  <p>May 21 - May 22, 2020</p>,
  bestParts:
  <>
  <p>
    I learned so much about designing a website during this collabathon, especially how to utilize Figma to establish the color scheme and font styles. I used the design concepts I learned from this project in my final project. 
  </p>
  <p>
    Some code I'm proud of is the live signup form verification. This was a request from the design team that I wasn't sure I could fulfill, but working off of Bootstrap's input verification code, I got something working by presentation time. I attached event listeners on each input field that triggered verification on a focus out event. So if the user clicked the field and left without filling it out, a red x appeared. If the field was filled out correctly, a green checkmark appeared before the user hit submit.
  </p>
  </>,
  challenges:
  <p>
    The biggest challenge was the lack of time. The design team did a great job providing us with a skeleton layout at the beginning so that Lisa and I could get started with the EJS templates and CSS. But making both the mobile and desktop versions was tough to do in the 2 days we had. There were also feature requests that we weren't able to get to, like sorting the client's dashboard by name, email, and date.
  </p>
}

export const project5 = {
  summary:
  <p>
    Sandpiper was my Final project at General Assembly! Sandpiper is an app where you can keep track of the birds you saw and the photos you took of them. You can share entries, or birding sessions, with other users that went birding with you. This lets users compile the photos that might have otherwise lived on separate devices in the same spot.
  </p>,
  projectTechnology:
  <>
  <p> React, Node.js, Express, MongoDB</p>
  <p>Dependencies: Mongoose, Axios, Bing Maps, Cloudinary, React Router</p>
  <p>Deployed to Heroku</p>
  </>
  ,
  timeline:
  <p>June 4 - June 15, 2020</p>,
  bestParts:
  <>
  <p>
    Overcoming my initial discomfort with React and React Hooks to create an entire website using Hooks. It was a great exercise in learning by doing.
  </p>
  </>,
  challenges:
  <>
  <p>

  </p>
  </>
}

export const project6 = {
  summary:
  <p>
    This portfolio website. Is talking about it kind of like breaking the fourth wall? Shout out to this Anthropologie shirt for inspiring the color scheme of this portfolio #notsponsored.
  </p>,
  projectTechnology:
  <p>React</p>,
  timeline:
  <p>June 25 - June 29, 2020</p>,
  bestParts:
  <>
  <p>
    My favorite part was coming up with a design inspiration collage. I placed my color scheme and screenshots from Anthropologie onto a page in Figma and kept it up on my second monitor. The collage put me in a bright, tropical mood!
  </p>
  </>,
  challenges:
  <>
  <p>
    Deciding on a design was tough. Deploying a Create React App using Github Pages.
  </p>
  </>
}

const ProjectWriteup = {
  project1
}

export default ProjectWriteup;