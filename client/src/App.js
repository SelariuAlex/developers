import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/NavBar/Navbar.component';
import Landing from './components/layout/Landing/Landing.component';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;
