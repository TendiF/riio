import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Destination() {
  return (
    <div>
      <div className="register">
        <div>
          <h1>Create An Account</h1>
          <p>Already have an account ? login</p>
        </div>
        <div>
          <h3>First Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Last Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Email</h3>
          <input type="email" />
        </div>
        <div>
          <h3>Password</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Retype Password</h3>
          <input type="text" />
        </div>
        <button className="primary" type="button">Continue</button>
      </div>
    </div>
  );
}

export default Destination;
