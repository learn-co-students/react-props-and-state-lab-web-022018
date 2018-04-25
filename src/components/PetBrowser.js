import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {console.log(this.props)}
        {this.props.pets.map(pet => <Pet data={pet} key={pet.id} />)} &nbsp; components should go here
      </div>
    );
  }
}

export default PetBrowser;
