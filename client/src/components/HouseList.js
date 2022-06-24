import React from 'react';
import HouseCard from './HouseCard';
import { Container, Row, Col } from 'react-bootstrap';

function HouseList({ houseList }) {
  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <>
      <h1 className="float-left">Houses:</h1>
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
