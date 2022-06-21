import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <NavContainer>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/houses">Houses</NavLink>
      <NavLink to="/agents">Agents</NavLink>
    </NavContainer>
  );
}

export default NavBar;
