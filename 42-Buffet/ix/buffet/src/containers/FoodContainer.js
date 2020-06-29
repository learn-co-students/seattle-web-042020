import React from 'react'
import Food from '../components/Food'
import Plate from '../components/Plate'

const FoodContainer = (props) => {
    console.log(props)
    const sendFoods = () => {
       return props.food.map(dish => <Food food={dish} addFoodToPlate={props.addFoodToPlate}/>)
    }
    const sendPlates = () => {
        return props.plate.map(dish => <Plate plate={dish} eatFood={props.eatFood} />)
     }
    // const sendFoods = () => props.food.map(dish => <Food food={dish}/>)
     
    return (
        <div>
        <div className="food">
           { sendFoods()}
        </div>
        <div className="food">
             {sendPlates()}
        </div>
        </div>
    )
}

export default FoodContainer