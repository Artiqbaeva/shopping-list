import React from "react";

const Profile = () => {
  const username = "@artiqbaeva";

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold">Your Profile</h1>
      <div className="flex items-center mt-4">
        <div className="w-32 h-32 bg-red-500 text-white flex items-center justify-center rounded-full text-4xl font-bold">
          M
        </div>
        <div className="ml-6">
          <h2 className="text-xl font-semibold">Mafruza</h2>
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Active</span>
          <p>{username}</p>
        </div>
        <div className="ml-auto space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Copy Username</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;