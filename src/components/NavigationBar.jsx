import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>{' '}
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>{' '}
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeclassname="active">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
