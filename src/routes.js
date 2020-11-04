import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import home from './pages/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/home" exact component={home} />
        </Switch>
      </logProvider>
    </BrowserRouter>
  );
}
