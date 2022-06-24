import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <NavLink to="/houses">
            <Button variant="outline-primary">Houses</Button>
          </NavLink>
          <Navbar.Brand>
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/1061/1924/products/Big_Tuna_Iphone_Emoji_JPG_large.png?v=1571606114"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <NavLink to="/agents">
            <Button variant="outline-primary">Agents</Button>
          </NavLink>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
    </>
  );
}

export default NavBar;
