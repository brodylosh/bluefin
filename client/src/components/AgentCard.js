import React from 'react';
import { Card, Button } from 'react-bootstrap';

function AgentCard({ agent }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={agent.img_url} />
      <Card.Body>
        <Card.Title>Brokerage: {agent.brokerage}</Card.Title>
        <Card.Text>License #: {agent.license_number}</Card.Text>
        <Button variant="primary">View Listings</Button>
      </Card.Body>
    </Card>
  );
}

export default AgentCard;
