import React from 'react'
import ImageArea from './ImageArea'

class ProjectContent extends React.Component{

  getText(){
    let text

    switch (this.props.currentSelection.reference){
      case 'animalShelter':
        text = (
          <div className="project-info-text">
            <p>A web application built in Ruby/Sinatra, using a PostgreSQL database. The example brief for the project (developed as part of CodeClan studies) was as follows: </p>
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
        break
      case 'workoutPlanner':
        text = (
          <div className="project-info-text">
            <p>As someone who enjoys lifting weights in the gym, I developed this app to help track workout plans. My MVP for this app was to allow the user to:</p>
            <ul>
              <li>create custom workout plans, saved in history with a name</li>
              <li>add and remove sets from a workout plan</li>
              <li>select from pre-programmed activities, as well as able to enter custom inputs</li>
              <li>follow a workout while at the gym, viewing and editing progress set by set</li>
              <li>have a saved record of workout performance and view it in a history</li>
            </ul>
            <p>Additional features in the final product included:</p>
            <ul>
              <li>ability to add or delete similar sets from the workout overview screen</li>
              <li>skip a set with one click</li>
            </ul>
          </div>
        )
        break
      case 'iDrinkies':
        text = (
          <div className="project-info-text">
            <p>A web application built in vanilla JavaScript, utilising the Google Maps API and a local Node Express API with MongoDB. The example brief for this project (undertaken as part of CodeClan studies) was:</p>
            <p>Create a stockist locator for independent brewer "iDrinkies". The application should feature:</p>
            <ul>
              <li>a GoogleMap showing the location of all stockists</li>
              <li>markers indicating the location of stockists</li>
              <li>info windows on markers showing stockist details and distance from the user's current location</li>
              <li>search box (with autocomplete) allowing search by street, area, postcode
              </li>
              <li>button to use current location to find stockists</li>
              <li>expanding and collapsing information list for each stockist</li>
            </ul>
          </div>
        )
        break
      case 'starWars':
      text = (
        <div className="project-info-text">
          <p>This web application pulls data from the <a href="http://swapi.co/api/planets/">Star Wars API</a> and displays it in a table. Features include: </p>
          <ul>
            <li>Responsive design, including alternate mobile/tablet layout</li>
            <li>Sortable column headers (desktop screens only)</li>
            <li>Search by planet name</li>
            <li>Paginated view, including footer to navigate between pages</li>
          </ul>
          <p>Built using vanilla JavaScript, although having now learned front-end frameworks such as React, it is my intention to revisit!</p>
          
        </div>
      )
      break
      case 'battleships':
      text = (
        <div className="project-info-text">
          <p>A multiplayer game of battleships, built with React JavaScript, socket.io and Node Express server. Each player has a primary board and a tracking board; players play in real time against each other to try to hit each others' ships. Web sockets are used for transferral of information between players.</p>
          <p>Visit the <a href={this.props.currentSelection.githubLink}>GitHub page</a> for instructions on how to download and play!</p>
        </div>
      )
      break
      case 'hooses':
      text = (
        <div className="project-info-text">
          <p>Undertaken as my final project at CodeClan, the Hooses web application is a real-world brief designed to meet the need for better communication between co-owners of properties. Built using a Rails 5 API (with Postgres database), Node Express client-side server, socket.io, and React JavaScript front-end utilising Bootstrap. The application is currently still a work in progress, but currently features functionality such as:</p>
          <ul>
            <li>Authentication with Devise secure login</li>
            <li>Owners may belong to more than one 'co-owner group' with other users who part-own the same property</li>
            <li>Users can maintain/edit their profile</li>
            <li>Live chat between property co-owners utilising sockets</li>
            <li>Financial reporting for a property using Highcharts API and Postgres database</li>
            <li>Users may view/add/delete topics and related messages for their properties</li>
          </ul>
          <p>Work continues on this project, including the front-end design which was initially developed as part of a rapid proof of concept/prototype in order to meet the 6 day project timeline.</p>
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