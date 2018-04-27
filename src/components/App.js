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

  handleChangeType = (type) => {
    this.setState({
      filters: {type: type}
    })
  }

  handleClick = (e) => {
    this.fetchPets()
  }

  handleAdopt = (petId) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      url = `${url}?type=${this.state.filters.type}`
    }
    fetch(url).then(res=>res.json()).then(pets=>this.setState({pets}))
  }

  render() {
    const {pets, adoptedPets, filters} = this.state
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={filters.type} onChangeType={this.handleChangeType} onFindPetsClick={this.handleClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={pets} adoptedPets={adoptedPets} onAdoptPet={this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
