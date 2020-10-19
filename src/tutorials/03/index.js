import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import logo from './assets/netflix-logo.svg';
import AppBar from './components/AppBar/AppBar';
import AppLogo from './components/AppLogo/AppLogo';
import Greeting from './components/Greeting/Greeting';
import LoginButton from './components/LoginButton/LoginButton';
import NavItem from './components/NavItem/NavItem';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './index.css';

export default class Netflix extends Component {
  // State initialisation in class property
  state = {
    date: new Date(),
    user: null,
  };

  /**
   * If you don’t initialize state and you don’t bind methods, you don’t need
   * to implement a constructor for your React component.
   *
   * The constructor for a React component is called before it is mounted.
   * When implementing the constructor for a `React.Component` subclass, you
   * should call super(props) before any other statement. Otherwise, `this.props`
   * will be undefined in the constructor, which can lead to bugs.
   */
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // update clock
  tick() {
    // When you call setState(), React merges the object you provide into the current state.
    this.setState({
      date: new Date(),
    });
  }

  login = () => {
    // When you call setState(), React merges the object you provide into the current state.
    this.setState({
      username: 'johndoe',
    });
  };

  // force trigger unmount
  removeClock = () => {
    unmountComponentAtNode(document.getElementById('root'));
  };

  /**
   * componentDidMount() is invoked immediately after a component is mounted (inserted
   * into the tree). Initialization that requires DOM nodes should go here. If you need
   * to load data from a remote endpoint, this is a good place to instantiate the
   * network request.
   *
   * This method is a good place to set up any subscriptions. If you do that, don’t forget
   * to unsubscribe in componentWillUnmount().
   */
  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  /**
   * The render() method is the only required method in a class component.
   *
   * The render() function should be pure, meaning that it does not modify component
   * state, it returns the same result each time it’s invoked, and it does not directly
   * interact with the browser.
   */
  render() {
    console.log('render');
    return (
      <>
        <AppBar>
          <AppLogo logo={logo} />
          <NavItem path="/">Home</NavItem>
          <NavItem path="/tvShows">TV Shows</NavItem>
          <NavItem path="/movies">Movies</NavItem>
          <NavItem path="/myList">My List</NavItem>
          <div className="grow" />
          <NavItem path="/search">Search</NavItem>
          <LoginButton login={this.login} />
        </AppBar>
        <main>
          <p>
            <span>{this.state.date.toLocaleTimeString()}</span> -&nbsp;
            <Greeting username={this.state.username} />
          </p>
          <button type="button" onClick={this.removeClock}>
            Force unmount
          </button>
          <ShoppingCart />
          <ShoppingCart />
          <ShoppingCart />
        </main>
      </>
    );
  }

  /**
   * componentDidUpdate() is invoked immediately after updating occurs. This method
   * is not called for the initial render. Use this as an opportunity to operate on
   * the DOM when the component has been updated.
   *
   * This is also a good place to do network requests as long as you compare the
   * current props to previous props (e.g. a network request may not be necessary
   * if the props have not changed).
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  /**
   * componentWillUnmount() is invoked immediately before a component is unmounted
   * and destroyed. Perform any necessary cleanup in this method, such as
   * invalidating timers, canceling network requests, or cleaning up any subscriptions
   * that were created in componentDidMount().
   *
   * You should not call setState() in componentWillUnmount() because the component
   * will never be re-rendered. Once a component instance is unmounted, it will never
   * be mounted again.
   */
  componentWillUnmount() {
    window.clearInterval(this.timerID);
    window.alert('componentWillUnmount');
  }
}
