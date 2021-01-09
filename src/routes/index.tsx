import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import { CreateUser, UpdateUser } from '../pages/User';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create-user" component={CreateUser} />
    <Route exact path="/update-user" component={UpdateUser} />
  </Switch>
);

export default Routes;
