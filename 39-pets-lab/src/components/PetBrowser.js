import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => this.props.pets.map(pet => <Pet pet={pet} key={pet.id} handleAdopt={this.props.handleAdopt}/>)
  // renderPets = () => {
  //   return  this.props.pets.map(pet => {
  //     return <Pet pets={pet} key={pet.id}/>
  //   })
  // }
  render() {
  return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
