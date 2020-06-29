import React from 'react'

const Food = (props) => {
    console.log("food props", props)
    const {name,image} = props.food

    const handleClick = () => {
        props.addFoodToPlate(props.food)
    }
    return(
        <div>
            <h1>{name}</h1>
            <img src={image} onClick={handleClick}></img>
            {/* <img src={image} onClick={()=> props.addFoodToPlate)}></img>
            <img src={image} onClick={props.addFoodToPlate}></img> */}
        
        </div>

    )
}

export default Food