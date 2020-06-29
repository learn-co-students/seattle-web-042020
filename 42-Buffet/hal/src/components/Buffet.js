import React, { Component } from "react";
import Food from "./Food";

class Buffet extends Component {
  //should recieve a food-adding function prop from App

  displayBuffet = () => {
    return this.props.buffetFood.map(food=>{
      return <Food item={food} key={food.id} addFoodRefencer={this.addFoodRefencer} id={food.id}/>
    })
  };

  addFoodRefencer = (id) => {
    //  add the ref!
    //send up isBuffet argument somewhere
    this.props.foodClickedOn(true, id)
  }

  render() {
    return (
      <div className="container jumbotron">
        <h4>BUFFET CONTENTS</h4>
        <div className="row">{this.displayBuffet()}</div>
      </div>
    );
  }
}

export default Buffet;
