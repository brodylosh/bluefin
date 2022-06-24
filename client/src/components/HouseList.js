import React from 'react';
import HouseCard from './HouseCard';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HouseList({ houseList, setHouseSearch }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <>
      <div className="parent grid-parent">
        <h1 className="child">Houses:</h1>
        <Form.Group className="mb-3 search child">
          <Form.Control
            placeholder="Search..."
            onChange={(e) => setHouseSearch(e.target.value)}
          />
        </Form.Group>
      </div>
      <br></br>
      <br></br>
      <Container>
        <Row className="g-4">{renderHouses}</Row>
      </Container>
    </>
  );
}

export default HouseList;
