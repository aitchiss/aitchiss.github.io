import React from 'react'
import ImageArea from './ImageArea'

class ProjectContent extends React.Component{

  getText(){
    let text

    switch (this.props.currentSelection.reference){
      case 'animalShelter':
        text = (
          <div className="project-info-text">
            <p>A web application built in Ruby/Sinatra, using a PostgreSQL database. The brief for the project was as follows: </p>
            <p>The Scottish Animal Shelter accepts orphaned or stray animals and takes care of them until they can 
                be adopted by a new owner. The shelter has a list of potential new owners for the animals. 
                Animals may take a while to be trained up and made healthy before being available for adoption. They need a management system to keep track of their animals and owners. The system must allow a user to:</p>
            <ul>
              <li>List of all their animals and their admission date</li>
              <li>Mark an animal as being adoptable/not adoptable</li>
              <li>Assign an animal to a new owner</li>
              <li>List all the owners and their adopted animals</li>
            </ul>
            <p>Additional functionality added:</p>
            <ul>
              <li>full CRUD actions for owners and animals</li>
              <li>easily filtered views</li>
              <li>search for animals by breed/type</li>
              <li>view matches between animals and owners, dependent on each animal's individual needs, and the owner's home environment</li>
            </ul>
            
          </div>
        )

    }

    return text
  }


  render(){


    let text = this.getText()



    return(
      <div className="project-content">
        <ImageArea currentSelection={this.props.currentSelection}/>
       {text}
      </div>
    )
  }
}


export default ProjectContent