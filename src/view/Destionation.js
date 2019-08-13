import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Select from 'react-select';
import Breadcrumb from '../component/Breadcrumb';


function Destination() {
  return (
    <div>
      <Breadcrumb step={1} />
      <div className="destination">
        <div>
          <h3>Destination</h3>
          <Select
            className="select"
            options={[
              { value: '1', label: 'Indonesia' },
              { value: '2', label: 'Malaysia' },
            ]}
          />
        </div>
        <div>
          <h3>Amount To Send</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Include fee ?</h3>
          <input type="checkbox" />
        </div>
        <div>
          <h3>Amount To Receive</h3>
          <input type="text" />
        </div>
        <div className="dest-info">
          <div>
            <p>Exchange Rate</p>
            <p>Transfer Fee</p>
          </div>
          <div>
            <p>1 GBP = 17000</p>
            <p>5GBP</p>
          </div>
          <div>
            <h1>Total bayar</h1>
          </div>
          <div>
            <h1>1005 GBP</h1>
          </div>
        </div>
        <Link to="/contact">
          <button type="button" className="primary">Continue</button>
        </Link>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
}

export default Destination;
