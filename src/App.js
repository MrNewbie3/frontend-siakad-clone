<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
=======
import Dashboard from "./pages/Dashboard";
>>>>>>> d1ddc27c9eb98ceca2f206072ab6d8d0bd960973
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
=======
    <main className="App">
      {/* <Login /> */}
      <Dashboard />
    </main>
>>>>>>> d1ddc27c9eb98ceca2f206072ab6d8d0bd960973
  );
}

export default App;
