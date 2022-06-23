import React from 'react';
import HouseCard from './HouseCard';
import { Row, Col } from 'react-bootstrap';

function HouseList({ houseList }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>{renderHouses} </Col>
      ))}
    </Row>
  );
}

export default HouseList;
