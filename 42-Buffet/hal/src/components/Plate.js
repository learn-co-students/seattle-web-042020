import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {
  // iterate and create food components for each prop
  // steven says we'll need a remove food function as well
  
  renderPlate = () => {
    let a = 0
    return this.props.plateFood.map(food=>{
      return <Food item={food} id={a} key={a++} addFoodRefencer={this.addFoodRefencer}/>
    })
  }

  addFoodRefencer = (id) => {
    //  add the ref!
    //send up isBuffet argument up to App
    this.props.foodClickedOn(false, id)
  }

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
        <div className="row">{this.renderPlate()}</div>
      </div>
    );
  }
}

export default Plate;
