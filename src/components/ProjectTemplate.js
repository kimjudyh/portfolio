import React, { useState } from 'react';

const ProjectTemplate = (props) => {
  const info = useInfoDisplay();
  // position thumbnail within thumbnail frame
  const [leftPosition, setLeftPostition] = useState({left: props.left});

  return (
    <div className="individual-project">
      {/* <div className="row flex-s align-items-center"> */}
      {/* Project Thumbnail */}
      <div className="row  align-items-center">
        <div className="col col-12  col-md-4 thumbnail-col">
          <div className="project-thumbnail-frame">
            <a href={props.projectURL} target="_blank" rel="noopener noreferrer">
              <img className="project-thumbnail"
                style={leftPosition}
                src={props.thumbnailURL} alt="project thumbnail" />
            </a>
          </div>
        </div>
        {/* Project Summary */}
        <div className="col col-12  col-md-7 ">
          {props.summary}
          {/* Show / Hide Info */}
          {info.infoDisplay.display === 'none' ?
            <div className="clickable-icon wide" onClick={info.toggleInfoDisplay}>
              {/* Show More */}
            see more <i className="fa fa-chevron-right fa-lg" aria-hidden="true" ></i>
            </div>
            :
            <div className="clickable-icon wide" onClick={info.toggleInfoDisplay}>
              {/* Hide */}
            see less <i className="fa fa-chevron-down fa-lg" aria-hidden="true" ></i>
            </div>
          }
        </div>
      </div>
      {/* More Project Info */}
      <div className="row ">
        <div className="col col-12 col-md-8 offset-4 more-info">
          <div style={info.infoDisplay} className="project-info">
            <h4>project technology</h4>
            {props.projectTechnology}

            <h4>project timeline</h4>
            {props.timeline}

            <h4>best parts of project</h4>
            {props.bestParts}

            <h4>challenges</h4>
            {props.challenges}

            {/* <h4>interesting code</h4> */}
            {/* <p> */}
              {/* markup? */}
            {/* </p> */}
            {/* Links */}
            <div className="clickable-icon wide">
              {/* Github */}
              <a href={props.githubURL} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-lg" aria-label="link to github repo"></i> Github Repo
            </a>
            </div>
            <div className="clickable-icon wide">
              {/* Deployed Site */}
              <a href={props.projectURL} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-link fa-lg" aria-label="link to deployed site"></i> Deployed Site
            </a>
            </div>
            {/* Figma, if it exists */}
            {props.figmaURL ?
              <div className="clickable-icon wide">
                <a href={props.figmaURL} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-figma fa-lg" aria-label="link to figma board"></i> Figma Board
            </a>
              </div>
              : ''}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTemplate;

// custom hook to toggle element display between flex and none
export const useInfoDisplay = () => {
  const [infoDisplay, setInfoDisplay] = useState({ display: 'none', opacity: 0 })
  const toggleInfoDisplay = () => {
    // toggle show info state
    if (infoDisplay.display === 'none') {
      setInfoDisplay({ display: 'flex', opacity: 1 })
    } else {
      setInfoDisplay({ display: 'none', opacity: 0 })
    }
  }
  return ({
    infoDisplay,
    toggleInfoDisplay
  })
}