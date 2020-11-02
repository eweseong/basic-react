import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import logo from '../../assets/netflix-logo.svg';
import AppBar from '../../components/AppBar/AppBar';
import AppLogo from '../../components/AppLogo/AppLogo';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import NavItem from '../../components/NavItem/NavItem';
import HomeView from '../../routes/Home/Home';
import MyListView from '../../routes/MyList/MyList';
import ShowDetailView from '../../routes/ShowDetail/ShowDetail';
import './Netflix.css';

class Netflix extends Component {
  state = {
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

  render() {
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
          <NavItem path="/myList">My List</NavItem>
          <div className="grow" />
          {button}
        </AppBar>
        <main>
          <Switch>
            <Route path="/" exact>
              <HomeView {...this.state} />
            </Route>
            <Route path="/myList" exact>
              <MyListView {...this.state} />
            </Route>
            <Route path="/shows/:id/:name?" exact>
              <ShowDetailView {...this.state} />
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default withRouter(Netflix);
