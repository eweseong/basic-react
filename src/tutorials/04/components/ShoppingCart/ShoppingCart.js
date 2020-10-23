import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  // State initialisation in constructor
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    /**
     * If you forget to bind this.addToCart and pass it to onClick, this will
     * be undefined when the function is actually called. This is not
     * React-specific behavior; it is a part of how functions work in JavaScript.
     * Generally, if you refer to a method without () after it, such as
     * onClick={this.addToCart}, you should bind that method.
     *
     * If calling bind annoys you, there are two ways you can get around this.
     */
    //
    this.addToCart = this.addToCart.bind(this);
  }

  incrementCount(e) {
    /**
     * Here, e is a synthetic event. React defines these synthetic events according
     * to the W3C spec, so you don’t need to worry about cross-browser compatibility.
     * React events do not work exactly the same as native events. See the SyntheticEvent
     * reference guide to learn more. When using React, you generally don’t need to call
     * addEventListener to add listeners to a DOM element after it is created. Instead,
     * just provide a listener when the element is initially rendered.
     */
    e.preventDefault();
    e.stopPropagation();

    // update state explicitly doesn't work
    this.state.count = this.state.count + 1; // this prompts React warning

    /**
     * Calls to setState are asynchronous - don’t rely on this.state to reflect the
     * new value immediately after calling setState. Reason being React may batch
     * multiple setState() calls into a single update for performance.
     */
    this.setState({
      count: this.state.count + 1,
    });

    /**
     * Pass an updater function instead of an object if you need to compute values
     * based on the current state value
     */
    // this.setState((state) => {
    //   return {
    //     count: state.count + 1,
    //   };
    // });
  }

  /**
   * You have to be careful about the meaning of this in JSX callbacks.
   * In JavaScript, class methods are not bound by default.
   */
  addToCart(e) {
    this.incrementCount(e);
    this.incrementCount(e);
    this.incrementCount(e);
    this.incrementCount(e);
  }

  /**
   * Method #1
   *
   * If you are using the experimental public class fields syntax, you can
   * use class fields to correctly bind callbacks:
   */
  addToCartWithClassFieldSyntaax = (e) => {
    this.incrementCount(e);
  };

  /**
   * Method #2
   *
   * If you aren’t using class fields syntax, you can use an arrow function
   * in the callback.
   */
  addToCartWithArrowFunctionInCallBack(e) {
    this.incrementCount(e);
  }

  render() {
    return (
      <div>
        <h1>Shopping Cart ({this.state.count})</h1>
        <button type="button" onClick={this.addToCart}>
          Add to cart (normal)
        </button>
        <br />
        <br />
        <button type="button" onClick={this.addToCartWithClassFieldSyntaax}>
          Add to cart (with bound)
        </button>
        <br />
        <br />
        <button
          type="button"
          onClick={(e) => this.addToCartWithArrowFunctionInCallBack(e)}
        >
          Add to cart (arrow function in callback)
        </button>
      </div>
    );
  }
}
