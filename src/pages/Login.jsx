import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        formData
      );
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user)); // qo‘shildi
        navigate("/main");
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Sign In
        </h2>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            required
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          No account yet?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
