import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </logProvider>
    </BrowserRouter>
  );
}
