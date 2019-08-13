import React from 'react';
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';

function Payment() {
  return (
    <div>
      <Breadcrumb step={3} />

      <div className="contact">
        <h1>Payment</h1>
        <div>
          <h3>Select Payment Methods</h3>
          <div>
            <input type="radio" value="Mandiri" />
            Bank
          </div>
          <div>
            <input type="radio" value="Mandiri" />
            Cash
          </div>
        </div>
        <button className="primary" type="button">Previous</button>
        <Link to="/thanks">
          <button className="primary" type="button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Payment;
