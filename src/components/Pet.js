import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();

    this.state = {
      adopted: false
    }
  }

  adoptHandler = (e) => {
    this.setState({adopted: true})
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name {this.props.data.gender === "male" ? "♂" : "♀"} {this.props.data.name}</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.data.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.data.age}</p>
            <p>Weight: {this.props.data.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.state.adopted ? <button className="ui disabled button">Already adopted</button> : <button id={this.props.data.id} onClick={this.adoptHandler} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    );
  }
}

export default Pet;
