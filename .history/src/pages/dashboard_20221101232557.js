import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Navbar />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
