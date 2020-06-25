import React from 'react'

class Filters extends React.Component {
  onFindPetsClick = () =>{
    this.props.fetchAllPets()
  }

  handleChange = (e) => {
    this.props.changePets(e.target.value)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field" onChange={this.handleChange}>
          <select name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
