import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDoctors from "../pages/doctors/FindDoctors";
import AddDoctors from "../pages/doctors/AddDoctors";
import EditDoctors from "../pages/doctors/EditDoctors";
import FindHospitals from "../pages/hospitals/FindHospitals";
import AddHospitals from "../pages/hospitals/AddHospitals";
import EditHospitals from "../pages/hospitals/EditHospitals";
import FindAmbulance from "../pages/ambulance/FindAmbulance";
import AddAmbulance from "../pages/ambulance/AddAmbulance";
import EditAmbulance from "../pages/ambulance/EditAmbulance";
import FindLabtest from "../pages/labtest/FindLabtest";
import AddLabtest from "../pages/labtest/AddLabtest";
import EditLabtest from "../pages/labtest/EditLabtest";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="navb">
        <Navbar />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default Dashboard;
