import React from 'react';
import './Navbar.css';
import '../reset.css';

const Navbar = props => (
  <div id="navbar-container">
    <div id="button-container">
      <button className="button">home</button>
      <button className="button">about</button>
      <button className="button">artists</button>
      <button className="button">music</button>
      <button className="button">blog</button>
      <button className="button">contact</button>
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
