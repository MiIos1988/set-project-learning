import axios from "axios";
import { Outlet, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/loginSection/nav/NavbarComponent";
import HomePageComponent from "./pages/HomePageComponent";
import LoginPageComponent from "./pages/LoginPageComponent";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  return (
    <div className="container-fluid">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
