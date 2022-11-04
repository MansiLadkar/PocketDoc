import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content2">
        <div className="dash">
          <h1 style={{ textAlign: "center" }}>Welcome To PocketDoc</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
