import React from "react";
import Navbar from "../components/Navbar";
import Typography from "antd/lib/typography/Typography";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <Typography variant="h1" textAlign="center" fontFamily={"Quicksand"}>
          Login
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;
