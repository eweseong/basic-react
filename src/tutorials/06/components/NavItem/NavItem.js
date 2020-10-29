import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

export default function NavItem({ path, children }) {
  return (
    <NavLink
      activeClassName="nav-item--active"
      className="nav-item"
      to={path}
      exact
    >
      {children}
    </NavLink>
  );
}
