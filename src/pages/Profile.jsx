import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({ name: "", username: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(user.username);
    alert("Username copied to clipboard!");
  };

  const handleDelete = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <div className="flex items-center mt-4">
        <div className="w-32 h-32 bg-red-500 text-white flex items-center justify-center rounded-full text-4xl font-bold">
          {user.name ? user.name.charAt(0).toUpperCase() : "?"}
        </div>
        <div className="ml-6">
          <h2 className="text-xl mt-4 mb-3 font-semibold"> {user.name
              ? user.name.charAt(0).toUpperCase() + user.name.slice(1).toLowerCase()
              : "Name"}</h2>
          <span className="bg-green-600 text-white px-2 mb-4 py-1 rounded text-sm">Active</span>
          <p>{user.username || "username"}</p>
        </div>
        <div className="ml-auto space-x-2">
          <button onClick={handleCopy} className="bg-blue-500 text-white px-4 py-2 rounded">
            Copy Username
          </button>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
