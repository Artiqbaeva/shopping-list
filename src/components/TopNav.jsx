import React from "react";

const TopNav = () => {
  return (
    <div className="bg-white shadow px-4 py-2 flex items-center justify-between">
      <div>🔵 + New</div>
      <input
        type="text"
        placeholder="Search group and join..."
        className="border px-2 py-1 rounded"
      />
      <div>🔔 ⚙️</div>
    </div>
  );
};

export default TopNav;