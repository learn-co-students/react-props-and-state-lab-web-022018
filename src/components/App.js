import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  onChangeType = (petType) => {
    this.setState({
      ...this.state,
      filters: {
        type: petType
      }
    })
  }

  onFindPetsClick = () => {
    let type = this.state.filters.type
    let url = ''
    type === 'all' ? url = '/api/pets' : url = `/api/pets?type=${type}`

    fetch(url, {
      headers: {'Content-Type': 'application/json'},
      method: 'get'
    }).then(r => r.json()).then(json => this.setState({...this.state, pets:json}))

    
    
  }

  onAdoptPet = (petId) => {
    this.setState({
      ...this.state,
      adoptedPets: [...this.state.adoptedPets, petId]
    })
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
              <Filters filters={this.state.filters} onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
