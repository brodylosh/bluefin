import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function Login({ setCurrentBuyer }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const buyer = {
      username: username,
      password: password,
    };
    fetch('/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(buyer),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.id) {
          setCurrentBuyer(data);
          navigate('/houses');
        } else {
          setErrors(data.error);
        }
      });
  }

  return (
    <>
      <br></br>
      <Form className="rounded p-4 p-sm-3 form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <br></br>
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Log In
        </Button>
        <br></br>
        <h4>{errors}</h4>
        <br></br>
        <h4>New to BlueFin?</h4>
        <NavLink to="/signup" className="d-grid gap-2">
          <Button size="lg">Sign Up</Button>
        </NavLink>
        <br></br>
      </Form>
    </>
  );
}

export default Login;
