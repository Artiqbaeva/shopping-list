import React, { useState, useEffect } from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const toggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login"); // foydalanuvchini login sahifasiga yuborish
  };

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6 border-b">
      {/* Left: Logo */}
      <div className="text-xl font-bold text-blue-600 tracking-wide"></div>

      {/* Center: Search */}
      <div className="flex items-center w-md">
        <input
          type="text"
          placeholder="Search group and join..."
          className="px-3 w-full py-1.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        {/* Notification */}
        <button className="relative hover:text-blue-600">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar + Dropdown */}
        <div className="relative">
          <div
            className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm cursor-pointer hover:shadow"
            onClick={toggleLogout}
          >
            <User className="w-4 h-4" />
          </div>

          {showLogout && (
            <button
              onClick={logOut}
              className="absolute text-nowrap right-0 mt-2 bg-white border border-gray-200 shadow-md rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 z-10"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
