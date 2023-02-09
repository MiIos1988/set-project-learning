import axios from "axios";
import LoginPageComponent from "./pages/LoginPageComponent";

axios.defaults.baseURL = "http://localhost:5050/api";

function App() {
  return (
    <div className="container">
      <LoginPageComponent />
    </div>
  );
}

export default App;
