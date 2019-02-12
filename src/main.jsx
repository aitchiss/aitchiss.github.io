import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.jsx'
import AboutSection from './AboutSection.jsx'
import ProjectSection from './ProjectSection.jsx'

class Main extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      projects: [{name: 'animal shelter', reference: 'animalShelter', colour: '#EA1E63', githubLink: 'https://github.com/aitchiss/animal_shelter',
      photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/cropped_animals_index.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/cropped_owner_profile.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/cropped_matches_page.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/cropped_add_new_owner_form.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/cropped_home_page.png?raw=true'
      ], tags: ['Ruby/Sinatra']}, 
      {name: 'android workout planner', reference: 'workoutPlanner', colour: '#9C28B1', githubLink: 'https://github.com/aitchiss/workout_planner', 
      photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/workout_planner_main_list.jpg?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/workout_planner_workout_view.jpg?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/workout_planner_play_workout.jpg?raw=true'
      ], tags: ['Android/Java']}, 
      {name: 'iDrinkies', reference: 'iDrinkies', colour: '#00BCD5', githubLink: 'https://github.com/aitchiss/iDrinkies',
      photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/idrinkies_main_top.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/idrinkies_main_expanded_info.png?raw=true'
      ], tags: ['JavaScript']}, 
      {name: 'hooses', reference: 'hooses', colour: '#019587', githubLink: 'https://github.com/aitchiss/Hooses_Project', photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/hooses_home.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/hooses_topic_view.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/hooses_expenditure.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/hooses_profile_edit.png?raw=true'
      ], tags: ['React JS/Rails']}, 
      {name: 'Star Wars Planetary Database', reference: 'starWars', colour: '#FEC107', githubLink: 'https://github.com/aitchiss/star_wars_planetary_guide',
      photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/starwars_main_view_top.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/starwars_main_view_bottom.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/starwars_mobile_view.png?raw=true'
      ], tags: ['JavaScript']}, 
      {name: 'battleships', reference: 'battleships', colour: '#673BB7', githubLink: 'https://github.com/aitchiss/battleships', photos: [
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/battleships_setup.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/battleships_game_start.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/battleships_mid_game2.png?raw=true',
      'https://github.com/aitchiss/aitchiss.github.io/blob/master/images/battleships_mid_game1.png?raw=true'
      ], tags: ['React/JavaScript']}],
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

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Main />, wrapper) : false;