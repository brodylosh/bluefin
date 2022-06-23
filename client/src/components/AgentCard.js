import React from 'react';
// import { Button } from 'react-bootstrap';

function AgentCard({ agent }) {
  return (
    <div>
      <h1>{agent.first_name + ' ' + agent.last_name}</h1>
      <img src={agent.img_url} />
      <h3>License #: {agent.license_number}</h3>
      <h4>Brokerage: {agent.brokerage}</h4>
      {/* agent/:id/houses */}
      {/* <Button>Listings</Button> */}
    </div>
  );
}

export default AgentCard;
