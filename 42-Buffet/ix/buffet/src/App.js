import React, {Component} from 'react';
import FoodContainer from './containers/FoodContainer'
import './App.css'

let url = 'http://localhost:3000/food'

class App extends Component {
  state = {
    food:[],
    plate:[]
  }

  componentDidMount(){
    this.handleFetch()
  }


  handleFetch = () =>{
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({food:json})
    })
  }

  addFoodToPlate = (food) => {
    this.setState({plate:[...this.state.plate,food]})
  
  }

  eatFood = (food) => {
    console.log(food)
    this.setState({plate:[...this.state.plate.filter(plate => plate.name !== food.name)]})
    
  }

render(){
console.log(this.state)
  return (
    <div className="App">
      <FoodContainer food={this.state.food} addFoodToPlate={this.addFoodToPlate} plate={this.state.plate} eatFood={this.eatFood} />
    </div>
  );
}

}

export default App;
