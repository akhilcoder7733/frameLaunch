// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutRoutes from './components/LayoutRoutes';

function App() {
  return (
    <Router>
      <LayoutRoutes />
    </Router>
  );
}

export default App;