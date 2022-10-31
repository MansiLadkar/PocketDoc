import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}
// {
//   <Route path="/login" exact component={Login} />;
// }

export default App;
