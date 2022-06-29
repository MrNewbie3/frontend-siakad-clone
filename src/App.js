import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DashboardLayout from "./views/DashboardLayout";
import Login from "./views/Login";
import ForgotPassword from "./views/ForgotPassword";
import NotFound from "./views/errors/NotFound";
import Main from "./components/main";
import Announcement from "./components/announcement";
import Report from "./components/report";
import Profil from "./components/profil/profil";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<DashboardLayout data={[<Main />, <Announcement />, <Report />]} />} />
          <Route path="/profil" element={<DashboardLayout data={<Profil />} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
