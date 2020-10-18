import React, { Component } from 'react';
import logo from './assets/netflix-logo.svg';
import AppBar from './components/AppBar/AppBar';
import AppLogo from './components/AppLogo/AppLogo';
import NavItem from './components/NavItem/NavItem';
import './index.css';

/**
 * Components let you split the UI into independent, reusable pieces, and think
 * about each piece in isolation. Conceptually, components are like JavaScript
 * functions. They accept arbitrary inputs (called “props”) and return React elements
 * describing what should appear on the screen.
 *
 * React required that all component name be start with a capital letter.
 */

// 01 - Class Components
// 03 - Composing component
export default class ReactComponent extends Component {
  render() {
    return (
      <AppBar>
        <AppLogo logo={logo} />
        <NavItem path="/">Home</NavItem>
        <NavItem path="/tvShows">TV Shows</NavItem>
        <NavItem path="/movies">Movies</NavItem>
        <NavItem path="/myList">My List</NavItem>
        <div className="grow" />
        <NavItem path="/search">Search</NavItem>
      </AppBar>
    );
  }
}
