import axios from "axios";

export const api = axios.create({
  baseURL: "https://furever-homes.onrender.com",
  timeout: 8000,
});
