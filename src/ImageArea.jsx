import React from 'react'
import SlideImage from './SlideImage'

class ImageArea extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentImage: props.currentSelection.photos[0]
    }
  }

  // handleThumbClick(e){
  //   this.setState({currentImage: this.props.currentSelection.photos[e.target.id]})
  // }

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
          
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          
          <div className="carousel-inner">
            {thumbnails}
          </div>

          
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div> 
      </div>

    )
  }

}
//
//<div className="thumbs">
//{thumbnails}
//</div>
//<div className="main-image">
//  <img src={this.state.currentImage} />
//</div>

export default ImageArea