import React from 'react';
import AgentCard from './AgentCard';
import { Container, Row, Col } from 'react-bootstrap';

function AgentList({ agentList }) {
  let renderAgents = agentList.map((agent) => {
    return <AgentCard key={agent.id} agent={agent} />;
  });
  return (
    <>
      <h1 className="float-left">Agents:</h1>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        <Row className="g-4">{renderAgents}</Row>
      </Container>
    </>
  );
}

export default AgentList;
