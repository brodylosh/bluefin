import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AgentCard({ agent }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={agent.img_url} />
      <Card.Body>
        <Card.Title>{agent.first_name + ' ' + agent.last_name}</Card.Title>
        <Card.Text>Brokerage: {agent.brokerage}</Card.Text>
        <Card.Text>License #: {agent.license_number}</Card.Text>
        <Button variant="primary">View Listings</Button>
      </Card.Body>
    </Card>
  );
}

export default AgentCard;
