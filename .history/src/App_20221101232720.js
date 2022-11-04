import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindDoctors from "./pages/doctors/FindDoctors";
import AddDoctors from "./pages/doctors/AddDoctors";
import EditDoctors from "./pages/doctors/EditDoctors";
import FindHospitals from "./pages/hospitals/FindHospitals";
import AddHospitals from "./pages/hospitals/AddHospitals";
import EditHospitals from "./pages/hospitals/EditHospitals";
import FindAmbulance from "./pages/ambulance/FindAmbulance";
import AddAmbulance from "./pages/ambulance/AddAmbulance";
import EditAmbulance from "./pages/ambulance/EditAmbulance";
import FindLabtest from "./pages/labtest/FindLabtest";
import AddLabtest from "./pages/labtest/AddLabtest";
import EditLabtest from "./pages/labtest/EditLabtest";
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
