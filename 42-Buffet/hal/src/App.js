import React, { Component } from "react";
import "./App.css";
import Buffet from "./components/Buffet";
import Plate from "./components/Plate";

class App extends Component {
  state = {
    buffetFood: [],
    plateFood: []
  };

  componentDidMount(){
    // load only once, and right at the start of the app rendering
    fetch("http://localhost:3000/food")
    .then(resp=>resp.json())
    .then(data=> this.setState({
      buffetFood: data
    }))
  }

  addFoodtoPlate = (id) => {
    // find the right food
    // add food to our plate
    let füd = this.state.buffetFood[id-1]

    this.setState(prevState=> {
      return {plateFood: [...prevState.plateFood, füd]}
    })
  }

  removeFood = (id) => {
    console.log(id)
  }

  foodClickedOn = (isBuffet, id) => {
    isBuffet ? this.addFoodtoPlate(id) : this.removeFood(id)
  }

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <Buffet buffetFood={this.state.buffetFood} foodClickedOn={this.foodClickedOn}/>
        <Plate plateFood={this.state.plateFood} foodClickedOn={this.foodClickedOn}/>
      </div>
    );
  }
}

export default App;
