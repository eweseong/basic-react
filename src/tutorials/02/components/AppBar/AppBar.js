import React from 'react';
import './AppBar.css';

/**
 * Components let you split the UI into independent, reusable pieces, and think
 * about each piece in isolation. Conceptually, components are like JavaScript
 * functions. They accept arbitrary inputs (called “props”) and return React elements
 * describing what should appear on the screen.
 *
 * React required that all component name be start with a capital letter.
 */

// 01 - Functional Components
export default function AppBar(props) {
  return <div className="app-bar">{props.children}</div>;
}
