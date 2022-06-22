import React from 'react';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
  return (
    <Form className="rounded p-4 p-sm-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="password" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="password" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="password" placeholder="Age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Profile Image</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Budget</Form.Label>
        <Form.Control type="password" placeholder="Budget" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Preapproved</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  );
}

export default SignUp;

first_name;
last_name;
age;
img_url;
budget;
preapproved;
