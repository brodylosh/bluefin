import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [image, setImage] = useState('');
  const [budget, setBudget] = useState(0);
  const [preapproved, setPreapproved] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // function handleSubmit(e) {
  //   const buyer = {
  //     first_name: firstName,
  //     last_name: lastName,
  //     age: age,
  //     img_url: image,
  //     budget: budget,
  //     preapproved: preapproved,
  //     username: username,
  //     password: password,
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
      <h1>SignUp</h1>

      <form>
        <label>First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Image:</label>
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Budget:</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        {/* <label>Are You Preapproved?</label>
        <input
          type="checkbox"
          value={preapproved}
          onChange={setPreapproved(!preapproved)}
        /> */}
        <label>Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up!</button>
      </form>
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
