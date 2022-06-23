// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import SignUp from './SignUp';
// import HouseList from './HouseList';
// import AgentList from './AgentList';

// function Container() {
//   const [houseList, setHouseList] = useState([]);
//   const [agentList, setAgentList] = useState([]);

//   useEffect(() => {
//     fetch('/houses')
//       .then((resp) => resp.json())
//       .then(setHouseList);
//   }, []);

//   useEffect(() => {
//     fetch('/agents')
//       .then((resp) => resp.json())
//       .then(setAgentList);
//   }, []);

//   return (
//     <div className="Container">
//       <h1>Container</h1>
//     <Router>
//       <Routes>
//         {/* <Route path="/login"><Login /></Route> */}
//         <Route path="/" />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/houses" element={<HouseList houseList={houseList} />} />
//         <Route path="/agents" element={<AgentList agentList={agentList} />} />
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default Container;
