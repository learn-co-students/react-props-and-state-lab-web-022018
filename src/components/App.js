import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';
import { getAll, getByType } from '../data/pets';

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

  onAdoptPet= (e)=>{
    const foundPet = getAll().find((pet) => (pet.name === e.target.id))
    console.log(foundPet)
    let newArray = this.state.adoptedPets
    newArray.push(foundPet.id)
    this.setState({
      adoptedPets: newArray,
    })
  }

  onChangeType= (e)=>{
    this.setState({
      filters:{
        type: e.target.value
      }
    })
  }

  onFindPetsClick = (e) => {
    let type = this.state.filters.type
    if (type !== 'all'){
      type = type.slice(0, type.length)
    }
    getByType(type)
  }

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick= {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.filters.type === 'all' ? getAll() : getByType(this.state.filters.type)} onAdoptPet= {this.onAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
