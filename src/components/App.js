import React from 'react';
import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll, getByType } from '../data/pets.js'


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

  componentDidMount() {
    this.setState({pets: getAll()})
  }


  filterPets = (type) => {
    console.log(type);
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
  }

  filterPet = () => {
    let type = this.state.filters.type
    if(this.state.filters.type !== 'all') {
      this.setState({pets: getByType(type)})
    } else {
      this.setState({pets: getAll()})
    }
  }
  adoptedPets = (pet) => {
    if(!this.state.adoptedPets.includes(pet)) {
      this.setState({adoptedPets: [...this.state.adoptedPets, pet]})
    }
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
              <Filters filterPets={this.filterPets} filterPet={this.filterPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
