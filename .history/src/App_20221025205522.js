import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" elements={<Login />} />
          <Route path="/Home" elements={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
// {
//   <Route path="/login" exact component={Login} />;
// }

export default App;
