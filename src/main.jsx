import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: [{name: 'animal shelter', reference: 'animalShelter'}, {name: 'workout planner', reference: 'workoutPlanner'}, {name: 'iDrinkies', reference: 'iDrinkies'}, {name: 'hooses', reference: 'hooses'}, {name: 'Star Wars Planetary Database', reference: 'starWars'}, {name: 'battleships', reference: 'battleships'}],
      currentSelection: null
    }
  }

  updateCurrentSelection(reference){
    this.state.projects.forEach((project) => {
      if (project.reference === reference){
        this.setState({currentSelection: project})
      }
    })
  }


  render(){

    return (
      <div>
        <Header />
        <AboutSection projects={this.state.projects} updateSelection={this.updateCurrentSelection.bind(this)}/>  
        <ProjectSection />
      </div>
      )

    
  }
}


export default Main