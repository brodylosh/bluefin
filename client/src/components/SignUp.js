import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function onSubmit(e) {
  //   const buyer = {
  //     username,
  //     password,
  //   };
  //   fetch('/buyers', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(buyer),
  //   }).then((res) => {
  //     if (res.ok) {
  //       res.json().then(setCurrentUser);
  //     } else {
  //       res.json().then((e) => setErrors(Object.entries(e.error).flat()));
  //     }
  //   });
  // }

  return (
    <div>
      {/* <Form className="rounded p-4 p-sm-3">
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
     </Form> */}
    </div>
  );
}

export default SignUp;
