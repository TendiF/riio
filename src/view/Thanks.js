import React from 'react';
import Select from 'react-select';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Breadcrumb from '../component/Breadcrumb';


function Thanks() {
  return (
    <div>
      <Breadcrumb step={4} />
      <div className="contact">
        <h1>Thank You</h1>
        <p>
          Your request has been submitted.
          Please make payment within 24 hours for us to process your transfer
        </p>
      </div>
    </div>
  );
}

export default Thanks;
