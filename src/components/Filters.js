import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();

    this.state={
      selector: "all"
    }

  }

  handleChange = (e) => {
    // console.log(e.target.value)
    this.setState({selector: e.target.value})
  }

  handleClick = (e) => {
    // console.log(e.target)
    this.props.filterPets(this.state.selector)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChange} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.handleClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
