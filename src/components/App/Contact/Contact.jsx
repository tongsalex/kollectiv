import React from 'react';
import './Contact.css';
import '../../reset.css';

const Contact = props => (
  <div id="contact-container">
    <div id="sub-contact-container">
      <p className="sub-contact-p-tag">If you are a producer, unicorn rider, musician, DJ, blogger, fashionista, party bringer, space traveler, silver surfer, or all of the above and would like to work with us, please send us a message. We would really appreciate it.</p>


        <input className="contact-inputs" placeholder="first name" />

        <input className="contact-inputs" placeholder="last name" />

        <input className="contact-inputs" placeholder="email" />

        <textarea className="contact-inputs" placeholder="message" />

    </div>
  </div>
    );

export default Contact;
