import React from 'react';

import './Signup.css';
import '../../reset.css';

const Signup = props => (
  <div id="signup-container">

    <h1 id="signup-title">signup</h1>

    <div className="signup-input-containers">
      <input
        className="signup-inputs"
        type="text"
        placeholder="Username"
        value={props.signupUsername}
        onChange={props.updateSignupUsername}
      />
    </div>

    <div className="signup-input-containers">
      <input
        className="signup-inputs"
        type="text"
        placeholder="Password"
        value={props.signupPassword}
        onChange={props.updateSignupPassword}
      />
    </div>

    <button
      id="signupButton"
      onClick={props.signup}
    >
      Signup!
    </button>

  </div>
    );

export default Signup;
