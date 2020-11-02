import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Netflix from './components/Netflix/Netflix';
import './index.scss';

export default function NetflixRouter() {
  return (
    <Router>
      <ErrorBoundary>
        <Netflix />
      </ErrorBoundary>
    </Router>
  );
}
