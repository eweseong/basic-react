# Day 03 - State, Lifecycle and Event Handling
The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object.

If some value isn’t used for rendering or data flow (for example, a timer ID), you don’t have to put it in the state. Such values can be defined as fields on the component instance.

Aside from that, each component has several “lifecycle methods” that you can override to run code at particular times in the process.

![React Lifecycle](./react%20lifecycle.png?raw=true)

Some of the key concepts about ***State***:
* states can only be initialised on class constructor and properties
* never mutate `this.state` directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable.
* `setState({})` with object merges the object provided into the state object
* calls to `setState` are asynchronous - don’t rely on `this.state` to reflect the new value immediately after calling `setState`.
* pass an updater function instead of an object if you need to compute values based on the current state value e.g. `setState((state) => ({ value: state.value + 1 }))`

Some of the key concepts about ***Lifecycle***:
* Mounting
  * __constructor()__
  * _static getDerivedStateFromProps()_
  * __render()__
  * __componentDidMount()__
* Updating
  * _static getDerivedStateFromProps()_
  * _shouldComponentUpdate()_
  * __render()__
  * _getSnapshotBeforeUpdate()_
  * __componentDidUpdate()__
* Unmounting
  * __componentWillUnmount()__
* Error Handling**
  * static getDerivedStateFromError()
  * componentDidCatch()

_** Will be cover in future lessons_

# 04 - Event Handling
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:
```HTML
<button onclick="addToCart()">
  Add To Cart
</button>
```

is slightly different in React:
```HTML
<button onClick={addToCart}>
  Add To Cart
</button>
```

Some of the key concepts about ***Event Handling***:
* React events are also synthetic event defined according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the [SyntheticEvent](https://reactjs.org/docs/events.html) reference guide to learn more.
* When using React, you generally don’t need to call `addEventListener` to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
* You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind `this.handler` and pass it to event listener such as `onClick`, this will be `undefined` when the function is actually called. This can be avoided by 1 of the 2 method below:
   
  ```js
  // Method #1
  addToCartWithClassFieldSyntax = (e) => {
    this.incrementCount(e);
  };

  // Method #2
  addToCartWithArrowFunctionInCallBack(e) {
    this.incrementCount(e);
  }
  ```
  ```HTML
  <!-- Method #1 -->
  <button type="button" onClick={this.addToCartWithClassFieldSyntax}>
    Add to cart
  </button>
  
  <!-- Method #2 -->
  <button type="button" onClick={(e) => this.addToCartWithArrowFunctionInCallBack(e)}>
    Add to cart
  </button>
  ```
  