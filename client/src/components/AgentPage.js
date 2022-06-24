import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';
import { useParams } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';

function AgentPage() {
  const [agent, setAgent] = useState({});
  const { first_name, last_name, img_url, license_number, brokerage, houses } =
    agent;

  let params = useParams();

  useEffect(() => {
    fetch(`/agents/${params.id}`)
      .then((resp) => resp.json())
      .then(setAgent);
  }, []);

  if (!agent) return <></>;
  if (!houses) return <></>;

  let renderHouses = houses.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img_url} />
        <Card.Body>
          <Card.Title>{first_name + ' ' + last_name}</Card.Title>
          <Card.Text>Brokerage: {brokerage}</Card.Text>
          <Card.Text>License #: {license_number}</Card.Text>
        </Card.Body>
      </Card>
      <br></br>
      <Container className="list">
        <br></br>
        <h4>Active Listings:</h4>
        <br></br>
        <Row className="g-4">{renderHouses}</Row>
      </Container>
      <br></br>
    </>
  );
}

export default AgentPage;
