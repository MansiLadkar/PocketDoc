import "./App.css";
import Login from "./pages/Login";
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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
          <Route path="/AddDoctors" element={<AddDoctors />} />
          <Route path="/EditDoctors" element={<EditDoctors />} />
          <Route path="/FindHospitals" element={<FindHospitals />} />
          <Route path="/AddHospitals" element={<AddHospitals />} />
          <Route path="/EditHospitals" element={<EditHospitals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
