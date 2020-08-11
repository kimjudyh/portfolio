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
    Sandpiper was my Final project at General Assembly! I had the idea for this project months before I started the bootcamp, but didn't have the skills to create it. By the end of the course, I was able to see my idea come to life! Sandpiper is an app where you can keep track of the birds you saw and the photos you took of them. You can share entries, or birding sessions, with other users that went birding with you. This lets users compile the photos that might have otherwise lived on separate devices in the same spot.
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
    I'm proud of overcoming my initial discomfort with React and React Hooks to create an entire website using Hooks. It was a great exercise in learning by doing. In addition to referencing the labs and homeworks we had done in class, I watched the <a href="https://youtu.be/dpw9EHDh2bM?t=1057" alt="Youtube video of React Today and Tomorrow and 90% Cleaner React with Hooks">official introduction of Hooks at the React Conf 2018</a> over and over again. With each new component and call to useState and useEffect, I became better at "thinking in React" and using Hooks. It was very gratifying to go from a sort of anxiousness over whether I could make the website as I envisioned it, to seeing the deployed product.
  </p>
  <p>
    I also went all out during the planning phase and created detailed wireframes in Figma. I had tried to use Figma on the Django project, but my unfamiliarity with the tool and lack of time to learn it (we had one day to come up with all planning materials required for project approvals!) led me to use a more familiar tool, PowerPoint. But after seeing the power of Figma during the Collabathon, I was determined to use it for my final project wireframes. I inspected the Collabathon Figma board and used it as a guide when setting up my first frames. I also used the prototyping feature to mimic the user flow. This was an iterative process, as often I would realize that I was missing a screen.
  </p>
  </>,
  challenges:
  <>
  <p>
    Creating a separate backend on a different server was challenging because I hadn't done it before. We learned about multi-server architecture during our React module and worked on code that the instructor had set up for us, but we hadn't made a 2-server system from scratch. Luckily, we went over how to use Postman to test our API endpoints, so when the time came to get the client-side talking to the backend (with CORS enabled!), it went smoothly.
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
    Deploying a Create React App to Github Pages was a bit more involved than I expected. I wanted to try a hosting service other than Heroku, which we had used in class for almost every project. The problem with the free tier of Heroku is that the server falls asleep after some (rather short) period of inactivity, and when it's time to wake up, it takes a minute. I figured that since my portfolio doesn't have a backend, I could use Github Pages. I ran into some gh-pages configuration issues, accidentally pushed the build files to the master branch, had to do a git reset --hard to restore the master branch to a previous commit, but a couple hours of determined troubleshooting led to a successful deployment! 
  </p>
  </>
}

export const project7 = {
  summary:
  <p>
    An analysis tool for all your Pokemon Go PVP needs! If you're wondering which of your 50 Mudkips to keep and use in Go Battle League, this is the tool for you. Easily input as many Pokemon stats as you need, then analyze all of them at once for PVP eligibility, power up costs, and what CP it will evolve to. This project was a refactor of my first Python project, a Command Line Interface and desktop GUI app, into a fullstack web app. 
  </p>,
  projectTechnology:
  <>
  <p>
    Django, Python3, PostgreSQL
  </p>
  <p>
    Dependencies: django-picklefield, Bootstrap 4
  </p>
  <p>
    Deployed to Heroku
  </p>
  </>,
  timeline:
  <p>
    July 31, 2020 - August 10, 2020
  </p>,
  bestParts:
  <>
  <p>
    Getting my client-side JavaScript working for the endless form and autocomplete features! Since I chose Django as my framework, as opposed to creating a more complicated web architecture with Django on the backend, React on the frontend, and an API to connect the two, I wasn't sure how much I could accomplish with vanilla JavaScript. I dove right back in to the world of DOM manipulation and was able to accomplish all of the features I wanted, from live form data validation to executing fetch requests for Pokemon evolutions.
  </p>
  </>,
  challenges:
  <>
  <p>
    One of my biggest challenges was redesigning the database schemas of an app that had taken advantage of local computer memory to store hundreds of tables containing 4096 rows. Why 4096 rows? Because that's the number of IV combos each Pokemon can have. Attack, Defense, and Stamina can be between [0, 15] inclusive, so that's 16 * 16 * 16 = 4096. Each league will have different stats, so the upper limit on the number of rows that would be calculated is (700 Pokemon)(4096 stats/league)(3 leagues/Pokemon) = ~8.6 million rows. The free PostgreSQL database plan from Heroku only gives 10,000 rows, so I knew my old database design was not going to work at all. 
  </p>
  <p>  
    My solution was to store the 4096 stats in a dictionary, then store the dictionary as a Pickled Field Object in the table. Each Pokemon would have its own table containing 3 dictionaries containing the stats for each league. 8.6 million rows successfully reduced to less than 3000!
  </p>
  <pre><code className="language-python">
    {`
from picklefield.fields import PickledObjectField

class PokemonPVP(models.Model):
    species = models.CharField(max_length=100)
    # League_dic definition
    # { IV combo as a string: { rank: int, stat_product: float } }
    # { '0,0,0': { 'rank': 123, 'stat_product': 123.33 }}
    GL_dic = PickledObjectField()
    UL_dic = PickledObjectField()
    ML_dic = PickledObjectField()
    `}
  </code></pre>
  </>
}

const ProjectWriteup = {
  project1
}

export default ProjectWriteup;