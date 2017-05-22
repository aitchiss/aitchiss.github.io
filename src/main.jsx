import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: ['animalShelter', 'workoutPlanner', 'iDrinkies', 'hooses', 'starWars', 'battleships']
    }
  }


  render(){

    return (
      <div>
        <Header />
        <AboutSection projects={this.state.projects}/>
      </div>
      )

    
  }
}


export default Main