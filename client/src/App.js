import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/NavBar/Navbar.component";
import Landing from "./components/layout/Landing/Landing.component";
import Footer from "./components/layout/Footer/Footer.component";
import Routes from "./components/routes/Routes.component";

import { loadUser } from "./redux/actions/auth.action";
import setAuthToken from "./utils/setAuthToken.service";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
