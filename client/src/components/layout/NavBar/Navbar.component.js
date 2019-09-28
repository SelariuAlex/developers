import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/">
          <i className="fas fa-laptop-code"></i> Developers
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profile">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
