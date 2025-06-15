import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return navigate("/");
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let newUser = {
      name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
    };
    let res = await axios.post(
      "https://nt-shopping-list.onrender.com/api/users",
      newUser
    );
    localStorage.setItem("token", res.data.token);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="sumbit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
