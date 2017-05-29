import React from 'react'

const ProjectTile = (props) => {

  let infoTags = props.tagInfo.map((tag, index) => {
    return <p className="info-tag" key={index}>{tag}</p>
  })

  return (
    <div className="project" onClick={props.moveToProject} id={props.reference} >
      <p onClick={props.moveToProject} id={props.reference}>{props.name}</p>
      <div className="project-hover" onClick={props.moveToProject} id={props.reference}>
        {infoTags}
      </div>
    </div>

  )
}

export default ProjectTile