import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="Navbar">
    <ul>
      <Link to="/">Home</Link> 
      <span> - </span>
      <Link to="/Placeholder">Place</Link>
    </ul>
  </nav>
);

export default Navbar;