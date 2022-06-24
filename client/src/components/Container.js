import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import HouseList from './HouseList';
import AgentList from './AgentList';

function Container() {
  const [houseList, setHouseList] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [houseSearch, setHouseSearch] = useState('');
  const [agentSearch, setAgentSearch] = useState('');

  const [currentBuyer, setCurrentBuyer] = useState('');

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

  useEffect(() => {
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((buyer) => setCurrentBuyer(buyer));
      }
    });
  }, []);

  if (!currentBuyer) return <Login setCurrentBuyer={setCurrentBuyer} />;

  let filteredHouses = houseList.filter((house) =>
    house.address.toLowerCase().includes(houseSearch.toLowerCase())
  );

  let filteredAgents = agentList.filter((agent) =>
    agent.first_name.toLowerCase().includes(agentSearch.toLowerCase())
  );

  return (
    <div className="Container">
      {currentBuyer ? <NavBar setCurrentBuyer={setCurrentBuyer} /> : null}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/houses"
          element={
            <HouseList
              houseList={filteredHouses}
              setHouseSearch={setHouseSearch}
              setCurrentBuyer={setCurrentBuyer}
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
