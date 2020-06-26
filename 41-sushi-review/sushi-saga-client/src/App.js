import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis : [],
    fourSushi: [],
    sushiIndex:4,
    wallet: 45,
    plates:[]
  }

  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      let fourData = data.slice(0,4)
      this.setState({sushis:data, fourSushi:fourData})
    })
  }

  fourMoreSushi = () => {
    console.log(this.state.fourSushi)
    let updatedFourSushi = this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4)
    this.setState({fourSushi:updatedFourSushi,sushiIndex:this.state.sushiIndex+4})
 
  }  

  eatSushi = (sushi) => {
    let updatedSushis = this.state.sushis.map(sushiItem => sushi.id === sushiItem.id?{...sushiItem, isEaten:true}:sushiItem)
    let updateFourSushi = this.state.fourSushi.map(sushiItem => sushi.id === sushiItem.id?{...sushiItem, isEaten:true}:sushiItem)
    
    this.setState({sushis:updatedSushis, fourSushi:updateFourSushi, wallet: this.state.wallet - sushi.price, plates:[...this.state.plates,sushi]})
   
  }
  
  //[1,2,3,4,5,6,7,8,9,10,11,12]
  //.slice(0,4) [1,2,3,4]
  //.slice(0,4) [1,2,3,4]
  //.slice(4,8)[5,6,7,8]

  render() {
    
    return (
      <div className="app">
        <SushiContainer fourSushi={this.state.fourSushi} fourMoreSushi={this.fourMoreSushi} eatSushi={this.eatSushi} wallet={this.state.wallet}/>
        <Table wallet={this.state.wallet} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;