import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function HouseCard({ house }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={house.img_url} />
      <Card.Body>
        <Card.Title>{house.address}</Card.Title>
        <Card.Text>${house.price}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Beds: {house.beds}</ListGroupItem>
        <ListGroupItem>Baths: {house.baths}</ListGroupItem>
        <ListGroupItem>Square Feet: {house.square_feet}</ListGroupItem>
        {house.agent && (
          <ListGroupItem>
            <p>Listed By:</p>
            <img src={house.agent.img_url} className="agent-icon" />
            <br></br>
            <h4>{house.agent.first_name + ' ' + house.agent.last_name}</h4>
            <NavLink to={`/agents/${house.agent.id}`} className="d-grid gap-2">
              <Button variant="primary">View Listings</Button>
            </NavLink>
          </ListGroupItem>
        )}
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Save Home</Button>
      </Card.Body>
    </Card>
  );
}

export default HouseCard;
