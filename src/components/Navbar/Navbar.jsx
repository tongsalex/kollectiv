import React from 'react';
import { Link } from 'react-router'
import './Navbar.css';
import '../reset.css';

const Navbar = props => (
  <div id="navbar-container">
    <div id="button-container">
      <Link to="/" className="button">blog</Link>
      <Link to="/about" className="button">about</Link>
      <Link to="/artists" className="button">artists</Link>
      <Link to="/contact" className="button">contact</Link>
    </div>
    <div id="navbar-social-media-container">
      <img src={require('./twitter.png')} alt="twitter" className="logos" id="twitter" />
      <img src={require('./instagram.png')} alt="instagram" className="logos" />
      <img src={require('./facebook.png')} alt="facebook" className="logos" />
    </div>
    <div id="navbar-search-container">
      <img src={require('./search.png')} alt="search" id="search" />
    </div>
  </div>
    );

export default Navbar;
