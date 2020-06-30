import React from 'react'

const Plate = (props) => {
    const {name,image} = props.plate

    const handleClick = () => {
        props.eatFood(props.plate)
    }
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} onClick={handleClick}></img>
        
        </div>

    )
}

export default Plate