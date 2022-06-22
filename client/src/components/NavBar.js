import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to="/houses">Houses</NavLink>
      <NavLink to="/agents">Agents</NavLink>
    </div>
  );
}

export default NavBar;
