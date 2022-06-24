import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import HouseList from './HouseList';
import AgentList from './AgentList';

function Container() {
  const [houseList, setHouseList] = useState([]);
  const [agentList, setAgentList] = useState([]);
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
    fetch('/me')
    .then(resp => {
      if(resp.ok){
        resp.json().then(buyer => setCurrentBuyer(buyer))
      }
    })
  }, [])

  return (
    <div className="Container">

      <Routes>
        <Route path="/" element={<Login currentBuyer = {currentBuyer}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/houses" element={<HouseList houseList={houseList} />} />
        <Route path="/agents" element={<AgentList agentList={agentList} />} />
      </Routes>
    </div>
  );
}

export default Container;
