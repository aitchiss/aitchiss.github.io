import React from 'react'

const AboutSection = (props) => {

  const projectDivs = props.projects.map((project, index) => {
    return <div className="project" id={project} key={index}></div>
  })


  return (
    <div className="about-section">
      <div className="about-text">
        <p>Placeholder text</p>
      </div>
      <div className="about-projects">
        {projectDivs}
      </div>
    </div>
  )
}

export default AboutSection