import "./App.css";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import { SidebarData } from "./components/SidebarData";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
          <Route path="/AddDoctors" element={<AddDoctors />} />
          <Route path="/EditDoctors" element={<EditDoctors />} />
          <Route path="/FindHospitals" element={<FindHospitals />} />
          <Route path="/AddHospitals" element={<AddHospitals />} />
          <Route path="/EditHospitals" element={<EditHospitals />} />
          <Route path="/FindAmbulance" element={<FindAmbulance />} />
          <Route path="/EditAmbulance" element={<EditAmbulance />} />
          <Route path="/AddAmbulance" element={<AddAmbulance />} />
          <Route path="/FindLabtest" element={<FindLabtest />} />
          <Route path="/AddLabtest" element={<AddLabtest />} />
          <Route path="/EditLabtest" element={<EditLabtest />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
