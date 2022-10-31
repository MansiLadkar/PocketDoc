import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/FindDoctors";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FindDoctors from "./pages/FindDoctors";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/FindDoctors" element={<FindDoctors />} />
        </Routes>
      </Router>
    </div>
  );
}
// {
//   <Route path="/login" exact component={Login} />;
// }

export default App;
