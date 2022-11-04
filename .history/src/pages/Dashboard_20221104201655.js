import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content">
        <Typography
          variant="h2"
          padding={1}
          marginTop={-8}
          marginBottom={1}
          textAlign="center"
          fontFamily={"Quicksand"}
        >
          Login
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;
