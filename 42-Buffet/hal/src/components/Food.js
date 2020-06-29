import React, { Component } from "react";

class Food extends Component {
  // this needs a function to run

  render() {
    const { name, image } = this.props.item

    return (
      <div className="col col-md-2" onClick={()=>this.props.addFoodRefencer(this.props.id)}>
        <div className="card">
          {/* IMAGE BELOW */}
          <img className="card-img-top" src={image}/>
          <div className="card-body">
            <p>{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Food;
