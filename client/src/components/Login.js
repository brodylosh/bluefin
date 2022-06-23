import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Login({ onLogin }) {

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

//   return (
//     <div>
//       <h1>Login</h1>
//       <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Username</Form.Label>
//         <Form.Control type="email" placeholder="Enter Email" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//     </Form>
//     </div>
//   );
// }

export default Login;
