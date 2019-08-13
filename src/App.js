import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './assets/App.css';


import logo from './assets/images/riio_corner.png';
import Home from './view/Home';
import Destination from './view/Destionation';
import Register from './view/Register';
import Contact from './view/Contact';
import Payment from './view/Payment';
import Thanks from './view/Thanks';


function BasicExample() {
  return (
    <Router>
      <div>
        <div className="header">
          <div>
            <img src={logo}/>
          </div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/topics">Destination</Link>
            <Link to="/topics">Send Money</Link>
            <Link to="/topics">How It Works</Link>
            <Link to="/topics">About</Link>
            <Link to="/topics">Contact</Link>
          </div>
          <div>
            <Link to="/topics">Login</Link>
            |
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/payment" component={Payment} />
        <Route path="/thanks" component={Thanks} />
      </div>
    </Router>
  );
}

export default BasicExample;
