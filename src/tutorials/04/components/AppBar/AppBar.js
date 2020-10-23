import React from 'react';
import './AppBar.css';

export default function AppBar(props) {
  return <div className="app-bar">{props.children}</div>;
}
