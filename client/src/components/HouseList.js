import React from 'react';
import NavBar from './NavBar';
import HouseCard from './HouseCard';
import { Container, Row, Form } from 'react-bootstrap';

function HouseList({ houseList, setHouseSearch }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <>
      <NavBar />
      <h1 className="float-left">Houses:</h1>
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

export default HouseList;
