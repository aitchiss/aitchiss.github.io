import React from 'react'

const SlideImage = (props) => {

  let active = ""

  if (props.id === 0){
    active = "active"
  } else {
    active = ""
  }

  return (

    <div className={"item" + " " + active} >
      <img src={props.image} />
    </div>
  )
}


export default SlideImage