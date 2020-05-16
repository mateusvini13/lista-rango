import React from 'react';
import { createBrowserHistory } from "history";
import { Switch, Route, Router } from 'react-router-dom'

import Global from './global';
import { Main, Menu } from './pages';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Global />
      <ToastContainer />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cardapio/:id?" component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
