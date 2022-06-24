import React from 'react';
import AgentCard from './AgentCard';
import { Container, Row, Form } from 'react-bootstrap';

function AgentList({ agentList, setAgentSearch }) {
  let renderAgents = agentList.map((agent) => {
    return <AgentCard key={agent.id} agent={agent} />;
  });

  return (
    <>
      <div className="parent grid-parent">
        <h1 className="child">Agents:</h1>
        <Form.Group className="mb-3 search child">
          <Form.Control
            placeholder="Search..."
            onChange={(e) => setAgentSearch(e.target.value)}
          />
        </Form.Group>
      </div>
      <br></br>
      <br></br>
      <Container>
        <Row className="g-4">{renderAgents}</Row>
      </Container>
    </>
  );
}

export default AgentList;
