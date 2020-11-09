import React, { Component } from 'react';

export default class MyList extends Component {
  state = {
    counter: 0,
  };

  addCounter = () => {
    /**
     * Error boundaries do not catch errors inside event handlers.
     *
     * React doesn’t need error boundaries to recover from errors
     * in event handlers. Unlike the render method and lifecycle
     * methods, the event handlers don’t happen during rendering.
     * So if they throw, React still knows what to display on the
     * screen.
     *
     * If you need to catch an error inside event handler, use the
     * regular JavaScript try / catch statement
     */
    // if (this.state.counter === 5) {
    //   throw new Error('Counter error');
    // }

    this.setState((oldState) => ({
      counter: oldState.counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('Counter error');
    }

    return (
      <>
        <div>My List</div>
        <br />
        <button type="button" className="btn" onClick={this.addCounter}>
          Add Counter ({this.state.counter})
        </button>
      </>
    );
  }
}
