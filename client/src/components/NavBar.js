import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

function NavBar({ setCurrentBuyer }) {
  const navigate = useNavigate();

  function handleLogOut() {
    setCurrentBuyer(null);
    fetch('/logout', {
      method: 'DELETE',
    });
    navigate('/');
  }

  return (
    <>
      <Navbar bg="light" variant="light" className="navbar">
        <Container>
          <NavLink to="/houses">
            <Button variant="primary">Houses</Button>
          </NavLink>
          <Button variant="outline-primary" onClick={handleLogOut}>
            Log Out
          </Button>
          {/* <Navbar.Brand>
            <img
              alt=""
              src="https://cdn.shopify.com/s/files/1/1061/1924/products/Big_Tuna_Iphone_Emoji_JPG_large.png?v=1571606114"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand> */}
          <NavLink to="/agents">
            <Button variant="primary">Agents</Button>
          </NavLink>
        </Container>
      </Navbar>
      <br></br>
      <br></br>
    </>
  );
}

export default NavBar;
