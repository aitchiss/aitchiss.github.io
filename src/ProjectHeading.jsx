import React from 'react'


class ProjectHeading extends React.Component{

  render(){
    return(
      <div className="project-heading" style={{backgroundColor: this.props.colour}}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }

}


export default ProjectHeading