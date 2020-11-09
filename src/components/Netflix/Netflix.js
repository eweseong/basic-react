import React, { useCallback, useState } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import logo from '../../assets/netflix-logo.svg';
import AppBar from '../../components/AppBar/AppBar';
import AppLogo from '../../components/AppLogo/AppLogo';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import NavItem from '../../components/NavItem/NavItem';
import { useUserContext } from '../../contexts/UserContext';
import HomeView from '../../routes/Home/Home';
import MyListView from '../../routes/MyList/MyList';
import ShowDetailView from '../../routes/ShowDetail/ShowDetail';
import './Netflix.css';

function Netflix() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { setUser } = useUserContext();

  const login = useCallback(() => {
    setLoggedIn(true);
    setUser('johndoe');
  }, [setUser]);

  const logout = useCallback(() => {
    setLoggedIn(false);
    setUser(null);
  }, [setUser]);

  const button = isLoggedIn ? (
    <LogoutButton logout={logout} />
  ) : (
    <LoginButton login={login} />
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
            <HomeView />
          </Route>
          <Route path="/myList" exact>
            <MyListView />
          </Route>
          <Route path="/shows/:id/:name?" exact>
            <ShowDetailView />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default withRouter(Netflix);
