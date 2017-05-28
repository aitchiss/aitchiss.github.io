import React from 'react'
import SlideImage from './SlideImage'

class ImageArea extends React.Component{



  render(){

    if (this.props.currentSelection.photos){
      const thumbnails = this.props.currentSelection.photos.map((photo, index) => {
        return <SlideImage image={photo} key={index} id={index} />
      })  


      return(
        <div className="images">
          <div id="carousel-project-images" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {thumbnails}
            </div>

            
            <a className="left carousel-control" href="#carousel-project-images" role="button" data-slide="prev" >
              <span className="glyphicon glyphicon-chevron-left" style={{color: this.props.currentSelection.colour}}></span>
            </a>
            <a className="right carousel-control" href="#carousel-project-images" role="button" data-slide="next" >
              <span className="glyphicon glyphicon-chevron-right" style={{color: this.props.currentSelection.colour}}></span>
            </a>
          </div> 
          <p><a href={this.props.currentSelection.githubLink}>Check out the code on GitHub </a></p>
          <ul className="nav-links">
                   
            <li><a href="http://github.com/aitchiss" style={{color: this.props.currentSelection.colour}}><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>

            <li><a href="https://www.linkedin.com/in/suzanne-aitchison-59aa2838/" style={{color: this.props.currentSelection.colour}}><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="mailto:suzanne.aitchison@gmail.com" style={{color: this.props.currentSelection.colour}}><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
          </ul>
        </div>

      ) 
    } else {
      return(
        <div className="images">
          <p><a href={this.props.currentSelection.githubLink}>Check out the code on GitHub </a></p>
          <ul className="nav-links">
                   
            <li><a href="http://github.com/aitchiss" style={{color: this.props.currentSelection.colour}}><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>

            <li><a href="https://www.linkedin.com/in/suzanne-aitchison-59aa2838/" style={{color: this.props.currentSelection.colour}}><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
            <li><a href="mailto:suzanne.aitchison@gmail.com" style={{color: this.props.currentSelection.colour}}><i className="fa fa-envelope fa-2x" aria-hidden="true"></i></a></li>
          </ul>
        </div>
      )
    }

    
  }

}


export default ImageArea