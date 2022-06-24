import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const login = {
      username: username,
      password: password,
    };
    console.log(login);
  }

  return (
    <>
      <h1 className="float-left">Login:</h1>
      <br></br>
      <Form className="rounded p-4 p-sm-3 form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Log In
        </Button>
        <br></br>
        <br></br>
        <h4>New to BlueFin?</h4>
        <NavLink to="/signup" className="d-grid gap-2">
          <Button size="lg">Sign Up</Button>
        </NavLink>
      </Form>
    </>
  );
}

export default Login;
