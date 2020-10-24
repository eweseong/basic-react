import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Netflix from './components/Netflix/Netflix';
import './index.css';

export default function NetflixRouter() {
  return (
    <Router>
      <Netflix />
    </Router>
  );
}
