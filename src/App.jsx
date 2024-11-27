import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import LTDashboard from "./components/LocalTourism/LTDashboard.jsx";
import LTPending from "./components/LocalTourism/LTPending.jsx";
import LTAccepted from "./components/LocalTourism/LTAccepted.jsx";
import LTForm from "./components/LocalTourism/LTForm.jsx";
import Dashboard from "./components/DOT/Dashboard.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ltdashboard" element={<LTDashboard />} />
        <Route path="/ltpending" element={<LTPending />} />
        <Route path="/ltaccepted" element={<LTAccepted />} />
        <Route path="/ltform" element={<LTForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
