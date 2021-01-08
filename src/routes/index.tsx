import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Create from '../pages/Create';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create-user" component={Create} />
  </Switch>
);

export default Routes;
