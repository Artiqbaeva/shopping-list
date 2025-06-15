import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // Agar token bor bo‘lsa, userni avtomatik `/main` ga yo‘naltiramiz
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };

    try {
      const res = await axios.post(
        "https://nt-shopping-list.onrender.com/api/auth",
        user
      );
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/main"); // to‘g‘ri sahifaga redirect
      }
    } catch (err) {
      alert("Login failed!");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
