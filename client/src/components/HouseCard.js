import React from 'react';
import { Button } from 'react-bootstrap';

function HouseCard({ house }) {
  return (
    <div>
      <h1>House</h1>
      <h1>{house.address}</h1>
      <img src={house.img_url} />
      <p>{house.price}</p>
      <p>{house.beds}</p>
      <p>{house.baths}</p>
      <Button></Button>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={house.image_url} />
        <Card.Body>
          <Card.Title>{house.address}</Card.Title>
          <Card.Text>{house.price}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Beds: {house.beds}</ListGroupItem>
          <ListGroupItem>Baths: {house.baths}</ListGroupItem>
          <ListGroupItem>Square Feet: {house.square_feet}</ListGroupItem>
          <ListGroupItem>
            Listed By: {house.agent.first_name + ' ' + house.agent.last_name}
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button>Save Home</Button>
          <Button>Edit Listing</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default HouseCard;
