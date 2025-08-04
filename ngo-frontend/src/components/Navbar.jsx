import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        HopeFoundation
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/admin">Admin View</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;