import React from 'react';
import ProjectTemplate from './ProjectTemplate';
import { project1, project2, project3, project4, project5, project6 } from './ProjectWriteup';

const Project = () => {
  return (
    <div className="project" id="project-link">
      <h2>projects</h2>
      <div className="project-blurb">

      <p>
         Here are the projects that I am proud to showcase. Most of these came from my time at General Assembly and were completed under a time crunch.
      </p>
      </div>
      {/* Project 1 - Pet a Bunny */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/game_preview.png'}
        projectURL='https://pages.git.generalassemb.ly/judykim-ga/pet-a-bunny/'
        githubURL='https://github.com/kimjudyh/pet-a-bunny'
        summary={project1.summary}
        projectTechnology={project1.projectTechnology}
        timeline={project1.timeline}
        bestParts={project1.bestParts}
        challenges={project1.challenges}
      />

      {/* Project 2 - Imagerie */}
      <ProjectTemplate 
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop_album_view.jpg'}
        projectURL='https://imagerie-sei.herokuapp.com/'
        githubURL='https://github.com/kimjudyh/imagerie'
        summary={project2.summary}
        projectTechnology={project2.projectTechnology}
        timeline={project2.timeline}
        bestParts={project2.bestParts}
        challenges={project2.challenges}
        left='-40%'
      />

      {/* Project 3 - Tutor Marketplace */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/tutor_marketplace_preview.png'}
        projectURL='https://tutor-marketplace-sei.herokuapp.com/'
        githubURL='https://github.com/kimjudyh/tutor-marketplace'
        summary={project3.summary}
        projectTechnology={project3.projectTechnology}
        timeline={project3.timeline}
        bestParts={project3.bestParts}
        challenges={project3.challenges}
        left='-10%'
      />

      {/* Project 4 - Avocados Anonymous */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/home-page.png'}
        projectURL='https://avo-anon-collabathon.herokuapp.com/'
        githubURL='https://github.com/kimjudyh/ga-collabathon'
        summary={project4.summary}
        projectTechnology={project4.projectTechnology}
        timeline={project4.timeline}
        bestParts={project4.bestParts}
        challenges={project4.challenges}
        left='-40%'
      />

      {/* Project 5 - Sandpiper */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop-profile.png'}
        projectURL='https://sandpiper-react.herokuapp.com/'
        githubURL='https://github.com/kimjudyh/sandpiper-client'
        figmaURL='https://www.figma.com/file/aC2C1JFg0NX5luGDARJL6x/birdwatching-journal?node-id=0%3A1'
        summary={project5.summary}
        projectTechnology={project5.projectTechnology}
        timeline={project5.timeline}
        bestParts={project5.bestParts}
        challenges={project5.challenges}
        left='-30%'
      />

      {/* Project 6 - Portfolio */}
      <ProjectTemplate 
        thumbnailURL={process.env.PUBLIC_URL + '/images/anthro_shirt.png'}
        projectURL='https://www.anthropologie.com/shop/farm-rio-helena-clip-dot-blouse?category=new-clothes&color=090&type=STANDARD&quantity=1'
        githubURL='https://github.com/kimjudyh/portfolio'
        figmaURL='https://www.figma.com/file/miqUKxh998OtEhfMgbYNT9/portfolio?node-id=0%3A1'
        summary={project6.summary}
        projectTechnology={project6.projectTechnology}
        timeline={project6.timeline}
        bestParts={project6.bestParts}
        challenges={project6.challenges}
        left='8%'
      />
    </div>
  )
}

export default Project;