import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import { CreateUser } from '../pages/User';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create-user" component={CreateUser} />
  </Switch>
);

export default Routes;
