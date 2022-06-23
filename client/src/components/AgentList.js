import React from 'react';
import AgentCard from './AgentCard';

function AgentList({ agentList }) {
  let renderAgents = agentList.map((agent) => {
    return <AgentCard key={agent.id} agent={agent} />;
  });
  return (
    <div>
      <h1>Agents</h1>
      <ul>{renderAgents} </ul>;
    </div>
  );
}

export default AgentList;
