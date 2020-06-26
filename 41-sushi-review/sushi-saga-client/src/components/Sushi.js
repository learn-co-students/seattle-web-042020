import React, { Fragment } from 'react'

const Sushi = (props) => {
  const handleClick = () => {
    props.wallet >= props.sushi.price? props.eatSushi(props.sushi): alert('sorry you can not afford that sushi')
 
  } 
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        { 
          props.sushi.isEaten === true ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi