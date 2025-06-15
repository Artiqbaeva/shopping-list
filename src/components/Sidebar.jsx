import React from "react";
import { User, Users, Settings, BarChart } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Profile", path: "/main", icon: <User /> },
    { name: "Groups", path: "/main/groups", icon: <Users /> },
    { name: "Analytics", path: "/main/analytics", icon: <BarChart /> },
    { name: "Settings", path: "/main/settings", icon: <Settings /> },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4">
      <nav className="flex flex-col gap-2 mt-20">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-100 ${
                isActive ? "bg-blue-100 font-semibold text-blue-600" : ""
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
