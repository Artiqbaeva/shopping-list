import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return navigate("/");
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: e.target[0].value,
      password: e.target[1].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/auth",
      user
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
    if (res.status===200) {
        navigate("/")
        
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input autoComplete="current-password" type="text" placeholder="username" />
        <input autoComplete="current-password" type="password" placeholder="password" />
        <button type="sumbit">Sign Up</button>
      </form>
    </div>
  );
}
export default Login;