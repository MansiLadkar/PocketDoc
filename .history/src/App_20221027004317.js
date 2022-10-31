import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindDoctors from "./pages/doctors/FindDoctors";
import AddDoctors from "./pages/doctors/AddDoctors";
import EditDoctors from "./pages/doctors/EditDoctors";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
          <Route path="/AddDoctors" element={<AddDoctors />} />
          <Route path="/EditDoctors" element={<EditDoctors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;