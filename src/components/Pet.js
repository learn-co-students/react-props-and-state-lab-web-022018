import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }
  handleAdoption = event => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {pet: {name, type, age, weight, gender}, isAdopted} = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {name} {gender === 'male' ? '♂' : '♀'} </a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
        {isAdopted ?
          <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={this.handleAdoption}>Adopt pet</button>}


        </div>
      </div>
    );
  }
}

export default Pet;
