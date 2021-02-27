import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { RootState } from './store/store';

const selectIsLogedIn = (state: RootState) => state.auth.token != null;

const App = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );
  if (isLogedIn) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  }
  return <>{routes}</>;
};

export default withRouter(App);
