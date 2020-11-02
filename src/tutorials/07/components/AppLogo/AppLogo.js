import React from 'react';
import { Link } from 'react-router-dom';
import './AppLogo.css';

export default function AppLogo(props) {
  return (
    <Link className="app-logo" to="/">
      <img src={props.logo} alt="logo" />
    </Link>
  );
}
