import React from 'react';
import './AppLogo.css';

// import logo2 from '../../assets/netflix-logo.svg';

/**
 * When React sees an element representing a user-defined component, it passes
 * JSX attributes and children to this component as a single object. We call
 * this object “props”.
 */
// 02 - Component props
// 05 - Props are read-only
export default function AppLogo(props) {
  // props.logo = logo2;

  return (
    <div className="app-logo">
      <img src={props.logo} alt="logo" />
    </div>
  );
}
