import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {

    const pet = this.props.pets.map(pet => {
      return <Pet key={pet.id} pet={pet} adoptedPets={this.props.adoptedPets}/>
    })
    return (
      <div className="ui cards">
        {pet}
      </div>
    );
  }
}

export default PetBrowser;
