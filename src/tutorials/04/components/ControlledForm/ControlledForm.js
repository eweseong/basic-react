import React, { Component } from 'react';

/**
 * Controlled Components
 *
 * In HTML, form elements such as <input>, <textarea>, and <select>
 * typically maintain their own state and update it based on user
 * input. In React, mutable state is typically kept in the state
 * property of components, and only updated with setState().
 *
 * We can combine the two by making the React state be the “single
 * source of truth”. Then the React component that renders a form
 * also controls what happens in that form on subsequent user input.
 *
 * An input form element whose value is controlled by React in this
 * way is called a “controlled component”.
 */
export default class ControlledForm extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  /**
   * Handling Multiple Inputs
   *
   * When you need to handle multiple controlled input elements, you
   * can add a name attribute to each element and let the handler
   * function choose what to do based on the value of event.target.name.
   */
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome ${this.state.firstName}, ${this.state.lastName}`);
    this.props.save({
      ...this.state,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Controlled Form</h2>
        <p>
          <label>
            First Name:{' '}
            <input type="text" name="firstName" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Last Name:{' '}
            <input type="text" name="lastName" onChange={this.handleChange} />
          </label>
        </p>
        <input type="submit" value="Save" />
      </form>
    );
  }
}
