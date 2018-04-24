import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const justThis = this.props.pets.map(pet=>{
        return <Pet
        key={pet.id}
        pet={pet}
        onAdoptPet={this.props.onAdoptPet}
        isAdopted={this.props.adoptedPets.includes(pet.id)}
        />
      }
    )
    // const petRenderFunc = this.props.pets.map(pet=>
    //     <Pet
    //       pet={pet}
    //     />
    // )

    return (
      <div className="ui cards">
        {justThis}
      </div>
    );
  }
}


export default PetBrowser;

// {this.props.pets.map(pet=>{
//   return <Pet
//   key={pet.id}
//   weight={pet.weight}
//   name={pet.name}
//   age={pet.age}
//   gender={pet.gender}
//   type={pet.type}
//   />
// })}
