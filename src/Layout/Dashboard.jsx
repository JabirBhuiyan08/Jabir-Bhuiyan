import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 min-h-screen bg-gray-900 p-4 absolute md:relative z-10 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Logo / Brand */}
        <div className="text-2xl font-bold mb-6 text-center text-white">User Panel</div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to=""
            className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            to="/dashboard/user"
            className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUser /> User Info
          </NavLink>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg text-white hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaUser /> Profile
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button
          onClick={() => {
            handleLogout();
            setIsMenuOpen(false);
          }}
          className="mt-auto flex items-center gap-3 p-3 rounded-lg text-white hover:bg-red-600 w-full"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="absolute top-4 left-4 md:hidden bg-gray-900 text-white p-2 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Outlet Content */}
      <div className="flex-1 p-8 pt-20" onClick={() => setIsMenuOpen(false)}>
        <Outlet />
        
      </div>
    </div>
  );
};

export default Dashboard;
