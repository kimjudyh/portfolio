import React from 'react';
import ProjectTemplate from './ProjectTemplate';
import { project1, project2, project3, project4, project5, project6 } from './ProjectWriteup';

const Project = () => {
  return (
    <div className="project" id="project-link">
      <h2>projects</h2>
      <p>
        this is project owo
      </p>
      {/* Project 1 - Pet a Bunny */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/game_preview.png'}
        projectURL='https://pages.git.generalassemb.ly/judykim-ga/pet-a-bunny/'
        githubURL='https://git.generalassemb.ly/judykim-ga/pet-a-bunny'
        summary={project1.summary}
        projectTechnology={project1.projectTechnology}
        timeline={project1.timeline}
      />

      {/* Project 2 - Imagerie */}
      <ProjectTemplate 
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop_album_view.jpg'}
        projectURL='https://imagerie-sei.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/project-one'
        summary={project2.summary}
        projectTechnology={project2.projectTechnology}
        timeline={project2.timeline}
        left='-40%'
      />

      {/* Project 3 - Tutor Marketplace */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/tutor_marketplace_preview.png'}
        projectURL='https://tutor-marketplace-sei.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/TutorMarketplace'
        summary={project3.summary}
        projectTechnology={project3.projectTechnology}
        timeline={project3.timeline}
        left='-10%'
      />

      {/* Project 4 - Avocados Anonymous */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/home-page.png'}
        projectURL='https://avo-anon-collabathon.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/collabathon'
        summary={project4.summary}
        projectTechnology={project4.projectTechnology}
        timeline={project4.timeline}
        left='-40%'
      />

      {/* Project 5 - Sandpiper */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop-profile.png'}
        projectURL='https://sandpiper-react.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/final-project-client'
        figmaURL='https://www.figma.com/file/aC2C1JFg0NX5luGDARJL6x/birdwatching-journal?node-id=0%3A1'
        summary={project5.summary}
        projectTechnology={project5.projectTechnology}
        timeline={project5.timeline}
        left='-30%'
      />

      {/* Project 6 - Portfolio */}
      <ProjectTemplate 
        thumbnailURL={process.env.PUBLIC_URL + '/images/anthro_shirt.png'}
        projectURL='https://www.anthropologie.com/shop/farm-rio-helena-clip-dot-blouse?category=new-clothes&color=090&type=STANDARD&quantity=1'
        githubURL='https://git.generalassemb.ly/judykim-ga/portfolio'
        figmaURL='#'
        summary={project6.summary}
        projectTechnology={project6.projectTechnology}
        timeline={project6.timeline}
        left='8%'
      />
    </div>
  )
}

export default Project;