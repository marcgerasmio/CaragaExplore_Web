import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 font-mono">
      <div className="mb-8 flex justify-center">
        <img
          src="logo.png"
          alt="App Logo"
          className="h-38 w-38 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "fallback-logo.png";
          }}
        />
      </div>

      <nav className="space-y-4">
        <NavLink
          to="/ltdashboard"
          className={({ isActive }) =>
            `flex items-center text-lg font-medium transition ${
              isActive ? "text-blue-400 font-bold" : "hover:text-yellow-400"
            }`
          }
        >
          <FaTachometerAlt className="mr-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/ltform"
          className={({ isActive }) =>
            `flex items-center text-lg font-medium transition ${
              isActive ? "text-green-400 font-bold" : "hover:text-yellow-400"
            }`
          }
        >
          <FaCalendarAlt className="mr-3" />
          Upload Spot
        </NavLink>

        <NavLink
          to="/ltpending"
          className={({ isActive }) =>
            `flex items-center text-lg font-medium transition ${
              isActive ? "text-green-400 font-bold" : "hover:text-yellow-400"
            }`
          }
        >
          <FaUser className="mr-3" />
          Pending Uploads
        </NavLink>

        <NavLink
          to="/ltaccepted"
          className={({ isActive }) =>
            `flex items-center text-lg font-medium transition ${
              isActive ? "text-green-400 font-bold" : "hover:text-yellow-400"
            }`
          }
        >
          <FaUser className="mr-3" />
          Accepted Uploads
        </NavLink>

        <hr className="my-4 border-gray-600" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-lg font-medium transition ${
              isActive ? "text-green-400 font-bold" : "hover:text-yellow-400"
            }`
          }
        >
          <FaSignOutAlt className="mr-3" />
          Sign Out
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
