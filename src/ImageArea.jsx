import React from 'react'
import SlideImage from './SlideImage'

class ImageArea extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentImage: props.currentSelection.photos[0]
    }
  }

  

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({currentImage: nextProps.currentSelection.photos[0]})
    }
  }


  render(){

    const thumbnails = this.props.currentSelection.photos.map((photo, index) => {
      return <SlideImage image={photo} key={index} id={index} />
    })


    return(
      <div className="images">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {thumbnails}
          </div>

          
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev" >
            <span className="glyphicon glyphicon-chevron-left" style={{color: this.props.currentSelection.colour}}></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next" >
            <span className="glyphicon glyphicon-chevron-right" style={{color: this.props.currentSelection.colour}}></span>
          </a>
        </div> 
        <p><a href={this.props.currentSelection.githubLink}>Check out the code on GitHub </a></p>
      </div>

    )
  }

}


export default ImageArea