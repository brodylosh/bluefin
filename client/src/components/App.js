import React from 'react';
import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Header';
import NavBar from './NavBar';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <div className="Container">
//       <h1>Container</h1>
//     <Router>
        <NavBar />
        <Header />
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
    </div>
  );
}

export default App;
