import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:7500/api",
  withCredentials: true,
});

export default apiRequest;
