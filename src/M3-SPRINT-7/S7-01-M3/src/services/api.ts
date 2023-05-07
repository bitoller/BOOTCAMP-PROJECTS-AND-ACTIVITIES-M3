import axios from "axios";

export const api = axios.create({
  baseURL: "https://furever-homes-api.onrender.com",
  timeout: 8000,
});
