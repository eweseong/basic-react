import React from 'react';
import './NavItem.css';

export default function NavItem({ path, children }) {
  return (
    <a className="nav-item" href={path}>
      {children}
    </a>
  );
}
