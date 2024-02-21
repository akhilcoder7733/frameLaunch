// App.js
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LayoutRoutes from './components/LayoutRoutes';

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;