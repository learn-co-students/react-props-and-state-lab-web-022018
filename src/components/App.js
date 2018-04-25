import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

import {getAll} from '../data/pets.js'
import {getByType} from '../data/pets.js'
import {getBetweenAge} from '../data/pets.js'

// console.log(getAll())

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [...getAll()],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  filterPets = (type) => {
    console.log("stuff")
    this.setState({pets: getByType(type)})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filterPets={this.filterPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={ this.state.pets } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
