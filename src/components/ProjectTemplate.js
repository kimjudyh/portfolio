import React, { useState } from 'react';

const ProjectTemplate = (props) => {
  const info = useInfoDisplay();
  // position thumbnail within thumbnail frame
  const [leftPosition, setLeftPostition] = useState({left: props.left});

  return (
    <>
    <div className="row">
      <div className="col l4">
        <div className="project-thumbnail-frame">
          <a href={props.projectURL} target="_blank" rel="noopener noreferrer">
            <img className="project-thumbnail" 
            style={leftPosition}
            src={props.thumbnailURL} alt="project thumbnail" />
          </a>
        </div>
      </div>
      <div className="col l8">
        this will be filled with stuff

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
        <div style={info.infoDisplay} className="project-info">
          more info
          <h3>project technology</h3>
          <h3>best parts of project</h3>
          <h3>what I'm most proud of</h3>
          <div className="clickable-icon wide">
            <a href={props.githubURL}>
            <i className="fa fa-github fa-lg" aria-label="link to github repo"></i> Github Repo
            </a>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProjectTemplate;

// custom hook to toggle element display between flex and none
export const useInfoDisplay = () => {
  const [infoDisplay, setInfoDisplay] = useState({display: 'none'})
  const toggleInfoDisplay = () => {
    // toggle show info state
    if (infoDisplay.display === 'none') {
      setInfoDisplay({display: 'flex'})
    } else {
      setInfoDisplay({display: 'none'})
    }
  }
  return ({
    infoDisplay,
    toggleInfoDisplay
  })
}