import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Highlights from './views/Highlights';
import ActivityFeed from './views/ActivityFeed';
import WorldMap from './views/WorldMap';




export const ViewRoutes =() => (
  <Switch>
  <Route exact path="/" component={Highlights} />

  <Route path="/ActivityFeed" component={ActivityFeed} />
  <Route path="/WorldMap" component={WorldMap} />
  </Switch>
);

export default ViewRoutes;
