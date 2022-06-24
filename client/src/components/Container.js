import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import HouseList from './HouseList';
import AgentList from './AgentList';

function Container() {
  const [houseList, setHouseList] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [houseSearch, setHouseSearch] = useState('');
  const [agentSearch, setAgentSearch] = useState('');

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

  let filteredHouses = houseList.filter((house) =>
    house.address.toLowerCase().includes(houseSearch.toLowerCase())
  );

  let filteredAgents = agentList.filter((agent) =>
    agent.first_name.toLowerCase().includes(agentSearch.toLowerCase())
  );

  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/houses"
          element={
            <HouseList
              houseList={filteredHouses}
              setHouseSearch={setHouseSearch}
            />
          }
        />
        <Route
          path="/agents"
          element={
            <AgentList
              agentList={filteredAgents}
              setAgentSearch={setAgentSearch}
            />
          }
        />
        {/* <Route
          path="/agents/:id/houses"
          element={
            <houseList
              houseList={filteredHouses}
              setHouseSearch={setHouseSearch}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default Container;
