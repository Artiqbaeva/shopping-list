import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4">
      <Link to="/">Profile</Link>
      <Link to="/groups">Groups</Link>
      <Link to="/groups/create">Create Group</Link>
    </aside>
  );
};

export default Sidebar;