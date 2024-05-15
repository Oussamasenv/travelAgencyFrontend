import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./components/AuthenticationPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
    {/* <RegisterPage/>  */}
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/register">AuthenticationPage</Link>
          </li>
          <li>
            <Link to="/login">AuthenticationPage</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
