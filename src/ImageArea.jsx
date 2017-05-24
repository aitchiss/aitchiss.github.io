import React from 'react'
import Thumbnail from './Thumbnail'

class ImageArea extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentImage: props.currentSelection.photos[0]
    }
  }


  render(){

    const thumbnails = this.props.currentSelection.photos.map((photo, index) => {
      return <Thumbnail image={photo} key={index} id={photo + '-' + index}/>
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