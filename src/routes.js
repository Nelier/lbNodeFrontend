import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import login from './pages/login';
import home from './pages/home'
import account from './pages/account'

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={login} />
          <Route path="/home" exact component={home} />
          <Route path="/account" exact component={account} />
        </Switch>
      </logProvider>
    </BrowserRouter >
  );
}
