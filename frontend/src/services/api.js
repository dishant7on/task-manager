import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-4mdx.onrender.com/api",
});

export default API;