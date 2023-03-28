import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <h1
        style={{
          fontFamily: 'Rubik Vinyl',
          color: 'aliceblue',
          fontWeight: 'bold',
        }}
      >
        Math Magician
      </h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/calculator">calculator</Link>
        </li>
        <li>
          <Link to="/quote">quote</Link>
        </li>
      </ul>
    </div>
  );
}
