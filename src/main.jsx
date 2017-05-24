import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: [{name: 'animal shelter', reference: 'animalShelter', colour: '#EA1E63', photos: [
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/owner_profile.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/animals_index.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/matches_page.png?raw=true'
      ]}, 
      {name: 'workout planner', reference: 'workoutPlanner', colour: '#9C28B1'}, 
      {name: 'iDrinkies', reference: 'iDrinkies', colour: '#00BCD5'}, 
      {name: 'hooses', reference: 'hooses', colour: '#019587'}, 
      {name: 'Star Wars Planetary Database', reference: 'starWars', colour: '#FEC107'}, 
      {name: 'battleships', reference: 'battleships', colour: '#673BB7'}],
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
        <ProjectSection currentSelection={this.state.currentSelection}/>
      </div>
      )

    
  }
}


export default Main