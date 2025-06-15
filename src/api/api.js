import axios from "axios";

const api = axios.create({
  baseURL: "https://nt-shopping-list.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
