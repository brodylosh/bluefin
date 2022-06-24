import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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
    fetch('/agents')
      .then((resp) => resp.json())
      .then(setAgentList);
    fetch('/me').then((resp) => {
      if (resp.ok) {
        resp.json().then((buyer) => setCurrentBuyer(buyer));
      }
    });
  }, []);

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
        <Route path="/" element={<Login setCurrentBuyer={setCurrentBuyer} />} />
        <Route
          path="/signup"
          element={<SignUp setCurrentBuyer={setCurrentBuyer} />}
        />
        <Route
          path="/houses"
          element={
            <HouseList
              houseList={filteredHouses}
              setHouseSearch={setHouseSearch}
              setCurrentBuyer={setCurrentBuyer}
              currentBuyer={currentBuyer}
            />
          }
        />
        <Route
          path="/agents"
          element={
            <AgentList
              agentList={filteredAgents}
              setAgentSearch={setAgentSearch}
              currentBuyer={currentBuyer}
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
