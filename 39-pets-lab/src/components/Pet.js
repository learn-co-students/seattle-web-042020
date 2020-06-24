import React from 'react'

class Pet extends React.Component {

  handleClick = () => {
    this.props.handleAdopt(this.props.pet.id)
  }

  render() {
    const {name, age, weight, isAdopted, type, gender} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "male"?'♀':'♂'}
            {name}
          </a>
          <div className="meta">
    <span className="date">{type}</span>
          </div>
          <div className="description">
    <p>Age: {age}</p>
    <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">{
          isAdopted?<button className="ui disabled button">Already adopted</button>:
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
        }
        </div>
      </div>
    )
  }
}

export default Pet
