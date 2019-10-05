import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login/Login.component';
import Register from '../auth/Register/Register.component';
import Alert from '../layout/Alert/Alert.component';
import Dashboard from '../dashboard/Dashboard.component';
import PrivateRoute from '../routes/PrivateRoute.component';
import NotFound from '../layout/NotFound/NotFound.component';

const Routes = () => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
      <Alert />
    </section>
  );
};

export default Routes;
