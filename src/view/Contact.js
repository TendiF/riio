import React from 'react';
import Select from 'react-select';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';


function Contact() {
  return (
    <div>
      <Breadcrumb step={2} />

      <div className="contact">
        <h1>Contact</h1>
        <div>
          <h3>Select Recipient</h3>
          <Select
            placeholder="Add New Recipient"
            className="select"
            options={[
              { value: '1', label: 'Indonesia' },
              { value: '2', label: 'Malaysia' },
            ]}
          />
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
          <h3>Phone</h3>
          <input type="email" />
        </div>
        <h1>Bank Details</h1>
        <div>
          <h3>Bank Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Bank Account Name</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Bank Account Number</h3>
          <input type="text" />
        </div>
        <button className="primary" type="button">Previous</button>
        <Link to="/payment">
          <button className="primary" type="button">Next</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
