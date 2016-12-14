import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App/App';
import Blog from './components/App/Blog/Blog';
  import DetailedBlogPost from './components/App/Blog/DetailedBlogPost/DetailedBlogPost';
import About from './components/App/About/About';
import Artists from './components/App/Artists/Artists';
import Contact from './components/App/Contact/Contact';
import Account from './components/App/Account/Account';
  import Profile from './components/App/Account/Profile/Profile';
  import AccountBlogPostsContainer from './components/App/Account/AccountBlogPostsContainer/AccountBlogPostsContainer';
  import EditBlogPost from './components/App/Account/EditBlogPost/EditBlogPost';
  import NewBlogPost from './components/App/Account/NewBlogPost/NewBlogPost';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Blog} />
      <Route path="/blog/:id" component={DetailedBlogPost} />
      <Route path="/about" component={About} />
      <Route path="/artists" component={Artists} />
      <Route path="/contact" component={Contact} />
      <Route path="/account" component={Account}>
        <Route path="/profile" component={Profile} />
        <Route path="/blogposts" component={AccountBlogPostsContainer} />
        <Route path="/blogposts/:id" component={EditBlogPost} />
        <Route path="/createpost" component={NewBlogPost} />
      </Route>
    </Route>
  </Router>
  ), document.querySelector('#root-container'));
