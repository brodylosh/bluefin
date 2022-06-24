import React from 'react';
import HouseCard from './HouseCard';
import { Container, Row, Form } from 'react-bootstrap';

function AgentListings({ agentHouseList }) {
  let renderHouses = agentHouseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <>
      <NavBar />
      <h1 className="float-left">Listings:</h1>
      <Form.Group className="mb-3 search">
        <Form.Label>Search</Form.Label>
        <Form.Control
          placeholder="Search..."
          onChange={(e) => setHouseSearch(e.target.value)}
        />
      </Form.Group>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row className="g-4">{renderHouses}</Row>
      </Container>
    </>
  );
}

export default AgentListings;
