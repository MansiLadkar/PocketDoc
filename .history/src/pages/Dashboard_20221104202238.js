import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <h1 style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          Welcome To PocketDoc
        </h1>
      </div>
    </div>
  );
};

export default Dashboard;
