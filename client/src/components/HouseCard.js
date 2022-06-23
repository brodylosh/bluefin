import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

function HouseCard({ house }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={house.img_url} />
      <Card.Body>
        <Card.Title>{house.address}</Card.Title>
        <Card.Text>{house.price}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Beds: {house.beds}</ListGroupItem>
        <ListGroupItem>Baths: {house.baths}</ListGroupItem>
        <ListGroupItem>Square Feet: {house.square_feet}</ListGroupItem>
        {/* <ListGroupItem>
            Listed By: {house.agents.first_name + ' ' + house.agent.last_name}
          </ListGroupItem> */}
      </ListGroup>
      <Card.Body>
        <Button variant="primary">Save Home</Button>
        <Button variant="outline-primary">Edit Home</Button>
      </Card.Body>
    </Card>
  );
}

export default HouseCard;
