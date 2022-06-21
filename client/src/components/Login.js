import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Login() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
        ></Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;
