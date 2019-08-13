import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../assets/App.css';
import Select from 'react-select';


function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <h1>Sending Money around the world at ease</h1>
          <div>
            <Select
              className="select"
              options={[
                { value: '1', label: 'Indonesia' },
                { value: '2', label: 'Malaysia' },
              ]}
            />
            <Link to="/destination">
              <button className="button" type="button">Get Started</button>
            </Link>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1563216368-5b6a40648062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
        </div>
      </div>
    </div>
  );
}
export default Home;
