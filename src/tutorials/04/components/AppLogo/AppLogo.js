import React from 'react';
import './AppLogo.css';

export default function AppLogo(props) {
  return (
    <div className="app-logo">
      <img src={props.logo} alt="logo" />
    </div>
  );
}
