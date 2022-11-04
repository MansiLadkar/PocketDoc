import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Routes>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
