import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Netflix from './components/Netflix/Netflix';
import { UserProvider } from './contexts/UserContext';
import './App.scss';

export default function App() {
  return (
    <Router basename="/basic-react">
      <ErrorBoundary>
        <UserProvider>
          <Netflix />
        </UserProvider>
      </ErrorBoundary>
    </Router>
  );
}
