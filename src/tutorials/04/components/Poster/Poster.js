import React from 'react';
import './Poster.css';

export default function Poster({ name, image }) {
  return (
    <div className="poster">
      <img className="poster__image" src={image} alt={name} />
    </div>
  );
}
