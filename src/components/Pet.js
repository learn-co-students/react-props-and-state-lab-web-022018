import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.state = {
      adopted: false
    }
  }

  handleClick = () => {
    this.setState({adopted: true})
    this.props.adoptedPets(this.props.pet)
  }


  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} {this.props.pet.gender === "male" ? "♂" : "♀"}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button onClick={this.handleClick} className="ui primary button">{(this.state.adopted)? "Already adopted" : "Adopt pet"}</button>
        </div>
      </div>
    );
  }
}

export default Pet;
