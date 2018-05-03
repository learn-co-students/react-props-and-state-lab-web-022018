import React from 'react';
import Pet from './Pet';
export default class PetBrowser extends React.Component {
  render() {
  	let allPets = this.props.pets.map((pet) => {
      return <Pet
        pet={pet}
      	onAdoptPet={this.props.onAdoptPet}
      	isAdopted={this.props.adoptedPets.includes(pet.id)}/>
      })

    return (
      <div className="ui cards">
        {allPets}
      </div>
    )
  }
}
