import React, { Component } from 'react';
import logo from './assets/netflix-logo.svg';
import netflixOriginals from './assets/netflix-originals.json';
import trendingNow from './assets/trending-now.json';
import AppBar from './components/AppBar/AppBar';
import AppLogo from './components/AppLogo/AppLogo';
import ControlledForm from './components/ControlledForm/ControlledForm';
import Filter from './components/Filter/Filter';
import Greeting from './components/Greeting/Greeting';
import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import NavItem from './components/NavItem/NavItem';
import PosterList from './components/PosterList/PosterList';
import UncontrolledForm from './components/UncontrolledForm/UncontrolledForm';
import './index.css';

export default class Netflix extends Component {
  state = {
    filter: '',
    profile: null,
    user: null,
    isLoggedIn: false,
  };

  login = () => {
    this.setState({
      username: 'johndoe',
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      username: null,
      isLoggedIn: false,
    });
  };

  updateProfile = (profile) => {
    this.setState({ profile });
  };

  updateFilter = (filter) => {
    this.setState({ filter });
  };

  filterByName = ({ name = '' }) => {
    return name.toLowerCase().includes(this.state.filter.toLowerCase());
  };

  render() {
    /**
     * Element Variables
     *
     * You can use variables to store elements. This can help you conditionally
     * render a part of the component while the rest of the output doesn’t change.
     */
    const button = this.state.isLoggedIn ? (
      <LogoutButton logout={this.logout} />
    ) : (
      <LoginButton login={this.login} />
    );

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
          {button}
        </AppBar>
        <main>
          <Greeting username={this.state.username} />

          {/* 
              Inline If with Logical && Operator
              
              You may embed expressions in JSX by wrapping them in curly braces.
              This includes the JavaScript logical && operator. It can be handy 
              for conditionally including an element: 
            */}
          {this.state.isLoggedIn && (
            <>
              <ControlledForm save={this.updateProfile} />
              <UncontrolledForm save={this.updateProfile} />
            </>
          )}

          <Filter filter={this.updateFilter} />
          <PosterList
            title="netflix originals"
            posters={netflixOriginals.filter(this.filterByName)}
          />
          <PosterList
            title="trending now"
            posters={trendingNow.filter(this.filterByName)}
          />
          <PosterList title="empty list" posters={[]} />
        </main>
      </>
    );
  }
}
