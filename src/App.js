import React from 'react';
import Bad from './components/Bad';
import Good from './components/Good';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const yeaOrNay = Math.floor((Math.random() * 10) + 1);
  if(yeaOrNay % 2 === 0) {
    return (
      <ErrorBoundary>
        <Good />
      </ErrorBoundary>
    );
  } else {
    return (
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
    );
  }
}

export default App;
