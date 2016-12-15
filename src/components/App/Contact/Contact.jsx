import React from 'react';
import './Contact.css';
import '../../reset.css';

const Contact = props => (
  <div id="contact-container">
    <div id="sub-contact-container">
      <p className="sub-contact-p-tag">If you are a producer, <span className="about-span">unicorn rider</span>, musician, DJ, blogger, fashionista, party bringer, space traveler, silver surfer, or all of the above and would like to work with us, <span className="about-span">please</span> send us a message. We would really appreciate it.</p>

        <div id="contact-input-container">
          <input className="contact-inputs" placeholder="first name" />

          <input className="contact-inputs" placeholder="last name" />

          <input className="contact-inputs" placeholder="email" />

        </div>

        <textarea className="contact-inputs" id="contact-message-input" placeholder="message" />

      <button id="contact-button">submit</button>
    </div>

  </div>
    );

export default Contact;
