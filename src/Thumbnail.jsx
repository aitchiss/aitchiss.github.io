import React from 'react'

const Thumbnail = (props) => {

  return (
    <div className="thumbnail">
      <img src={props.image} id={props.id} />
    </div>
  )
}


export default Thumbnail