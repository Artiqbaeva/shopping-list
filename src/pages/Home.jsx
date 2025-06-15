import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  if (!localStorage.getItem("token")) {
    return navigate("/login");
  }
  const logOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={logOut}>log out</button>
    </div>
  );
}

export default Home;
