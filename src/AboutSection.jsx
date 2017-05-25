import React from 'react'

const AboutSection = (props) => {

  const moveToProject = (e) => {
    props.updateSelection(e.target.id)
    document.location ="#project-view"
  }

  const projectDivs = props.projects.map((project, index) => {
    return <div className="project" onClick={moveToProject} id={project.reference} key={index}><p onClick={moveToProject} id={project.reference}>{project.name}</p></div>
  })


  return (
    <div className="about-section">
      <div className="about-text">
        <p>I am a Software Developer based in Edinburgh, currently open to employment opportunities having graduated from CodeClan's intensive PDA Software Development course (SCQF Level 8).</p>
        <p>I bring a strong user-centred approach to development, and a genuine enthusiasm for delivering excellent user experience.</p>
        <p>Skills include: </p>
        <ul>
          <li>Programming languages including JavaScript, Java, Ruby</li>
          <li>Experience with frameworks including React and Ruby on Rails</li>
          <li>Node JS, NPM, Webpack and Babel</li>
          <li>Utilising and creating RESTful APIs</li>
          <li>SQL and noSQL database experience</li>
          <li>Strong grounding in OOP and SOLID principles</li>
          <li>Test Driven Development</li>
        </ul>
        <ul className="nav-links">
         
          <li><a href="http://github.com/aitchiss"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>

          <li><a href="https://www.linkedin.com/in/suzanne-aitchison-59aa2838/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
          <li><a href="mailto:suzanne.aitchison@gmail.com"><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
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