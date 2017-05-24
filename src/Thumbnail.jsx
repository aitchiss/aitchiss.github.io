import React from 'react'

const Thumbnail = (props) => {

  return (
    <div className="thumbnail">
      <img src={props.image} id={props.id} onClick={props.clickHandler}/>
    </div>
  )
}


export default Thumbnail