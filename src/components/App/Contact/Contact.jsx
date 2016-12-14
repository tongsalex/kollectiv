import React from 'react';
import './Contact.css';
import '../../reset.css';

const Contact = props => (
  <div id="contact-container">
    <div id="sub-contact-container">
      <p className="sub-contact-p-tag">If you are a producer, unicorn rider, musician, DJ, blogger, fashionista, party planner/promoter, space traveler, silver surfer, or all of the above and would like to work with us, please send us a message. We would really appreciate it.</p>

      <div>first name</div>
        <input className="newblogpost-inputs" />
      <div>last name</div>
        <input className="newblogpost-inputs" />
      <div>email</div>
        <input className="newblogpost-inputs" />
      <div>message</div>
        <textarea />

    </div>
  </div>
    );

export default Contact;
