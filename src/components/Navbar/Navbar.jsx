import React from 'react';
import { Link } from 'react-router'
import './Navbar.css';
import '../reset.css';

const Navbar = props => (
  <div id="navbar-container">
    <div id="navbar-button-container">
      <button onClick={props.openSidebar} className="navbar-button">login</button>

      <Link to="/" className="navbar-button">blog</Link>
      <Link to="/about" className="navbar-button">about</Link>
      <Link to="/artists" className="navbar-button">artists</Link>
      <Link to="/contact" className="navbar-button">contact</Link>
      <Link to="/account" className="navbar-button" id="navbar-account-button">my account</Link>
    </div>

    <div id="navbar-social-media-container">
      <img src={require('./twitter.png')} alt="twitter" className="navbar-logos" id="twitter" />
      <img src={require('./instagram.png')} alt="instagram" className="navbar-logos" />
      <img src={require('./facebook.png')} alt="facebook" className="navbar-logos" id="facebook" />
      <img src={require('./soundcloud.png')} onClick={props.openSoundcloud} alt="soundcloud" className="navbar-logos" id="soundcloud" />
    </div>

    <div id="soundcloud-player">
      <iframe width="100%" height="350" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/237241813&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
    </div>
  </div>
    );

export default Navbar;
