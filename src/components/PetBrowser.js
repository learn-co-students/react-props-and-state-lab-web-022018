import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  render() {
    let pets = this.props.pets.map((pet)=>(
      <Pet
      key={pet.id}
      id = {pet.id}
      name={pet.name}
      gender={pet.gender}
      age={pet.age}
      type={pet.type}
      weight={pet.weight + "lbs"}
      isAdopted = {(this.props.adoptedPets.find((p)=>(p.id === pet.id))) ? true : false}
      onAdoptPet={this.props.onAdoptPet}/>
    ))
    console.log(pets)
    return (
      <div className="ui cards">
      {pets}
      </div>
    );
  }
}

export default PetBrowser;
