import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import Blog from './components/App/Blog/Blog';
import About from './components/App/About/About';
import Artists from './components/App/Artists/Artists';

import Contact from './components/App/Contact/Contact';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/contact" component={Contact} />
    </Route>

  </Router>
  ), document.querySelector('#root-container'));
