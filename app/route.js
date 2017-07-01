import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './home'
import About from './aboutPage'
import Book from './bookPage'
import App from './app'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/about" component={About}></Route>
    <Route path="/books" component={Book}></Route>
  </Route>
);