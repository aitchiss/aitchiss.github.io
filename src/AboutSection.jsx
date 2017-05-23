import React from 'react'

const AboutSection = (props) => {

  const projectDivs = props.projects.map((project, index) => {
    return <div className="project" id={project} key={index}><p>{project}</p></div>
  })


  return (
    <div className="about-section">
      <div className="about-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <ul className="nav">
          <li>GitHub</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
      </div>
      
      <div className="grid-container">
        <div className="grid-header">
          <p>Key Projects</p>
        </div>
        {projectDivs}
      </div>
    </div>
  )
}

export default AboutSection