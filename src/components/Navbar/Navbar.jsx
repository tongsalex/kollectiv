import React from 'react';
import { Link } from 'react-router'
import './Navbar.css';
import '../reset.css';

const Navbar = props => (
  <div id="navbar-container">
    <div id="navbar-button-container">
      <button onClick={props.toggleSidebar} className="navbar-button">Hamburger</button>
      <Link to="/" className="navbar-button">blog</Link>
      <Link to="/about" className="navbar-button">about</Link>
      <Link to="/artists" className="navbar-button">artists</Link>
      <Link to="/contact" className="navbar-button">contact</Link>
      <Link to="/account" className="navbar-button">my account</Link>
    </div>

    <div id="navbar-social-media-container">
      <img src={require('./twitter.png')} alt="twitter" className="navbar-logos" id="twitter" />
      <img src={require('./instagram.png')} alt="instagram" className="navbar-logos" />
      <img src={require('./facebook.png')} alt="facebook" className="navbar-logos" />
    </div>

  </div>
    );

export default Navbar;
