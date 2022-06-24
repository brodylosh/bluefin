import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function AgentCard({ agent }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={agent.img_url} />
      <Card.Body>
        <Card.Title>{agent.first_name + ' ' + agent.last_name}</Card.Title>
        <Card.Text>Brokerage: {agent.brokerage}</Card.Text>
        <Card.Text>License #: {agent.license_number}</Card.Text>
        <NavLink to={`/agents/${agent.id}`} className="d-grid gap-2">
          <Button variant="primary">View Listings</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
}

export default AgentCard;
