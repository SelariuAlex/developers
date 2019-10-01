import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/NavBar/Navbar.component';
import Landing from './components/layout/Landing/Landing.component';
import Login from './components/auth/Login/Login.component';
import Register from './components/auth/Register/Register.component';
import Alert from './components/layout/Alert/Alert.component';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Alert />
          </section>
        </>
      </Router>
    </Provider>
  );
}

export default App;
