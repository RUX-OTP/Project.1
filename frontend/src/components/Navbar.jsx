import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/service">Service</Link> | 
    <Link to="/login">Login</Link> | 
    <Link to="/signup">Signup</Link> | 
    <Link to="/admin">Admin</Link>
  </nav>
);

export default Navbar;
