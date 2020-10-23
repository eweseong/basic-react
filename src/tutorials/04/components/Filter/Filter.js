import React, { Component } from 'react';

export default class Filter extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Filtering: ${this.state.filter}`);
    this.props.filter(this.state.filter);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter by Name:{' '}
          <input type="text" name="filter" onChange={this.handleChange} />
        </label>
        &nbsp;
        <input type="submit" value="Search" />
      </form>
    );
  }
}
