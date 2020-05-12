import React from 'react';
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from 'react-router-dom'

import Global from './global';
import { Main, Menu } from './pages';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Global />

      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
