import React from 'react'
import Header from './Header'
import AboutSection from './AboutSection'
import ProjectSection from './ProjectSection'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: [{name: 'animal shelter', reference: 'animalShelter', colour: '#EA1E63', githubLink: 'https://github.com/aitchiss/animal_shelter',
      photos: [
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/animals_index.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/owner_profile.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/matches_page.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/add_new_owner_form.png?raw=true',
      'https://github.com/aitchiss/animal_shelter/blob/master/documentation/home_page.png?raw=true'
      ]}, 
      {name: 'workout planner', reference: 'workoutPlanner', colour: '#9C28B1', githubLink: 'https://github.com/aitchiss/workout_planner', 
      photos: [
      'https://github.com/aitchiss/workout_planner/blob/master/documentation/Screen%20Shot%202017-03-26%20at%2016.20.05.jpg?raw=true',
      'https://github.com/aitchiss/workout_planner/blob/master/documentation/Screen%20Shot%202017-03-26%20at%2016.20.14.jpg?raw=true',
      'https://github.com/aitchiss/workout_planner/blob/master/documentation/Screen%20Shot%202017-03-26%20at%2016.19.53.jpg?raw=true'
      ]}, 
      {name: 'iDrinkies', reference: 'iDrinkies', colour: '#00BCD5', githubLink: 'https://github.com/aitchiss/iDrinkies',
      photos: [
      'https://github.com/aitchiss/iDrinkies/blob/master/docs/main_top.png?raw=true',
      'https://github.com/aitchiss/iDrinkies/blob/master/docs/main_expanded_info.png?raw=true'
      ]}, 
      {name: 'hooses', reference: 'hooses', colour: '#019587', githubLink: 'https://github.com/aitchiss/Hooses_Project'}, 
      {name: 'Star Wars Planetary Database', reference: 'starWars', colour: '#FEC107', githubLink: 'https://github.com/aitchiss/star_wars_planetary_guide',
      photos: [
      'https://github.com/aitchiss/star_wars_planetary_guide/blob/master/docs/main_view_top.png?raw=true',
      'https://github.com/aitchiss/star_wars_planetary_guide/blob/master/docs/main_view_bottom.png?raw=true',
      'https://github.com/aitchiss/star_wars_planetary_guide/blob/master/docs/mobile_view.png?raw=true'
      ]}, 
      {name: 'battleships', reference: 'battleships', colour: '#673BB7', githubLink: 'https://github.com/aitchiss/battleships'}],
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