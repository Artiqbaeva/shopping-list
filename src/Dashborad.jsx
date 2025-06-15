import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <TopNav />
        <main className="p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
