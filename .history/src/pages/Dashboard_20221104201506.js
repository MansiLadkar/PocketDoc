import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <h1>Welcome To PocketDoc</h1>
      </div>
    </div>
  );
};

export default Dashboard;
