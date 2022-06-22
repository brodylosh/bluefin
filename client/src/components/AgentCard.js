import React from 'react';
import { Button } from 'react-bootstrap';

function AgentCard({ agent }) {
  return (
    <div>
      <h1>{agent.first_name + ' ' + agent.last_name}</h1>
      <img src={agent.image_url} />
      <ul>
        <li>License #: {agent.beds}</li>
        <li>Brokerage: {agent.baths}</li>
      </ul>
      {/* agent/:id/houses */}
      <Button>Listings</Button>
    </div>
  );
}

export default AgentCard;
