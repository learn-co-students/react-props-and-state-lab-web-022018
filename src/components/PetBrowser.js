import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(){
    super()
  }

  render() {
    const PETS = this.props.pets.map(pet=> <Pet pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} onAdoptPet={this.props.onAdoptPet}/>)
    return (
      <div className="ui cards">
        { PETS }
      </div>
    );
  }
}

export default PetBrowser;
