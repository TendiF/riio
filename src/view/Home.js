import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/topics">Topics</Link>
    </div>
  );
}
export default Home;
