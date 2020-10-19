import React from 'react';
import './Switch.css';

export default function Switch({ label }) {
  return (
    <div className="switch-container">
      <label>{label}</label>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}
