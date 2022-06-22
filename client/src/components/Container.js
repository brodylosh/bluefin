import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import HouseList from './HouseList';
import AgentList from './AgentList';

function Container() {
  const [houseList, setHouseList] = useState([]);
  const [agentList, setAgentList] = useState([]);

  useEffect(() => {
    fetch('/houses')
      .then((resp) => resp.json())
      .then(setHouseList);
  }, []);

  useEffect(() => {
    fetch('/agents')
      .then((resp) => resp.json())
      .then(setAgentList);
  }, []);

  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/houses" element={<HouseList houseList={houseList} />} />
        <Route path="/agents" element={<AgentList agentList={agentList} />} />
      </Routes>
    </div>
  );
}

export default Container;
