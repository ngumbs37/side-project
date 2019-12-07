import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css';
import Nav from './pages/components/Nav'
import Home from './pages/Home'
import User from './pages/User'
import * as serviceWorker from './serviceWorker';

render(
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
    </Switch>
  </Router>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
