import React from 'react';
import AgentCard from './AgentCard';

function HouseList({ agentList }) {
  let renderAgents = agentList.map((agent) => {
    return <AgentCard key={agent.id} agent={agent} />;
  });

  return <ul>{renderAgents} </ul>;
}

export default AgentList;
