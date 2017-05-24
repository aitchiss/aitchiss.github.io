import React from 'react'
import ProjectHeading from './ProjectHeading'
import ProjectContent from './ProjectContent'


class ProjectSection extends React.Component{

  render(){

    if(this.props.currentSelection){
      return(
        <div id="project-view">
          <ProjectHeading title={this.props.currentSelection.name} colour={this.props.currentSelection.colour}/>
          <ProjectContent currentSelection={this.props.currentSelection}/>
        </div>
      ) 
    } else {
      return (
        <div id="project-view">
          <ProjectHeading title={"select a project to view details"} colour={'#0277BD'} />
        </div>
      )
    }
    
  }

}


export default ProjectSection