import React from 'react'
import Thumbnail from './Thumbnail'

class ImageArea extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentImage: props.currentSelection.photos[0]
    }
  }

  handleThumbClick(e){
    this.setState({currentImage: this.props.currentSelection.photos[e.target.id]})
  }


  render(){

    const thumbnails = this.props.currentSelection.photos.map((photo, index) => {
      return <Thumbnail image={photo} key={index} id={index} clickHandler={this.handleThumbClick.bind(this)}/>
    })

    return(
      <div className="images">
        <div className="thumbs">
        {thumbnails}
        </div>
        <div className="main-image">
          <img src={this.state.currentImage} />
        </div>
      </div>

    )
  }

}

export default ImageArea