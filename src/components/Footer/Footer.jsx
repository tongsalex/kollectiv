import React from 'react';

import './Footer.css';
import '../reset.css';

const Footer = props => (
  <div id="footer-container">
    <div id="newsletter-signup-container">
      <p>newsletter signup</p>
      <input type="email" id="newsletter-signup-input" placeholder="email address" />
      <button id="newsletter-signup-button">ok</button>
    </div>
    <div id="sub-footer-container">
      <div id="sub-sub-footer-container">
        <div className="footer-text">©kollektîv 2016</div>
        <div className="footer-text">SITE BY alex tong</div>
      </div>
    </div>

  </div>
    );

export default Footer;
