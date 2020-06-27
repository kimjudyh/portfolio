import React from 'react';
import ProjectTemplate from './ProjectTemplate';

const Project = () => {
  return (
    <div className="project">
      <h2>projects</h2>
      <p>
        this is project owo
      </p>
      {/* Project 1 - Pet a Bunny */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/game_preview.png'}
        projectURL='https://pages.git.generalassemb.ly/judykim-ga/pet-a-bunny/'
        githubURL='https://git.generalassemb.ly/judykim-ga/pet-a-bunny'
      />

      {/* Project 2 - Imagerie */}
      <ProjectTemplate 
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop_album_view.jpg'}
        projectURL='https://imagerie-sei.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/project-one'
        left='-40%'
      />

      {/* Project 3 - Tutor Marketplace */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/tutor_marketplace_preview.png'}
        projectURL='https://tutor-marketplace-sei.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/TutorMarketplace'
        left='-10%'
      />

      {/* Project 4 - Avocados Anonymous */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/home-page.png'}
        projectURL='https://avo-anon-collabathon.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/collabathon'
        left='-40%'
      />

      {/* Project 5 - Sandpiper */}
      <ProjectTemplate
        thumbnailURL={process.env.PUBLIC_URL + '/images/desktop-profile.png'}
        projectURL='https://sandpiper-react.herokuapp.com/'
        githubURL='https://git.generalassemb.ly/judykim-ga/final-project-client'
        left='-30%'
      />

      {/* Project 6 - Portfolio */}
      <ProjectTemplate
      />
    </div>
  )
}

export default Project;