import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap/Navbar';
// import { Nav, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink to="/houses">Houses</NavLink>
      <NavLink to="/agents">Agents</NavLink>

      {/* <Navbar bg="dark" variant="dark"> */}
      {/* <Container> */}
      {/* <Navbar.Brand href="#home"> */}
      {/* <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          React Bootstrap
        </Navbar.Brand> */}
      {/* <Nav.Link href="#home">Houses</Nav.Link>
          <Nav.Link href="#features">Agents</Nav.Link> */}
      {/* </Container> */}
      {/* </Navbar> */}
      {/* <NavLink to="/houses">Houses</NavLink>
      <NavLink to="/agents">Agents</NavLink> */}
    </div>
  );
}

export default NavBar;
