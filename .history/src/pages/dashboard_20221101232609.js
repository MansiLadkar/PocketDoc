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
            {/* <Route path="/Dashboard" element={<Navbar />} /> */}
            <Route
              path="/Dashboard/Doctors/FindDoctors"
              element={<FindDoctors />}
            />
            <Route
              path="/Dashboard/Doctors/AddDoctors"
              element={<AddDoctors />}
            />
            <Route
              path="/Dashboard//Doctors/EditDoctors"
              element={<EditDoctors />}
            />
            <Route
              path="/Dashboard/Hospitals/FindHospitals"
              element={<FindHospitals />}
            />
            <Route
              path="/Dashboard/Hospitals/AddHospitals"
              element={<AddHospitals />}
            />
            <Route
              path="/Dashboard/Hospitals/EditHospitals"
              element={<EditHospitals />}
            />
            <Route
              path="/Dashboard/Ambulance/FindAmbulance"
              element={<FindAmbulance />}
            />
            <Route
              path="/Dashboard/Ambulance/EditAmbulance"
              element={<EditAmbulance />}
            />
            <Route
              path="/Dashboard/Ambulance/AddAmbulance"
              element={<AddAmbulance />}
            />
            <Route
              path="/Dashboard/Labtest/FindLabtest"
              element={<FindLabtest />}
            />
            <Route
              path="/Dashboard/Labtest/AddLabtest"
              element={<AddLabtest />}
            />
            <Route
              path="/Dashboard/Labtest/EditLabtest"
              element={<EditLabtest />}
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
