import React from 'react';
import AgentCard from './AgentCard';
import { Container, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AgentList({ agentList, setAgentSearch, currentBuyer }) {
  const navigate = useNavigate();

  if (!currentBuyer) {
    navigate('/');
  }

  let renderAgents = agentList.map((agent) => {
    return <AgentCard key={agent.id} agent={agent} />;
  });

  return (
    <div className="list">
      <br></br>
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
      <br></br>
    </div>
  );
}

export default AgentList;
