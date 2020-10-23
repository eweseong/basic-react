import React, { Component } from 'react';

/**
 * Uncontrolled Components
 *
 * To write an uncontrolled component, instead of writing an
 * event handler for every state update, you can use a `ref` to
 * get form values from the DOM.
 */
export default class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.firstNameInput = React.createRef();
    this.lastNameInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const firstName = this.firstNameInput.current.value;
    const lastName = this.lastNameInput.current.value;
    alert(`Welcome ${firstName}, ${lastName}`);
    this.props.save({
      firstName,
      lastName,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Uncontrolled Form</h2>
        <p>
          <label>
            First Name: <input type="text" ref={this.firstNameInput} />
          </label>
        </p>
        <p>
          <label>
            Last Name: <input type="text" ref={this.lastNameInput} />
          </label>
        </p>
        <input type="submit" value="Save" />
      </form>
    );
  }
}
