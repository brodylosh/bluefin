import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
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
      <h1>Container</h1>
      <HouseList houseList={houseList} />
      <AgentList agentList={agentList} />
      <Login />
      <SignUp />

      {/* <Routes>
        <Route path="/login">{<Login />}</Route>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/houses" element={<HouseList houseList={houseList} />} />
        <Route path="/agents" element={<AgentList agentList={agentList} />} />
      </Routes> */}
      {/* <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/houses">
              <HouseList />
            </Route>
            <Route path="/agents">
              <AgentList />
            </Route>
          </Switch>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default Container;
